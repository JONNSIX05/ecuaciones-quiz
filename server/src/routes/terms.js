// server/src/routes/terms.js
import { Router } from 'express';
import { z } from 'zod';
import { query } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

export const termsRouter = Router();

const acceptSchema = z.object({
  termsVersion: z.string().trim().min(1).max(40),
});

/**
 * GET /terms/current
 * Devuelve la versión vigente de Términos y Condiciones.
 */
termsRouter.get('/current', async (req, res, next) => {
  try {
    const { rows } = await query(
      `SELECT value FROM eqd.settings WHERE key = 'current_terms_version' LIMIT 1`
    );
    const version = rows[0]?.value || 'v1-2026-05';
    return res.json({ version });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /terms/me
 * Devuelve la última aceptación de términos del usuario actual.
 */
termsRouter.get('/me', authenticateToken, async (req, res, next) => {
  try {
    const { rows } = await query(
      `SELECT terms_version, accepted_at
       FROM eqd.terms_acceptance
       WHERE user_id = $1
       ORDER BY accepted_at DESC
       LIMIT 1`,
      [req.user.id]
    );

    const latest = rows[0] || null;
    return res.json({
      latest: latest
        ? { termsVersion: latest.terms_version, acceptedAt: latest.accepted_at }
        : null,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /terms/accept
 * Registra la aceptación explícita de términos.
 */
termsRouter.post('/accept', authenticateToken, async (req, res, next) => {
  const parsed = acceptSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: 'termsVersion es requerido.' }
    });
  }

  try {
    await query(
      `INSERT INTO eqd.terms_acceptance (user_id, terms_version) VALUES ($1, $2)`,
      [req.user.id, parsed.data.termsVersion]
    );
    return res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});
