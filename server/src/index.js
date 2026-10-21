// server/src/index.js
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config.js';
import { pool, query } from './db.js';
import { apiLimiter } from './middleware/rate-limiter.js';
import { authRouter } from './routes/auth.js';
import { termsRouter } from './routes/terms.js';
import { questionsRouter } from './routes/questions.js';
import { attemptsRouter } from './routes/attempts.js';
import { adminRouter } from './routes/admin.js';

const app = express();

// Configurar trust proxy para obtener IP correcta detrás de Caddy / Nginx
app.set('trust proxy', 1);

// Seguridad de encabezados HTTP con Helmet
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));

// Deshabilitar huella de Express
app.disable('x-powered-by');

// Configuración restrictiva de CORS
const corsOptions = {
  origin: (origin, callback) => {
    // Permitir solicitudes sin origin (como health checks locales o curl desde VPS)
    if (!origin) return callback(null, true);

    // En desarrollo, permitir orígenes de loopback
    if (config.isDev && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }

    if (config.allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('Acceso no permitido por política CORS.'));
  },
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false, // Uso exclusivo de token Bearer en cabecera
  maxAge: 86400,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));
app.use(apiLimiter);

// ---------------------------------------------------------------------
// Rutas del servicio
// ---------------------------------------------------------------------

// Healthcheck liviano para monitoreo y Caddy
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/auth', authRouter);
app.use('/terms', termsRouter);
app.use('/questions', questionsRouter);
app.use('/attempts', attemptsRouter);
app.use('/admin', adminRouter);

// Manejador 404
app.use((req, res) => {
  res.status(404).json({
    error: { code: 'NOT_FOUND', message: 'Ruta no encontrada.' }
  });
});

// Manejador global de errores
app.use((err, req, res, next) => {
  if (err.message && err.message.includes('CORS')) {
    return res.status(403).json({ error: { code: 'CORS_REJECTED', message: err.message } });
  }

  console.error('[API ERROR]', err);

  const status = err.status || 500;
  const message = config.isProd ? 'Error interno del servidor.' : err.message;

  res.status(status).json({
    error: { code: 'INTERNAL_SERVER_ERROR', message }
  });
});

// ---------------------------------------------------------------------
// Tarea periódica de limpieza de sesiones vencidas (cada 1 hora)
// ---------------------------------------------------------------------
const CLEANUP_INTERVAL_MS = 60 * 60 * 1000;
setInterval(async () => {
  try {
    const res = await query(`DELETE FROM eqd.sessions WHERE expires_at < now()`);
    if (res.rowCount > 0 && config.LOG_LEVEL === 'debug') {
      console.log(`[SESSION CLEANUP] Eliminadas ${res.rowCount} sesiones expiradas.`);
    }
  } catch (err) {
    console.error('[SESSION CLEANUP ERROR]', err.message);
  }
}, CLEANUP_INTERVAL_MS);

// ---------------------------------------------------------------------
// Arranque y apagado elegante (Graceful Shutdown)
// ---------------------------------------------------------------------
const server = app.listen(config.PORT, () => {
  console.log(`[EQD API] Servidor activo en puerto ${config.PORT} (modo ${config.NODE_ENV})`);
});

async function shutdown(signal) {
  console.log(`[EQD API] Recibida señal ${signal}. Cerrando conexiones...`);
  server.close(async () => {
    try {
      await pool.end();
      console.log('[EQD API] Pool de PostgreSQL cerrado limpiamente.');
      process.exit(0);
    } catch (err) {
      console.error('[EQD API] Error al cerrar pool de PostgreSQL:', err);
      process.exit(1);
    }
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

export default app;
