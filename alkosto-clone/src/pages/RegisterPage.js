// src/pages/RegisterPage.js
import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RegisterPage.scss';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const query = useQuery();

  // Email que llega desde /register?email=...
  const [email, setEmail] = useState(query.get('email') || '');
  const [editEmail, setEditEmail] = useState(!email);

  // Paso 1
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [phone,     setPhone]     = useState('');
  const [terms,     setTerms]     = useState(false);

  // Paso 2
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [step, setStep]       = useState(1); // 1: datos, 2: contraseña
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  const goBack = () => navigate(-1);

  const nextFromStep1 = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !firstName || !lastName || !phone || !terms) {
      setError('Completa todos los campos y acepta los términos.');
      return;
    }
    if (!/^\d{7,}$/.test(phone)) {
      setError('Ingresa un teléfono válido (solo números, mínimo 7 dígitos).');
      return;
    }
    setStep(2);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!password || !passwordConfirmation) {
      setError('Ingresa y confirma tu contraseña.');
      return;
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
    if (password !== passwordConfirmation) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);
    try {
      const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
          password_confirmation: passwordConfirmation,
          // Si luego agregas la columna "phone" en users, la envías también aquí
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = data?.errors?.email?.[0] || data?.errors?.password?.[0] || data?.message || 'No se pudo registrar.';
        throw new Error(msg);
      }

      if (data?.token) localStorage.setItem('auth_token', data.token);
      if (data?.user)  localStorage.setItem('auth_user', JSON.stringify(data.user));

      navigate('/'); // o a /mi-cuenta
      alert('Registro exitoso');
    } catch (err) {
      setError(err.message || 'Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ak-reg">
      <div className="ak-reg__topbar">
        <button className="ak-reg__link-back" onClick={goBack}>← Volver</button>
        <div className="ak-reg__safe">Compra seguro y en menos pasos.</div>
      </div>

      <div className="ak-reg__layout">
        <h1 className="ak-reg__title">Crea tu cuenta<br/>completando los datos</h1>

        <div className="ak-reg__card">
          {/* Email ingresado + modificar */}
          <div className="ak-reg__email-row">
            <span>Correo electrónico ingresado:&nbsp;</span>
            {editEmail ? (
              <input
                className="ak-reg__input"
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            ) : (
              <>
                <strong>{email || '—'}</strong>
                <button
                  className="ak-reg__link-edit"
                  onClick={(e) => { e.preventDefault(); setEditEmail(true); }}
                >
                  Modificar
                </button>
              </>
            )}
          </div>

          {step === 1 && (
            <form onSubmit={nextFromStep1} noValidate>
              <div className="ak-reg__row">
                <input
                  className="ak-reg__input"
                  type="text"
                  placeholder="Nombres"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="ak-reg__row">
                <input
                  className="ak-reg__input"
                  type="text"
                  placeholder="Apellidos"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="ak-reg__row ak-reg__row--phone">
                <span className="ak-reg__flag">🇨🇴</span>
                <span className="ak-reg__ddi">+57</span>
                <input
                  className="ak-reg__input ak-reg__input--phone"
                  type="tel"
                  placeholder="Teléfono celular"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                  required
                />
              </div>

              <label className="ak-reg__terms">
                <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
                <span>
                  Autorizo el uso de mis datos en los siguientes&nbsp;
                  <a href="#" onClick={(e) => e.preventDefault()}>términos y condiciones</a>
                </span>
              </label>

              {error && <p className="ak-reg__error" role="alert">{error}</p>}

              <button className="ak-reg__btn-primary" type="submit" disabled={loading}>
                {loading ? 'Validando…' : 'Continuar'}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleRegister} noValidate>
              <div className="ak-reg__mail-fixed">
                Correo electrónico:&nbsp;<strong>{email || '—'}</strong>
                {!editEmail && (
                  <button
                    className="ak-reg__link-edit"
                    onClick={(e) => { e.preventDefault(); setEditEmail(true); }}
                  >
                    Modificar
                  </button>
                )}
              </div>

              <div className="ak-reg__row">
                <input
                  className="ak-reg__input"
                  type="password"
                  placeholder="Crea una contraseña (mínimo 8)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  autoComplete="new-password"
                />
              </div>

              <div className="ak-reg__row">
                <input
                  className="ak-reg__input"
                  type="password"
                  placeholder="Confirmar contraseña"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                  autoComplete="new-password"
                />
              </div>

              {error && <p className="ak-reg__error" role="alert">{error}</p>}

              <div className="ak-reg__actions">
                <button type="button" className="ak-reg__btn-ghost" onClick={() => setStep(1)}>← Volver</button>
                <button className="ak-reg__btn-primary" type="submit" disabled={loading || !email}>
                  {loading ? 'Creando…' : 'Continuar'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
