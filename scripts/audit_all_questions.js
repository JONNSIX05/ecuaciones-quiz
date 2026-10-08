// scripts/audit_all_questions.js
// Auditoría completa de consistencia, sintaxis LaTeX, opciones y caracteres en todas las preguntas.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Importamos la lista de fuentes desde export_questions_to_sql
const sources = [
  // CÁLCULO DIFERENCIAL
  { file: 'data/calculo-diferencial/limites/sustitucion.js', type: 'law_object' },
  { file: 'data/calculo-diferencial/limites/indeterminacion-00.js', type: 'law_object' },
  { file: 'data/calculo-diferencial/limites/infinito.js', type: 'law_object' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-basicas.js', type: 'array' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-log-exp.js', type: 'array' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-trig.js', type: 'array' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-trig-inv.js', type: 'array' },

  // CÁLCULO INTEGRAL
  { file: 'data/calculo-integral/inmediatas/preguntas-inmediatas.js', type: 'array' },
  { file: 'data/calculo-integral/partes/preguntas-partes.js', type: 'array' },
  { file: 'data/calculo-integral/fracciones-parciales/preguntas-fracciones-parciales.js', type: 'array' },
  { file: 'data/calculo-integral/sustitucion-trigonometrica/preguntas-sustitucion.js', type: 'array' },

  // ÁLGEBRA
  { file: 'data/algebra/exponentes/producto.js', type: 'law_object' },
  { file: 'data/algebra/exponentes/cociente.js', type: 'law_object' },
  { file: 'data/algebra/exponentes/potencia-cociente.js', type: 'law_object' },
  { file: 'data/algebra/exponentes/potencia-potencia.js', type: 'law_object' },
  { file: 'data/algebra/exponentes/potencia-producto.js', type: 'law_object' },
  { file: 'data/algebra/exponentes/exponente-cero.js', type: 'law_object' },
  { file: 'data/algebra/exponentes/exponente-negativo.js', type: 'law_object' },
  { file: 'data/algebra/exponentes/exponente-fraccionario.js', type: 'law_object' },
  { file: 'data/algebra/logaritmos/definicion.js', type: 'law_object' },
  { file: 'data/algebra/logaritmos/producto.js', type: 'law_object' },
  { file: 'data/algebra/logaritmos/cociente.js', type: 'law_object' },
  { file: 'data/algebra/logaritmos/potencia.js', type: 'law_object' },
  { file: 'data/algebra/logaritmos/cambio-base.js', type: 'law_object' },
  { file: 'data/algebra/trigonometria/pitagorica.js', type: 'law_object' },
  { file: 'data/algebra/trigonometria/reciprocas.js', type: 'law_object' },
  { file: 'data/algebra/trigonometria/cociente.js', type: 'law_object' },
  { file: 'data/algebra/productos-notables/factor-comun.js', type: 'law_object' },
  { file: 'data/algebra/productos-notables/binomio-cuadrado.js', type: 'law_object' },
  { file: 'data/algebra/productos-notables/binomio-cubo.js', type: 'law_object' },
  { file: 'data/algebra/productos-notables/binomios-conjugados.js', type: 'law_object' },
  { file: 'data/algebra/productos-notables/diferencia-cuadrados.js', type: 'law_object' },
  { file: 'data/algebra/productos-notables/diferencia-cubos.js', type: 'law_object' },
  { file: 'data/algebra/productos-notables/suma-cubos.js', type: 'law_object' },
  { file: 'data/algebra/productos-notables/trinomio-cuadrado-perfecto.js', type: 'law_object' },
  { file: 'data/algebra/complejos/operaciones.js', type: 'law_object' },
  { file: 'data/algebra/complejos/forma-polar.js', type: 'law_object' },
  { file: 'data/algebra/cuadratica/formula-general.js', type: 'law_object' },
  { file: 'data/algebra/division-polinomios/algoritmo.js', type: 'law_object' }
];

function checkBrackets(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\\' && i + 1 < str.length && (str[i+1] === '{' || str[i+1] === '}')) {
      i++; // escaped brace
      continue;
    }
    if (str[i] === '{') count++;
    if (str[i] === '}') count--;
    if (count < 0) return false;
  }
  return count === 0;
}

function hasMojibake(str) {
  return /Ã|Â|â€|â€“|â€”/.test(str);
}

