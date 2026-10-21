// server/src/config.js
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
  DATABASE_URL: z.string().min(10).default('postgresql://eqd_app:dev@127.0.0.1:5432/eqd'),
  CORS_ORIGIN: z.string().default('https://jonnsix05.github.io'),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
});

const parsed = schema.safeParse(process.env);
if (!parsed.success) {
  console.error('Configuración inválida en variables de entorno:', parsed.error.format());
  process.exit(1);
}

export const config = {
  ...parsed.data,
  isProd: parsed.data.NODE_ENV === 'production',
  isDev: parsed.data.NODE_ENV === 'development',
  isTest: parsed.data.NODE_ENV === 'test',
  allowedOrigins: parsed.data.CORS_ORIGIN.split(',').map((o) => o.trim()).filter(Boolean),
};
