import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginModal.scss';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

const LoginModal = ({ onClose, onSuccess = () => {} }) => {
  const navigate = useNavigate();

  // 'email' | 'password'
  const [step, setStep] = useState('email');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleOverlayClick = () => {
    if (!loading) onClose?.();
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(email)) {
      setError('El correo no es válido');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${API_URL}/auth/check-email?email=${encodeURIComponent(email)}`,
        { headers: { Accept: 'application/json' } }
      );
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || 'Error verificando el correo.');
      }

      // Si NO existe → redirige al registro con el email precargado
      if (!data?.exists) {
        onClose?.();
        navigate(`/register?email=${encodeURIComponent(email)}`);
        return;
      }

      // Si existe → pedir contraseña
      setStep('password');
      setError('');
    } catch (err) {
      setError(err.message || 'Ocurrió un error.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!password) {
      setError('Ingresa tu contraseña.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg =
          data?.errors?.email?.[0] ||
          data?.errors?.password?.[0] ||
          data?.message ||
          'No se pudo iniciar sesión.';
        throw new Error(msg);
      }

      // Guarda token y usuario
      if (data?.token) localStorage.setItem('auth_token', data.token);
      if (data?.user) localStorage.setItem('auth_user', JSON.stringify(data.user));

      onSuccess(data);
      onClose();
    } catch (err) {
      const msg =
        err?.message === 'Failed to fetch'
          ? 'No se pudo conectar con el servidor. Verifica que el backend esté en http://127.0.0.1:8000 y CORS permita http://localhost:3000.'
          : (err.message || 'Ocurrió un error inesperado.');
      setError(msg);
    } finally {
      setLoading(false);
    }
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

        {/* Paso 1: solo email */}
        {step === 'email' && (
          <form onSubmit={handleEmailSubmit} noValidate>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              disabled={loading}
              aria-invalid={!!error}
            />
            {error && <p className="login-error">El correo no es válido</p>}
            <button type="submit" disabled={loading || !email.trim()}>
              {loading ? 'Validando…' : 'Continuar'}
            </button>
        </form>
        )}

        {/* Paso 2: pedir contraseña (email existente) */}
        {step === 'password' && (
          <form onSubmit={handleLoginSubmit} noValidate>
            <input type="email" value={email} disabled className="readonly" />
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
            {error && <p className="login-error" role="alert">{error}</p>}
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => { if (!loading) { setStep('email'); setPassword(''); setError(''); } }}
              >
                Cambiar correo
              </button>
              <button type="submit" disabled={loading || !password}>
                {loading ? 'Ingresando…' : 'Continuar'}
              </button>
            </div>
          </form>
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