async function runAudit() {
  console.log('=== AUDITORÍA EXHAUSTIVA DE PREGUNTAS ===\n');

  const issues = [];
  let totalChecked = 0;

  for (const src of sources) {
    const absPath = path.resolve(rootDir, src.file);
    const mod = await import(`file://${absPath.replace(/\\/g, '/')}`);
    const questions = src.type === 'array' ? mod.default : mod.default.questions;

    for (const q of questions) {
      totalChecked++;
      const qContext = `[${src.file} -> ${q.id}]`;

      // 1. Caracteres corruptos
      if (hasMojibake(q.prompt)) issues.push(`${qContext}: Mojibake en prompt: "${q.prompt}"`);
      if (hasMojibake(q.explanation || '')) issues.push(`${qContext}: Mojibake en explanation`);
      q.options.forEach((opt, idx) => {
        if (hasMojibake(opt.latex)) issues.push(`${qContext}: Mojibake en opción ${idx + 1}`);
      });

      // 2. Conteo de opciones y correcta
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        issues.push(`${qContext}: No tiene exactamente 4 opciones (${q.options ? q.options.length : 0})`);
      }
      const correctOpts = (q.options || []).filter(o => o.correct);
      if (correctOpts.length !== 1) {
        issues.push(`${qContext}: Tiene ${correctOpts.length} opciones correctas`);
      }

      // 3. Opciones duplicadas idénticas
      const optTexts = (q.options || []).map(o => o.latex.trim());
      const uniqueOpts = new Set(optTexts);
      if (uniqueOpts.size !== optTexts.length) {
        issues.push(`${qContext}: Opciones duplicadas idénticas: ${JSON.stringify(optTexts)}`);
      }

      // 4. Llaves KaTeX desbalanceadas
      if (!checkBrackets(q.prompt)) issues.push(`${qContext}: Llaves desbalanceadas en prompt`);
      if (q.explanation && !checkBrackets(q.explanation)) issues.push(`${qContext}: Llaves desbalanceadas en explanation`);
      q.options.forEach((opt, idx) => {
        if (!checkBrackets(opt.latex)) issues.push(`${qContext}: Llaves desbalanceadas en opción ${idx + 1}: ${opt.latex}`);
      });

      // 5. Verificaciones de calidad
      if (!q.explanation || q.explanation.trim().length === 0) {
        issues.push(`${qContext}: Explicación vacía`);
      }
    }
  }

  // Auditar también data/questions/ejercicios_resueltos.json
  const resueltosPath = path.resolve(rootDir, 'data/questions/ejercicios_resueltos.json');
  if (fs.existsSync(resueltosPath)) {
    const raw = fs.readFileSync(resueltosPath, 'utf8');
    const parsed = JSON.parse(raw);
    const resueltos = Array.isArray(parsed) ? parsed : (parsed.questions || []);
    for (const q of resueltos) {
      totalChecked++;
      const qContext = `[ejercicios_resueltos.json -> ${q.id}]`;
      if (hasMojibake(q.prompt)) issues.push(`${qContext}: Mojibake en prompt`);
      if (hasMojibake(q.explanation || '')) issues.push(`${qContext}: Mojibake en explanation`);
      q.options.forEach((opt, idx) => {
        if (hasMojibake(opt.latex)) issues.push(`${qContext}: Mojibake en opción ${idx + 1}`);
      });
      const correctOpts = (q.options || []).filter(o => o.correct);
      if (correctOpts.length !== 1) {
        issues.push(`${qContext}: Tiene ${correctOpts.length} opciones correctas`);
      }
      const optTexts = (q.options || []).map(o => o.latex.trim());
      if (new Set(optTexts).size !== optTexts.length) {
        issues.push(`${qContext}: Opciones duplicadas: ${JSON.stringify(optTexts)}`);
      }
    }
  }

  console.log(`Total preguntas analizadas: ${totalChecked}`);
  if (issues.length === 0) {
    console.log('✓ ¡0 problemas detectados en los archivos locales! Toda la sintaxis, llaves y opciones son válidas.');
  } else {
    console.log(`⚠ Se encontraron ${issues.length} advertencias/problemas:`);
    issues.forEach(i => console.log('  - ' + i));
  }
}

runAudit();
