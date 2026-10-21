// server/src/security.js
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { query } from './db.js';

const BCRYPT_ROUNDS = 12;

/**
 * Genera un token de sesión criptográfico (32 bytes aleatorios en base64url).
 */
export function generateToken() {
  return crypto.randomBytes(32).toString('base64url');
}

/**
 * Calcula el hash SHA-256 binario del token para persistencia en base de datos.
 * @param {string} token
 * @returns {Buffer}
 */
export function hashToken(token) {
  return crypto.createHash('sha256').update(String(token)).digest();
}

/**
 * Genera el hash bcrypt de una contraseña.
 * @param {string} password
 * @returns {Promise<string>}
 */
export async function hashPassword(password) {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

/**
 * Verifica la contraseña y detecta si requiere actualización de hash
 * (por ejemplo si viene del formato heredado $2a$10 de Supabase).
 * @param {string} password
 * @param {string} hash
 * @returns {Promise<{ valid: boolean, needsRehash: boolean }>}
 */
export async function verifyPassword(password, hash) {
  const valid = await bcrypt.compare(password, hash);
  if (!valid) return { valid: false, needsRehash: false };

  // Detecta si el hash proviene de $2a$ o tiene menos de 12 rondas
  const isOldVersion = hash.startsWith('$2a$');
  const rounds = parseInt(hash.split('$')[2] || '0', 10);
  const needsRehash = isOldVersion || rounds < BCRYPT_ROUNDS;

  return { valid: true, needsRehash };
}

/**
 * Escapa comodines en consultas con operador LIKE / ILIKE.
 * @param {string} str
 * @returns {string}
 */
export function escapeLike(str) {
  return String(str ?? '').replace(/([%_\\])/g, '\\$1');
}

/**
 * Registra un evento en la tabla de auditoría inmutable.
 * @param {{ userId?: string|null, action: string, detail?: object, ip?: string|null }} params
 */
export async function logAudit({ userId = null, action, detail = null, ip = null }) {
  try {
    await query(
      `INSERT INTO eqd.audit_log (user_id, action, detail, ip) VALUES ($1, $2, $3, $4)`,
      [userId, action, detail ? JSON.stringify(detail) : null, ip]
    );
  } catch (err) {
    console.error('[AUDIT ERROR] No se pudo registrar auditoría:', err.message);
  }
}
