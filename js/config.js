// js/config.js
// Configuración de endpoint del backend en VPS con HTTPS (Nginx + Certbot).
// Permite sobreescribir la URL en desarrollo mediante localStorage.setItem('eqd:api_url', 'http://localhost:3000').

export const API_BASE_URL =
  (typeof window !== 'undefined' && window.localStorage?.getItem('eqd:api_url')) ||
  'https://eqd-quiz.duckdns.org';
