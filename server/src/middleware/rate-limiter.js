// server/src/middleware/rate-limiter.js
import rateLimit from 'express-rate-limit';

function makeRateLimiter({ windowMs, max, message, code = 'RATE_LIMIT_EXCEEDED', skipSuccessfulRequests = false, keyGenerator }) {
  const opts = {
    windowMs,
    max,
    skipSuccessfulRequests,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        error: { code, message }
      });
    },
  };
  if (typeof keyGenerator === 'function') {
    opts.keyGenerator = keyGenerator;
  }
  return rateLimit(opts);
}

// 1. Límite de inicio de sesión adaptado para redes escolares (NAT):
//    - No contabiliza inicios de sesión exitosos (skipSuccessfulRequests: true)
//    - Agrupa por IP + correo para que un alumno que olvide su clave no bloquee al resto del salón
export const loginLimiter = makeRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 25,
  skipSuccessfulRequests: true,
  keyGenerator: (req) => {
    const email = String(req.body?.email || '').trim().toLowerCase();
    return `${req.ip || 'unknown'}:${email || 'anon'}`;
  },
  message: 'Demasiados intentos de acceso fallidos para esta cuenta. Por favor espera 15 minutos.',
  code: 'LOGIN_RATE_LIMIT',
});

// 2. Registro de nuevas cuentas: sin bloqueo por IP de red para permitir que
//    grupos completos de estudiantes se registren simultáneamente en la escuela.
export const registerLimiter = (req, res, next) => next();

// 3. Límite general para consumo de la API (amplio para soportar múltiples aulas en la misma IP institucional)
export const apiLimiter = makeRateLimiter({
  windowMs: 60 * 1000, // 1 minuto
  max: 3000,
  message: 'Demasiadas solicitudes enviadas al servidor.',
});

// 4. Límite para recuperación y restablecimiento de contraseña (por IP + correo)
export const passwordResetLimiter = makeRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 15,
  keyGenerator: (req) => {
    const email = String(req.body?.email || '').trim().toLowerCase();
    return `${req.ip || 'unknown'}:${email || 'reset'}`;
  },
  message: 'Demasiadas solicitudes de recuperación de contraseña. Intenta nuevamente en 15 minutos.',
  code: 'PASSWORD_RESET_RATE_LIMIT',
});
