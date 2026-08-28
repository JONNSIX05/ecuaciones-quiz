// quiz-engine.js — Lógica pura del quiz: selección de preguntas,
// mezcla de opciones y distribución por dificultad.

/**
 * Mezcla un array con Fisher-Yates (no muta el original).
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
export function shuffle(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Devuelve una copia de la pregunta con sus opciones barajadas.
 * @param {object} question
 * @returns {object}
 */
export function shuffleOptions(question) {
  return { ...question, options: shuffle(question.options) };
}

/**
 * Reparte `n` preguntas entre las tres dificultades de forma
 * equilibrada (prioriza easy y medium cuando no es divisible).
 * @param {number} n
 * @returns {{easy:number, medium:number, hard:number}}
 */
export function balancedSplit(n) {
  const base = Math.floor(n / 3);
  const rem = n % 3;
  return {
    easy: base + (rem > 0 ? 1 : 0),
    medium: base + (rem > 1 ? 1 : 0),
    hard: base,
  };
}

/**
 * Cuenta las preguntas disponibles por dificultad en una ley.
 * @param {object} law
 * @returns {{easy:number, medium:number, hard:number}}
 */
export function availableByDifficulty(law) {
  const counts = { easy: 0, medium: 0, hard: 0 };
  for (const q of law.questions) {
    if (counts[q.difficulty] !== undefined) counts[q.difficulty]++;
  }
  return counts;
}

/**
 * Selecciona preguntas de una ley según una distribución deseada.
 * Recorta cada dificultad a la cantidad disponible y rellena el
 * faltante con las demás para garantizar la cantidad total pedida.
 * @param {object} law
 * @param {{easy:number, medium:number, hard:number}} wanted
 * @returns {object[]} preguntas con opciones barajadas, en orden aleatorio.
 */
export function selectQuestions(law, wanted) {
  const wantedMap = {
    easy: Math.max(0, wanted.easy || 0),
    medium: Math.max(0, wanted.medium || 0),
    hard: Math.max(0, wanted.hard || 0),
  };

  const byDiff = { easy: [], medium: [], hard: [] };
  for (const q of law.questions) {
    if (byDiff[q.difficulty]) byDiff[q.difficulty].push(q);
  }

  const picked = [];
  for (const diff of ['easy', 'medium', 'hard']) {
    const pool = shuffle(byDiff[diff]);
    const take = Math.min(wantedMap[diff], pool.length);
    picked.push(...pool.slice(0, take));
    wantedMap[diff] -= take;
  }

  // Rellena el faltante con las preguntas no usadas (si hay).
  if (picked.length < (wanted.easy + wanted.medium + wanted.hard)) {
    const usedIds = new Set(picked.map((q) => q.id));
    const leftovers = law.questions.filter((q) => !usedIds.has(q.id));
    const needed =
      wanted.easy + wanted.medium + wanted.hard - picked.length;
    picked.push(...shuffle(leftovers).slice(0, needed));
  }

  return shuffle(picked).map(shuffleOptions);
}

/**
 * Calcula el mensaje de resultado según el porcentaje.
 * @param {number} score
 * @param {number} total
 * @returns {string}
 */
export function resultMessage(score, total) {
  if (total === 0) return 'Sin preguntas.';
  const ratio = score / total;
  if (ratio >= 0.9) return 'Excelente. Dominas esta ley.';
  if (ratio >= 0.7) return 'Muy bien. Vas por buen camino.';
  if (ratio >= 0.5) return 'Regular. Repasa la fórmula antes de reintentar.';
  return 'Necesitas repasar. Revisa la fórmula y vuelve a intentar.';
}

/**
 * Nivel del marcador visual según el porcentaje.
 * @param {number} score
 * @param {number} total
 * @returns {'high'|'mid'|'low'}
 */
export function meterLevel(score, total) {
  if (total === 0) return 'low';
  const ratio = score / total;
  if (ratio >= 0.7) return 'high';
  if (ratio >= 0.5) return 'mid';
  return 'low';
}
