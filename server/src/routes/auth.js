// server/src/routes/auth.js
import { Router } from 'express';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { query, withTransaction } from '../db.js';
import {
  generateToken,
  hashToken,
  hashPassword,
  verifyPassword,
  logAudit,
} from '../security.js';
import { authenticateToken } from '../middleware/auth.js';
import { loginLimiter, registerLimiter } from '../middleware/rate-limiter.js';

export const authRouter = Router();

// Hash ficticio para mitigar ataques de temporización cuando el usuario no existe
const DUMMY_HASH = '$2b$12$e8F0lq9zE4r1MvS3oZ8KveHw1Yd6C7u8I9o0P1a2S3d4F5g6H7j8K';

const registerSchema = z.object({
  email: z.string().trim().email().max(254),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres.').max(72),
  fullName: z.string().trim().min(2, 'Nombre completo obligatorio.').max(120),
  grado: z.string().trim().max(20).optional().nullable(),
  grupo: z.string().trim().max(20).optional().nullable(),
  termsVersion: z.string().max(40).optional(),
});

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1).max(72),
});

/**
 * POST /auth/register
 */
authRouter.post('/register', registerLimiter, async (req, res, next) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: issue?.message || 'Datos de registro inválidos.' }
    });
  }

  const { email, password, fullName, grado, grupo, termsVersion } = parsed.data;
  const cleanGrado = grado && grado.trim() ? grado.trim() : null;
  const cleanGrupo = grupo && grupo.trim() ? grupo.trim() : null;
  const ip = req.ip || req.socket.remoteAddress;

  try {
    // Verificar si el correo ya está registrado
    const existing = await query(`SELECT 1 FROM eqd.users WHERE email = $1`, [email]);
    if (existing.rows.length > 0) {
      return res.status(409).json({
        error: { code: 'EMAIL_ALREADY_EXISTS', message: 'El correo electrónico ya está registrado.' }
      });
    }

    const passwordHash = await hashPassword(password);
    const rawToken = generateToken();
    const tokenHash = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 días iniciales

    const user = await withTransaction(async (client) => {
      // Inserción forzada de is_admin = false (inmune a manipulación del cliente)
      const userRes = await client.query(
        `INSERT INTO eqd.users (email, password_hash, full_name, grado, grupo, is_admin, last_login_at)
         VALUES ($1, $2, $3, $4, $5, false, now())
         RETURNING id, email, full_name, grado, grupo, is_admin`,
        [email, passwordHash, fullName, cleanGrado, cleanGrupo]
      );
      const createdUser = userRes.rows[0];

      // Registrar sesión inicial
      await client.query(
        `INSERT INTO eqd.sessions (token_hash, user_id, expires_at, ip, user_agent)
         VALUES ($1, $2, $3, $4, $5)`,
        [tokenHash, createdUser.id, expiresAt, ip, req.headers['user-agent']?.slice(0, 400)]
      );

      // Si se envió versión de términos aceptada
      if (termsVersion) {
        await client.query(
          `INSERT INTO eqd.terms_acceptance (user_id, terms_version) VALUES ($1, $2)`,
          [createdUser.id, termsVersion]
        );
      }

      return createdUser;
    });

    await logAudit({
      userId: user.id,
      action: 'user_registered',
      detail: { email: user.email },
      ip,
    });

    return res.status(201).json({
      token: rawToken,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        full_name: user.full_name,
        grado: user.grado || null,
        grupo: user.grupo || null,
        isAdmin: false,
      },
    });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /auth/login
 */
