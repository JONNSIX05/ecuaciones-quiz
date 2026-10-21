// server/src/db.js
import pg from 'pg';
import { config } from './config.js';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: config.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

pool.on('error', (err) => {
  console.error('Error imprevisto en el pool de PostgreSQL:', err.message);
});

/**
 * Ejecuta una consulta SQL parametrizada.
 * @param {string} text
 * @param {any[]} [params]
 * @returns {Promise<pg.QueryResult>}
 */
export async function query(text, params = []) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    if (config.LOG_LEVEL === 'debug' || duration > 500) {
      console.log(`[DB] ${duration}ms: ${text.slice(0, 80).replace(/\s+/g, ' ')}`);
    }
    return res;
  } catch (err) {
    console.error(`[DB ERROR] ${err.message} | Query: ${text.slice(0, 100)}`);
    throw err;
  }
}

/**
 * Ejecuta un bloque dentro de una transacción.
 * @param {(client: pg.PoolClient) => Promise<any>} callback
 */
export async function withTransaction(callback) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}
