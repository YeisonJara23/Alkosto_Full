import React, { useRef, useState } from 'react';
import './LoginModal.scss';

// Lee la URL base desde .env (CRA).
// Asegúrate de tener: REACT_APP_API_URL=http://127.0.0.1:8000/api
const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

const LoginModal = ({ onClose, onSuccess = () => {} }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // tu backend requiere password
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Evita enviar dos veces mientras una petición sigue en vuelo
  const inFlight = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || inFlight.current) return;

    setError('');
    setLoading(true);

    try {
      // (útil al depurar) descomenta si quieres ver la URL en consola
      // console.log('API_URL =', API_URL);

      const ctrl = new AbortController();
      inFlight.current = ctrl;

      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, password }),
        signal: ctrl.signal,
      });

      // Intenta parsear, aunque sea error 4xx/5xx, para leer mensajes
      let data = {};
      try {
        data = await res.json();
      } catch (_) {
        data = {};
      }

      if (!res.ok) {
        // Laravel suele devolver { message, errors: { email: [...] } }
        const msg =
          data?.errors?.email?.[0] ||
          data?.errors?.password?.[0] ||
          data?.message ||
          'No se pudo iniciar sesión.';
        throw new Error(msg);
      }

      // Guarda token y usuario para siguientes llamadas
      if (data?.token) localStorage.setItem('auth_token', data.token);
      if (data?.user) localStorage.setItem('auth_user', JSON.stringify(data.user));

      onSuccess(data); // opcional: levantar estado global/contexto
      onClose();
    } catch (err) {
      // Mensaje más claro para problemas de red/CORS
      const isNetwork = err?.name === 'TypeError' || err?.message === 'Failed to fetch';
      const msg = isNetwork
        ? 'No se pudo conectar con el servidor. Verifica que el backend esté en http://127.0.0.1:8000 y que CORS permita http://localhost:3000.'
        : (err.message || 'Ocurrió un error inesperado.');
      setError(msg);
      // console.error('Login error:', err);
    } finally {
      if (inFlight.current) inFlight.current = null;
      setLoading(false);
    }
  };

  const handleOverlayClick = () => {
    if (!loading) onClose();
  };

  return (
    <div
      className="login-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <div className="login-header">
          <h2 id="login-title">Ingresar o crear cuenta</h2>
          <p>Accede a tus datos personales, tus pedidos y solicita devoluciones:</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            disabled={loading}
            minLength={8}
          />
          <button type="submit" disabled={loading || !email.trim() || !password}>
            {loading ? 'Enviando…' : 'Continuar'}
          </button>
        </form>

        {error && (
          <p className="login-error" role="alert" aria-live="assertive">
            {error}
          </p>
        )}

        <div className="login-extra">
          <div>
            <h4>📦 Sigue tu pedido</h4>
            <p>Revisa el estado actual de tu pedido.</p>
          </div>
          <div>
            <h4>📄 Descarga tu factura</h4>
            <p>Consulta y descarga tu factura fácilmente.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
