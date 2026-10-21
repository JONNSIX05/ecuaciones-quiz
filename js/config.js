// js/config.js
// Configuración de endpoint del backend en VPS con HTTPS gratuito (DuckDNS + Caddy).

const isLocal =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

export const API_BASE_URL = isLocal
  ? 'http://localhost:3000'
  : 'https://eqd-quiz.duckdns.org';
