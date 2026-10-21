// server/src/routes/admin.js
import { Router } from 'express';
import { z } from 'zod';
import { query, withTransaction } from '../db.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import { escapeLike, logAudit } from '../security.js';

export const adminRouter = Router();

// Aplica autenticación y validación de rol docente en todas las rutas admin
adminRouter.use(authenticateToken, requireAdmin);

/**
 * GET /admin/dashboard
 * Retorna las métricas consolidadas para el panel docente UNACH.
 */
adminRouter.get('/dashboard', async (req, res, next) => {
  try {
    const [usersRes, quizRes, practiceRes, qStatsRes] = await Promise.all([
      query(`SELECT id AS user_id, email, full_name, is_admin, created_at, last_login_at FROM eqd.users ORDER BY created_at DESC`),
      query(`SELECT id, user_id, section_id, subtema_id, law_id, law_name, difficulty, score, total, created_at FROM eqd.quiz_attempts ORDER BY created_at DESC LIMIT 5000`),
      query(`SELECT id, user_id, input, topic, correct, created_at FROM eqd.practice_attempts ORDER BY created_at DESC LIMIT 5000`),
      query(`SELECT section_id, difficulty, count(*)::int AS total FROM eqd.questions GROUP BY section_id, difficulty`),
    ]);

    return res.json({
      profiles: usersRes.rows,
      quizAttempts: quizRes.rows,
      practiceAttempts: practiceRes.rows,
      questionStats: qStatsRes.rows,
    });
  } catch (err) {
    next(err);
  }
});

const roleSchema = z.object({
  isAdmin: z.boolean(),
});

/**
 * PATCH /admin/users/:id/role
 * Permite a un administrador asignar o revocar el rol de Profesor (is_admin) a otro usuario.
 */
adminRouter.patch('/users/:id/role', async (req, res, next) => {
  const targetId = String(req.params.id || '').trim();
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(targetId)) {
    return res.status(400).json({
      error: { code: 'INVALID_USER_ID', message: 'Identificador de usuario inválido.' }
    });
  }

  const parsed = roleSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: 'El campo booleano isAdmin es requerido.' }
    });
  }

  const { isAdmin } = parsed.data;

  // Evitar que el administrador en sesión se quite el rol a sí mismo por accidente
  if (targetId.toLowerCase() === String(req.user.id).toLowerCase() && !isAdmin) {
    return res.status(400).json({
      error: { code: 'SELF_DEMOTE_FORBIDDEN', message: 'No puedes revocar tu propio rol de profesor en la sesión activa.' }
    });
  }

  try {
    const { rows } = await query(
      `UPDATE eqd.users
       SET is_admin = $1
       WHERE id = $2
       RETURNING id AS user_id, email, full_name, is_admin, created_at`,
      [isAdmin, targetId]
    );

    if (!rows.length) {
      return res.status(404).json({
        error: { code: 'USER_NOT_FOUND', message: 'Usuario no encontrado.' }
      });
    }

    await logAudit({
      userId: req.user.id,
      action: 'admin_change_user_role',
      detail: {
        targetUserId: targetId,
        targetEmail: rows[0].email,
        isAdmin,
      },
      ip: req.ip,
    });

    return res.json({
      ok: true,
      user: rows[0],
    });
  } catch (err) {
    next(err);
  }
});

const listQuestionsQuerySchema = z.object({
  from: z.coerce.number().int().min(0).default(0),
  to: z.coerce.number().int().min(0).default(49),
  section_id: z.string().trim().optional(),
  subtema_id: z.string().trim().optional(),
  law_id: z.string().trim().optional(),
  difficulty: z.string().trim().optional(),
  search: z.string().trim().optional(),
});

/**
 * GET /admin/questions
 * Listado paginado y filtrado de preguntas para el panel de gestión.
 */
