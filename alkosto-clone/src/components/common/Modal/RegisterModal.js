import React, { useState } from 'react';
import './LoginModal.scss'; // reutiliza estilos

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

const RegisterModal = ({ onClose, onSuccess = () => {} }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg =
          data?.errors?.email?.[0] ||
          data?.errors?.password?.[0] ||
          data?.message ||
          'No se pudo registrar.';
        throw new Error(msg);
      }

      // (Opcional) Auto-login tras registro:
      if (data?.token) localStorage.setItem('auth_token', data.token);
      if (data?.user) localStorage.setItem('auth_user', JSON.stringify(data.user));

      onSuccess(data);
      onClose();
      alert('Registro exitoso');
    } catch (err) {
      setError(err.message || 'Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = () => !loading && onClose();

  return (
    <div className="login-modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="register-title">
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <div className="login-header">
          <h2 id="register-title">Crear cuenta</h2>
          <p>Crea tu cuenta para acceder a tus pedidos y facturas.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <input type="text" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} required disabled={loading} />
          <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" disabled={loading} />
          <input type="password" placeholder="Contraseña (mínimo 8)" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" disabled={loading} />
          <input type="password" placeholder="Confirmar contraseña" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required autoComplete="new-password" disabled={loading} />
          <button type="submit" disabled={loading || !name || !email || !password || !passwordConfirmation}>
            {loading ? 'Creando…' : 'Crear cuenta'}
          </button>
        </form>

        {error && <p className="login-error" role="alert">{error}</p>}
      </div>
    </div>
  );
};

export default RegisterModal;
