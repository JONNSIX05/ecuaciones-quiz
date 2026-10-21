// server/src/routes/questions.js
import { Router } from 'express';
import { z } from 'zod';
import { query } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

export const questionsRouter = Router();

const getQuestionsSchema = z.object({
  sectionId: z.string().trim().max(64),
  subtemaId: z.string().trim().max(64),
  lawId: z.string().trim().max(64),
});

/**
 * GET /questions?sectionId=...&subtemaId=...&lawId=...
 * Obtiene las preguntas asociadas a una ley específica para el motor de quiz.
 * Requiere usuario autenticado para evitar scraping masivo del catálogo.
 */
questionsRouter.get('/', authenticateToken, async (req, res, next) => {
  const parsed = getQuestionsSchema.safeParse({
    sectionId: req.query.sectionId || req.query.section_id,
    subtemaId: req.query.subtemaId || req.query.subtema_id,
    lawId: req.query.lawId || req.query.law_id,
  });

  if (!parsed.success) {
    return res.status(400).json({
      error: { code: 'INVALID_QUERY', message: 'Se requieren sectionId, subtemaId y lawId.' }
    });
  }

  const { sectionId, subtemaId, lawId } = parsed.data;

  try {
    const { rows } = await query(
      `SELECT id, difficulty, prompt, options, explanation
       FROM eqd.questions
       WHERE section_id = $1 AND subtema_id = $2 AND law_id = $3
       ORDER BY id ASC`,
      [sectionId, subtemaId, lawId]
    );

    return res.json({
      questions: rows.map((r) => ({
        id: r.id,
        difficulty: r.difficulty,
        prompt: r.prompt,
        options: r.options,
        explanation: r.explanation || '',
      })),
    });
  } catch (err) {
    next(err);
  }
});