adminRouter.get('/questions', async (req, res, next) => {
  const parsed = listQuestionsQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: { code: 'INVALID_QUERY', message: 'Parámetros inválidos.' } });
  }

  const { from, to, section_id, subtema_id, law_id, difficulty, search } = parsed.data;
  const limit = Math.min(Math.max(to - from + 1, 1), 100);
  const offset = from;

  const conditions = [];
  const params = [];

  if (section_id) {
    params.push(section_id);
    conditions.push(`section_id = $${params.length}`);
  }
  if (subtema_id) {
    params.push(subtema_id);
    conditions.push(`subtema_id = $${params.length}`);
  }
  if (law_id) {
    params.push(law_id);
    conditions.push(`law_id = $${params.length}`);
  }
  if (difficulty) {
    params.push(difficulty);
    conditions.push(`difficulty = $${params.length}`);
  }
  if (search) {
    params.push(`%${escapeLike(search)}%`);
    conditions.push(`prompt ILIKE $${params.length}`);
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  try {
    const countSql = `SELECT count(*)::int AS total FROM eqd.questions ${whereClause}`;
    const countRes = await query(countSql, params);
    const totalCount = countRes.rows[0]?.total || 0;

    const selectParams = [...params, limit, offset];
    const selectSql = `
      SELECT id, section_id, subtema_id, law_id, difficulty, prompt
      FROM eqd.questions
      ${whereClause}
      ORDER BY id ASC
      LIMIT $${params.length + 1} OFFSET $${params.length + 2}
    `;
    const rowsRes = await query(selectSql, selectParams);

    return res.json({
      rows: rowsRes.rows,
      count: totalCount,
      from: offset,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /admin/questions/:id
 */
adminRouter.get('/questions/:id', async (req, res, next) => {
  const id = String(req.params.id || '').trim();
  try {
    const { rows } = await query(
      `SELECT id, section_id, subtema_id, law_id, difficulty, prompt, options, explanation
       FROM eqd.questions
       WHERE id = $1`,
      [id]
    );

    if (!rows.length) {
      return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Pregunta no encontrada.' } });
    }

    return res.json({ question: rows[0] });
  } catch (err) {
    next(err);
  }
});

const questionItemSchema = z.object({
  id: z.string().trim().regex(/^[a-z0-9][a-z0-9-]{1,79}$/),
  section_id: z.string().trim().min(1).max(64),
  subtema_id: z.string().trim().min(1).max(64),
  law_id: z.string().trim().min(1).max(64),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  prompt: z.string().trim().min(1).max(4000),
  options: z.array(z.object({
    latex: z.string(),
    correct: z.boolean(),
  })).length(4),
  explanation: z.string().max(8000).optional().default(''),
});

const batchInsertSchema = z.array(questionItemSchema).min(1).max(500);

/**
 * POST /admin/questions (Inserción por lote)
 */
adminRouter.post('/questions', async (req, res, next) => {
  const parsed = batchInsertSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: { code: 'VALIDATION_ERROR', message: 'Formato de lote de preguntas inválido.', issues: parsed.error.issues }
    });
  }

  const rows = parsed.data;

  try {
    await withTransaction(async (client) => {
      for (const q of rows) {
        await client.query(
          `INSERT INTO eqd.questions (id, section_id, subtema_id, law_id, difficulty, prompt, options, explanation)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
           ON CONFLICT (id) DO UPDATE SET
             section_id = EXCLUDED.section_id,
             subtema_id = EXCLUDED.subtema_id,
             law_id = EXCLUDED.law_id,
             difficulty = EXCLUDED.difficulty,
             prompt = EXCLUDED.prompt,
             options = EXCLUDED.options,
             explanation = EXCLUDED.explanation,
             updated_at = now()`,
          [q.id, q.section_id, q.subtema_id, q.law_id, q.difficulty, q.prompt, JSON.stringify(q.options), q.explanation]
        );
      }
    });

    await logAudit({
      userId: req.user.id,
      action: 'admin_batch_insert_questions',
      detail: { count: rows.length },
      ip: req.ip,
    });

    return res.status(201).json({ ok: true, inserted: rows.length });
  } catch (err) {
    next(err);
  }
});

const patchQuestionSchema = z.object({
  prompt: z.string().trim().min(1).max(4000).optional(),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  options: z.array(z.object({
    latex: z.string(),
    correct: z.boolean(),
  })).length(4).optional(),
  explanation: z.string().max(8000).optional(),
});

/**
 * PATCH /admin/questions/:id
 */
adminRouter.patch('/questions/:id', async (req, res, next) => {
  const id = String(req.params.id || '').trim();
  const parsed = patchQuestionSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'Datos de actualización inválidos.' } });
  }

  const fields = parsed.data;
  const updates = [];
  const params = [id];

  if (fields.prompt !== undefined) {
    params.push(fields.prompt);
    updates.push(`prompt = $${params.length}`);
  }
  if (fields.difficulty !== undefined) {
    params.push(fields.difficulty);
    updates.push(`difficulty = $${params.length}`);
  }
  if (fields.options !== undefined) {
    params.push(JSON.stringify(fields.options));
    updates.push(`options = $${params.length}`);
  }
  if (fields.explanation !== undefined) {
    params.push(fields.explanation);
    updates.push(`explanation = $${params.length}`);
  }

  if (updates.length === 0) {
    return res.status(400).json({ error: { code: 'NO_CHANGES', message: 'No se enviaron campos para actualizar.' } });
  }

  try {
    const sql = `UPDATE eqd.questions SET ${updates.join(', ')} WHERE id = $1 RETURNING id`;
    const result = await query(sql, params);

    if (!result.rows.length) {
      return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Pregunta no encontrada.' } });
    }

    await logAudit({
      userId: req.user.id,
      action: 'admin_patch_question',
      detail: { id, fields: Object.keys(fields) },
      ip: req.ip,
    });

    return res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /admin/questions/:id
 */
adminRouter.delete('/questions/:id', async (req, res, next) => {
  const id = String(req.params.id || '').trim();
  try {
    const result = await query(`DELETE FROM eqd.questions WHERE id = $1 RETURNING id`, [id]);
    if (!result.rows.length) {
      return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Pregunta no encontrada.' } });
    }

    await logAudit({
      userId: req.user.id,
      action: 'admin_delete_question',
      detail: { id },
      ip: req.ip,
    });

    return res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});