authRouter.post('/login', loginLimiter, async (req, res, next) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: 'Correo y contraseña requeridos.' }
    });
  }

  const { email, password } = parsed.data;
  const ip = req.ip || req.socket.remoteAddress;

  try {
    const userRes = await query(
      `SELECT id, email, password_hash, full_name, grado, grupo, is_admin, failed_logins, locked_until
       FROM eqd.users
       WHERE email = $1`,
      [email]
    );

    const user = userRes.rows[0];
    const now = new Date();

    // Si no existe, ejecutamos un compare contra hash ficticio para mitigar timing attack
    if (!user) {
      await bcrypt.compare(password, DUMMY_HASH);
      return res.status(401).json({
        error: { code: 'INVALID_CREDENTIALS', message: 'Correo o contraseña incorrectos.' }
      });
    }

    // Verificar si la cuenta está bloqueada temporalmente
    if (user.locked_until && new Date(user.locked_until) > now) {
      const waitMin = Math.ceil((new Date(user.locked_until).getTime() - now.getTime()) / 60000);
      return res.status(423).json({
        error: {
          code: 'ACCOUNT_LOCKED',
          message: `Cuenta temporalmente bloqueada por reiterados fallos. Espera ${waitMin} minuto(s).`
        }
      });
    }

    const { valid, needsRehash } = await verifyPassword(password, user.password_hash);

    if (!valid) {
      const newFails = (user.failed_logins || 0) + 1;
      const willLock = newFails >= 10;
      const lockUntil = willLock ? new Date(now.getTime() + 15 * 60 * 1000) : null;

      await query(
        `UPDATE eqd.users SET failed_logins = $1, locked_until = $2 WHERE id = $3`,
        [newFails, lockUntil, user.id]
      );

      await logAudit({
        userId: user.id,
        action: 'login_failed',
        detail: { fails: newFails, locked: willLock },
        ip,
      });

      return res.status(401).json({
        error: { code: 'INVALID_CREDENTIALS', message: 'Correo o contraseña incorrectos.' }
      });
    }

    // Credenciales válidas: actualizar re-hash si viene de Supabase $2a$, restablecer fallos
    const rawToken = generateToken();
    const tokenHash = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    let newHashToSave = user.password_hash;
    if (needsRehash) {
      newHashToSave = await hashPassword(password);
    }

    await query(
      `UPDATE eqd.users
       SET failed_logins = 0, locked_until = NULL, last_login_at = now(), password_hash = $1
       WHERE id = $2`,
      [newHashToSave, user.id]
    );

    // Guardar nueva sesión
    await query(
      `INSERT INTO eqd.sessions (token_hash, user_id, expires_at, ip, user_agent)
       VALUES ($1, $2, $3, $4, $5)`,
      [tokenHash, user.id, expiresAt, ip, req.headers['user-agent']?.slice(0, 400)]
    );

    await logAudit({
      userId: user.id,
      action: 'login_success',
      ip,
    });

    return res.json({
      token: rawToken,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name || '',
        full_name: user.full_name || '',
        grado: user.grado || null,
        grupo: user.grupo || null,
        isAdmin: Boolean(user.is_admin),
      },
    });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /auth/logout
 */
authRouter.post('/logout', authenticateToken, async (req, res, next) => {
  try {
    await query(`DELETE FROM eqd.sessions WHERE token_hash = $1`, [req.tokenHash]);
    await logAudit({
      userId: req.user.id,
      action: 'logout',
      ip: req.ip,
    });
    return res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /auth/me
 */
authRouter.get('/me', authenticateToken, async (req, res) => {
  return res.json({
    user: req.user,
  });
});

const forgotPasswordSchema = z.object({
  email: z.string().trim().email().max(254),
});

/**
 * POST /auth/forgot-password
 */
authRouter.post('/forgot-password', async (req, res, next) => {
  const parsed = forgotPasswordSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: 'Correo electrónico inválido.' }
    });
  }

  const { email } = parsed.data;
  const ip = req.ip || req.socket.remoteAddress;

  try {
    const userRes = await query(`SELECT id, email, full_name FROM eqd.users WHERE email = $1`, [email]);
    const user = userRes.rows[0];

    let resetToken = null;
    if (user) {
      resetToken = generateToken();
      const tokenHash = hashToken(resetToken);
      const expiresAt = new Date(Date.now() + 30 * 60 * 1000); // 30 minutos

      try {
        await query(
          `INSERT INTO eqd.password_resets (user_id, token_hash, expires_at, ip)
           VALUES ($1, $2, $3, $4)`,
          [user.id, tokenHash, expiresAt, ip]
        );
      } catch (dbErr) {
        // En caso de que la tabla aún no esté creada en la BD actual
        console.warn('[PASSWORD RESET] Aviso al insertar en password_resets:', dbErr.message);
      }

      await logAudit({
        userId: user.id,
        action: 'password_reset_requested',
        detail: { email: user.email },
        ip,
      });
    } else {
      await bcrypt.compare('dummy', DUMMY_HASH);
    }

    return res.json({
      ok: true,
      message: 'Si el correo electrónico está registrado, recibirás un enlace para restablecer tu contraseña en breve.',
      token: resetToken,
    });
  } catch (err) {
    next(err);
  }
});

