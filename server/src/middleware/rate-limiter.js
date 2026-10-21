// server/src/middleware/rate-limiter.js
import rateLimit from 'express-rate-limit';

function makeRateLimiter({ windowMs, max, message, code = 'RATE_LIMIT_EXCEEDED' }) {
  return rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        error: { code, message }
      });
    },
  });
}

// 1. Limite estricto para intento de inicio de sesión
export const loginLimiter = makeRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10,
  message: 'Demasiados intentos de acceso fallidos. Por favor espera 15 minutos.',
  code: 'LOGIN_RATE_LIMIT',
});

// 2. Limite para registro de nuevas cuentas
export const registerLimiter = makeRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5,
  message: 'Límite de registros alcanzado desde esta red. Intenta más tarde.',
  code: 'REGISTER_RATE_LIMIT',
});

// 3. Limite general para consumo de la API
export const apiLimiter = makeRateLimiter({
  windowMs: 60 * 1000, // 1 minuto
  max: 300,
  message: 'Demasiadas solicitudes enviadas al servidor.',
});
