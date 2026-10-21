// server/src/middleware/auth.js
import { hashToken } from '../security.js';
import { query } from '../db.js';

const SLIDING_INACTIVITY_DAYS = 7;

/**
 * Middleware para validar el token Bearer en cabecera Authorization.
 */
export async function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: { code: 'UNAUTHORIZED', message: 'Token de autenticación requerido.' }
    });
  }

  const token = authHeader.slice(7).trim();
  if (!token || token.length < 20) {
    return res.status(401).json({
      error: { code: 'UNAUTHORIZED', message: 'Formato de token inválido.' }
    });
  }

  try {
    const tokenHash = hashToken(token);
    const sql = `
      SELECT
        s.user_id,
        s.created_at AS session_created_at,
        s.expires_at,
        u.email,
        u.full_name,
        u.is_admin,
        u.locked_until
      FROM eqd.sessions s
      JOIN eqd.users u ON u.id = s.user_id
      WHERE s.token_hash = $1
      LIMIT 1
    `;
    const { rows } = await query(sql, [tokenHash]);

    if (!rows.length) {
      return res.status(401).json({
        error: { code: 'INVALID_SESSION', message: 'Sesión no encontrada o revocada.' }
      });
    }

    const row = rows[0];

    // Verificar expiración de sesión
    const now = new Date();
    if (new Date(row.expires_at) <= now) {
      await query(`DELETE FROM eqd.sessions WHERE token_hash = $1`, [tokenHash]);
      return res.status(401).json({
        error: { code: 'SESSION_EXPIRED', message: 'La sesión ha expirado.' }
      });
    }

    // Verificar si el usuario está bloqueado
    if (row.locked_until && new Date(row.locked_until) > now) {
      return res.status(403).json({
        error: { code: 'USER_LOCKED', message: 'Cuenta temporalmente suspendida por seguridad.' }
      });
    }

    // Actualización de ventana deslizante (sliding expiration de 7 días, tope 30 días)
    const maxAbsoluteExpiry = new Date(new Date(row.session_created_at).getTime() + 30 * 24 * 60 * 60 * 1000);
    const newSlidingExpiry = new Date(now.getTime() + SLIDING_INACTIVITY_DAYS * 24 * 60 * 60 * 1000);
    const effectiveExpiry = newSlidingExpiry < maxAbsoluteExpiry ? newSlidingExpiry : maxAbsoluteExpiry;

    query(
      `UPDATE eqd.sessions SET last_seen_at = now(), expires_at = $1 WHERE token_hash = $2`,
      [effectiveExpiry, tokenHash]
    ).catch(() => {});

    req.user = {
      id: row.user_id,
      email: row.email,
      fullName: row.full_name || '',
      isAdmin: Boolean(row.is_admin),
    };
    req.tokenHash = tokenHash;

    next();
  } catch (err) {
    next(err);
  }
}

/**
 * Middleware para restringir acceso exclusivo a profesores/administradores.
 */
export function requireAdmin(req, res, next) {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({
      error: { code: 'FORBIDDEN', message: 'Permisos insuficientes. Requiere rol de administrador.' }
    });
  }
  next();
}