const resetPasswordSchema = z.object({
  token: z.string().min(10),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres.').max(72),
});

/**
 * POST /auth/reset-password
 */
authRouter.post('/reset-password', async (req, res, next) => {
  const parsed = resetPasswordSchema.safeParse(req.body);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: issue?.message || 'Datos de restablecimiento inválidos.' }
    });
  }

  const { token, password } = parsed.data;
  const tokenHash = hashToken(token);

  try {
    const resetRes = await query(
      `SELECT id, user_id FROM eqd.password_resets
       WHERE token_hash = $1 AND used_at IS NULL AND expires_at > now()`,
      [tokenHash]
    );

    const resetRow = resetRes.rows[0];
    if (!resetRow) {
      return res.status(400).json({
        error: { code: 'INVALID_TOKEN', message: 'El enlace o código de recuperación es inválido o ha expirado.' }
      });
    }

    const newHash = await hashPassword(password);

    await withTransaction(async (client) => {
      await client.query(
        `UPDATE eqd.users SET password_hash = $1, failed_logins = 0, locked_until = NULL WHERE id = $2`,
        [newHash, resetRow.user_id]
      );
      await client.query(
        `UPDATE eqd.password_resets SET used_at = now() WHERE id = $1`,
        [resetRow.id]
      );
      await client.query(
        `DELETE FROM eqd.sessions WHERE user_id = $1`,
        [resetRow.user_id]
      );
    });

    await logAudit({
      userId: resetRow.user_id,
      action: 'password_reset_success',
      ip: req.ip,
    });

    return res.json({
      ok: true,
      message: 'Tu contraseña ha sido restablecida exitosamente. Ya puedes iniciar sesión con tu nueva contraseña.',
    });
  } catch (err) {
    next(err);
  }
});

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1).max(72),
  newPassword: z.string().min(8, 'La nueva contraseña debe tener al menos 8 caracteres.').max(72),
});

/**
 * POST /auth/change-password (Usuario autenticado)
 */
authRouter.post('/change-password', authenticateToken, async (req, res, next) => {
  const parsed = changePasswordSchema.safeParse(req.body);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: issue?.message || 'Datos de contraseña inválidos.' }
    });
  }

  const { currentPassword, newPassword } = parsed.data;

  try {
    const userRes = await query(`SELECT id, password_hash, email FROM eqd.users WHERE id = $1`, [req.user.id]);
    const user = userRes.rows[0];
    if (!user) {
      return res.status(404).json({ error: { code: 'USER_NOT_FOUND', message: 'Usuario no encontrado.' } });
    }

    const { valid } = await verifyPassword(currentPassword, user.password_hash);
    if (!valid) {
      return res.status(401).json({
        error: { code: 'INVALID_CREDENTIALS', message: 'La contraseña actual no es correcta.' }
      });
    }

    const newHash = await hashPassword(newPassword);
    await query(`UPDATE eqd.users SET password_hash = $1 WHERE id = $2`, [newHash, user.id]);

    await logAudit({
      userId: user.id,
      action: 'password_changed',
      ip: req.ip,
    });

    return res.json({ ok: true, message: 'Contraseña actualizada correctamente.' });
  } catch (err) {
    next(err);
  }
});

