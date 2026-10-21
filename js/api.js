// js/api.js
// Cliente HTTP centralizado para comunicación con la API del VPS.
// Maneja autenticación vía cabecera Authorization: Bearer, timeouts y manejo de errores.

import { API_BASE_URL } from './config.js';

const TOKEN_KEY = 'eqd:token';
const DEFAULT_TIMEOUT_MS = 10000;

export function getToken() {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  if (typeof window === 'undefined') return;
  if (token) {
    window.localStorage.setItem(TOKEN_KEY, token);
  } else {
    window.localStorage.removeItem(TOKEN_KEY);
  }
}

export function removeToken() {
  setToken(null);
}

export function isApiConfigured() {
  return Boolean(API_BASE_URL);
}

/**
 * Petición genérica con timeout y autenticación Bearer.
 * @param {string} endpoint
 * @param {RequestInit & { timeoutMs?: number }} [options]
 */
export async function request(endpoint, options = {}) {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const headers = new Headers(options.headers || {});
  headers.set('Accept', 'application/json');

  if (options.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const token = getToken();
  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timer);

    let data = null;
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      if (response.status === 401) {
        // Sesión expirada o token revocado
        removeToken();
        if (typeof window !== 'undefined' && !window.location.hash.startsWith('#/registro')) {
          window.location.hash = '#/login';
        }
      }

      const errMessage =
        data?.error?.message ||
        (typeof data === 'string' && data ? data : `Error HTTP ${response.status}`);
      const error = new Error(errMessage);
      error.status = response.status;
      error.code = data?.error?.code || 'HTTP_ERROR';
      error.data = data;
      throw error;
    }

    return data;
  } catch (err) {
    clearTimeout(timer);
    if (err.name === 'AbortError') {
      const timeoutErr = new Error('Tiempo de espera agotado al conectar con el servidor.');
      timeoutErr.code = 'TIMEOUT';
      throw timeoutErr;
    }
    throw err;
  }
}

export const api = {
  get: (endpoint, options) => request(endpoint, { ...options, method: 'GET' }),
  post: (endpoint, body, options) =>
    request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    }),
  patch: (endpoint, body, options) =>
    request(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
    }),
  del: (endpoint, options) => request(endpoint, { ...options, method: 'DELETE' }),
};
