// data/questions/upload-schema.js
// Validación del JSON que sube el profesor.

const REQUIRED = ['id', 'difficulty', 'prompt', 'options', 'explanation'];
const VALID_DIFF = ['easy', 'medium', 'hard'];

/**
 * @param {string} raw  texto JSON subido
 * @returns {{ok:boolean, error?:string, questions?:object[], meta?:{sectionId,subtemaId,lawId}}}
 */
export function validateQuestionJSON(raw) {
  let parsed;
  try { parsed = JSON.parse(raw); } catch (e) {
    return { ok: false, error: 'JSON inválido' };
  }

  let questions;
  let meta = {};
  if (Array.isArray(parsed)) {
    questions = parsed;
  } else if (parsed && Array.isArray(parsed.questions)) {
    questions = parsed.questions;
    meta = {
      sectionId:   parsed.section  ?? parsed.sectionId,
      subtemaId:   parsed.subtema  ?? parsed.subtemaId,
      lawId:       parsed.law      ?? parsed.lawId,
    };
  } else {
    return { ok: false, error: 'Formato esperado: array o {section, subtema, law, questions}' };
  }

  if (!questions.length) return { ok: false, error: 'Sin preguntas' };

  const errors = [];
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    for (const k of REQUIRED) {
      if (q[k] === undefined) errors.push(`Pregunta ${i}: falta ${k}`);
    }
    if (q.difficulty && !VALID_DIFF.includes(q.difficulty)) {
      errors.push(`Pregunta ${i}: difficulty debe ser easy, medium o hard`);
    }
    if (Array.isArray(q.options)) {
      if (q.options.length !== 4) errors.push(`Pregunta ${i}: debe tener 4 opciones (tiene ${q.options.length})`);
      const correct = q.options.filter((o) => o.correct).length;
      if (correct !== 1) errors.push(`Pregunta ${i}: debe tener 1 opción correcta (tiene ${correct})`);
    } else {
      errors.push(`Pregunta ${i}: options debe ser array`);
    }
  }
  if (errors.length) return { ok: false, error: errors.slice(0, 5).join('; ') };

  return { ok: true, questions, meta };
}