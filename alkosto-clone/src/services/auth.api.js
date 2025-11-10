// src/services/auth.api.js
const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

export async function checkEmail(email) {
  const res = await fetch(`${API_URL}/auth/check-email?email=${encodeURIComponent(email)}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || 'Error verificando correo.');
  return data; // { exists: boolean }
}

export async function register({ email, password, password_confirmation }) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password, password_confirmation }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || 'Error en el registro.');

  // Guarda token/usuario si tu backend los retorna
  if (data?.token) localStorage.setItem('auth_token', data.token);
  if (data?.user) localStorage.setItem('auth_user', JSON.stringify(data.user));

  return data;
}

export async function login({ email, password }) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || 'Credenciales inválidas.');

  if (data?.token) localStorage.setItem('auth_token', data.token);
  if (data?.user) localStorage.setItem('auth_user', JSON.stringify(data.user));

  return data;
}

export function logoutLocal() {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('auth_user');
}
