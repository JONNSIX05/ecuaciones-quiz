// data/questions/upload-schema.js
// Validación estricta del archivo JSON que sube el profesor para agregar o actualizar preguntas.

const VALID_DIFF = ['easy', 'medium', 'hard'];
const ID_REGEX = /^[a-z0-9][a-z0-9-]{1,79}$/;

/**
 * Valida y normaliza un texto JSON de preguntas.
 * @param {string} raw  texto JSON subido
 * @returns {{ok:boolean, error?:string, errors?:string[], questions?:object[], meta?:{sectionId:string,subtemaId:string,lawId:string}}}
 */
export function validateQuestionJSON(raw) {
  if (!raw || !String(raw).trim()) {
    return { ok: false, error: 'El contenido JSON está vacío.' };
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return { ok: false, error: `JSON inválido (${e.message}). Verifica comas, llaves y comillas dobles.` };
  }

  let rawQuestions;
  let meta = { sectionId: '', subtemaId: '', lawId: '' };

  if (Array.isArray(parsed)) {
    rawQuestions = parsed;
  } else if (parsed && typeof parsed === 'object' && Array.isArray(parsed.questions)) {
    rawQuestions = parsed.questions;
    meta = {
      sectionId: String(parsed.section_id ?? parsed.sectionId ?? parsed.section ?? '').trim(),
      subtemaId: String(parsed.subtema_id ?? parsed.subtemaId ?? parsed.subtema ?? '').trim(),
      lawId:     String(parsed.law_id     ?? parsed.lawId     ?? parsed.law     ?? '').trim(),
    };
  } else {
    return {
      ok: false,
      error: 'Estructura no reconocida. Debe ser un arreglo [...] o un objeto { "section", "subtema", "law", "questions": [...] }.',
    };
  }

  if (!rawQuestions.length) {
    return { ok: false, error: 'El archivo no contiene ninguna pregunta en "questions".' };
  }

  if (rawQuestions.length > 500) {
    return { ok: false, error: `Máximo 500 preguntas por lote (el archivo tiene ${rawQuestions.length}).` };
  }

  const errors = [];
  const seenIds = new Set();
  const normalized = [];

  for (let i = 0; i < rawQuestions.length; i++) {
    const q = rawQuestions[i];
    const label = `Pregunta #${i + 1}${q?.id ? ` (${q.id})` : ''}`;

    if (!q || typeof q !== 'object') {
      errors.push(`${label}: debe ser un objeto JSON.`);
      continue;
    }

    const id = String(q.id ?? '').trim();
    if (!id) {
      errors.push(`${label}: falta el campo "id".`);
    } else if (!ID_REGEX.test(id)) {
      errors.push(`${label}: el "id" ("${id}") solo puede usar minúsculas, números y guiones (ej. "prod-f-01").`);
    } else if (seenIds.has(id)) {
      errors.push(`${label}: el id "${id}" está duplicado dentro del mismo archivo.`);
    } else {
      seenIds.add(id);
    }

    const section_id = String(q.section_id ?? q.sectionId ?? q.section ?? meta.sectionId ?? '').trim();
    const subtema_id = String(q.subtema_id ?? q.subtemaId ?? q.subtema ?? meta.subtemaId ?? '').trim();
    const law_id     = String(q.law_id     ?? q.lawId     ?? q.law     ?? meta.lawId     ?? '').trim();

    if (!section_id) errors.push(`${label}: falta "section" (ej. "algebra", "calculo-diferencial", "calculo-integral").`);
    if (!subtema_id) errors.push(`${label}: falta "subtema" (ej. "exponentes", "derivacion", "inmediatas").`);
    if (!law_id)     errors.push(`${label}: falta "law" (ej. "producto", "derivacion", "inmediatas").`);

    const difficulty = String(q.difficulty ?? '').trim();
    if (!VALID_DIFF.includes(difficulty)) {
      errors.push(`${label}: "difficulty" debe ser "easy", "medium" o "hard" (recibido: "${q.difficulty ?? ''}").`);
    }

    const prompt = String(q.prompt ?? '').trim();
    if (!prompt) {
      errors.push(`${label}: falta "prompt" (enunciado de la pregunta).`);
    }

    let cleanOptions = [];
    if (!Array.isArray(q.options)) {
      errors.push(`${label}: "options" debe ser un arreglo de 4 opciones.`);
    } else {
      if (q.options.length !== 4) {
        errors.push(`${label}: debe tener exactamente 4 opciones (tiene ${q.options.length}).`);
      }
      let correctCount = 0;
      cleanOptions = q.options.map((opt, idx) => {
        const latex = String(opt?.latex ?? '').trim();
        const isCorrect = Boolean(opt?.correct);
        if (!latex) {
          errors.push(`${label}, opción ${idx + 1}: falta el texto "latex".`);
        }
        if (isCorrect) correctCount++;
        return { latex, correct: isCorrect };
      });
      if (correctCount !== 1) {
        errors.push(`${label}: debe tener exactamente 1 opción con "correct": true (tiene ${correctCount}).`);
      }
    }

    if (q.explanation === undefined || q.explanation === null) {
      errors.push(`${label}: falta el campo "explanation" (explicación paso a paso).`);
    }

    normalized.push({
      id,
      section_id,
      subtema_id,
      law_id,
      difficulty,
      prompt,
      options: cleanOptions,
      explanation: String(q.explanation ?? '').trim(),
    });
  }

  if (errors.length) {
    return {
      ok: false,
      error: errors.slice(0, 6).join(' | '),
      errors,
    };
  }

  return { ok: true, questions: normalized, meta };
}
