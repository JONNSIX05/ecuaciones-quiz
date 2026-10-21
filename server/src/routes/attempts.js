// server/src/routes/attempts.js
import { Router } from 'express';
import { z } from 'zod';
import { query } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

export const attemptsRouter = Router();

const quizAttemptSchema = z.object({
  sectionId: z.string().trim().max(64),
  subtemaId: z.string().trim().max(64),
  lawId: z.string().trim().max(64),
  lawName: z.string().trim().max(200).optional().default(''),
  difficulty: z.string().trim().max(20).optional().default('balanced'),
  score: z.number().int().min(0),
  total: z.number().int().positive().max(500),
}).refine((data) => data.score <= data.total, {
  message: 'El puntaje no puede ser mayor que el total.',
  path: ['score'],
});

const practiceAttemptSchema = z.object({
  input: z.string().trim().min(1).max(2000),
  topic: z.string().trim().max(200).optional().default(''),
  correct: z.boolean(),
});

/**
 * POST /attempts/quiz
 * Guarda un intento de quiz. El user_id SIEMPRE se extrae de la sesión autenticada.
 */
attemptsRouter.post('/quiz', authenticateToken, async (req, res, next) => {
  const parsed = quizAttemptSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: parsed.error.issues[0]?.message || 'Datos de intento inválidos.' }
    });
  }

  const { sectionId, subtemaId, lawId, lawName, difficulty, score, total } = parsed.data;

  try {
    const { rows } = await query(
      `INSERT INTO eqd.quiz_attempts (user_id, section_id, subtema_id, law_id, law_name, difficulty, score, total)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, created_at`,
      [req.user.id, sectionId, subtemaId, lawId, lawName, difficulty, score, total]
    );

    return res.status(201).json({
      ok: true,
      attemptId: rows[0].id,
      createdAt: rows[0].created_at,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /attempts/quiz/latest?lawId=...
 * Obtiene el último intento del usuario actual para la ley solicitada.
 */
attemptsRouter.get('/quiz/latest', authenticateToken, async (req, res, next) => {
  const lawId = String(req.query.lawId || req.query.law_id || '').trim();
  if (!lawId) {
    return res.status(400).json({
      error: { code: 'INVALID_QUERY', message: 'lawId es requerido.' }
    });
  }

  try {
    const { rows } = await query(
      `SELECT section_id, subtema_id, law_id, law_name, difficulty, score, total, created_at
       FROM eqd.quiz_attempts
       WHERE user_id = $1 AND law_id = $2
       ORDER BY created_at DESC
       LIMIT 1`,
      [req.user.id, lawId]
    );

    return res.json({
      attempt: rows[0]
        ? {
            sectionId: rows[0].section_id,
            subtemaId: rows[0].subtema_id,
            lawId: rows[0].law_id,
            lawName: rows[0].law_name,
            difficulty: rows[0].difficulty,
            score: rows[0].score,
            total: rows[0].total,
            createdAt: rows[0].created_at,
          }
        : null,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /attempts/practice
 * Guarda un intento de Práctica libre.
 */
attemptsRouter.post('/practice', authenticateToken, async (req, res, next) => {
  const parsed = practiceAttemptSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: parsed.error.issues[0]?.message || 'Datos de práctica inválidos.' }
    });
  }

  const { input, topic, correct } = parsed.data;

  try {
    await query(
      `INSERT INTO eqd.practice_attempts (user_id, input, topic, correct)
       VALUES ($1, $2, $3, $4)`,
      [req.user.id, input, topic, correct]
    );

    return res.status(201).json({ ok: true });
  } catch (err) {
    next(err);
  }
});
