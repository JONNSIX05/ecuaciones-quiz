// scripts/verify_subtemas_count.js
import * as alg from '../data/algebra/index.js';
import * as cd from '../data/calculo-diferencial/index.js';
import * as ci from '../data/calculo-integral/index.js';

const sections = [
  { name: alg.sectionName, subtemas: alg.subtemas },
  { name: cd.sectionName, subtemas: cd.subtemas },
  { name: ci.sectionName, subtemas: ci.subtemas },
];
console.log('=== RESUMEN GLOBAL DE SUBTEMAS ===');
let grandTotal = 0;
const allIds = new Set();
let duplicateIds = 0;
let badPostgresIds = 0;
let subtemaCount = 0;
const pgIdRegex = /^[a-z0-9][a-z0-9-]{1,79}$/;

for (const sec of sections) {
  console.log('\n--- ' + sec.name + ' ---');
  for (const sub of sec.subtemas) {
    if (!sub.laws) continue;
    subtemaCount++;
    let subTotal = 0;
    let easy = 0, med = 0, hard = 0;
    for (const law of sub.laws) {
      if (!law.questions) continue;
      for (const q of law.questions) {
        if (allIds.has(q.id)) {
          duplicateIds++;
          console.error('ID DUPLICADO:', q.id);
        }
        if (!pgIdRegex.test(q.id)) {
          badPostgresIds++;
          console.error('ID INVÁLIDO PARA POSTGRES:', q.id);
        }
        allIds.add(q.id);
        subTotal++;
        if (q.difficulty === 'easy') easy++;
        else if (q.difficulty === 'medium') med++;
        else if (q.difficulty === 'hard') hard++;
      }
    }
    grandTotal += subTotal;
    const status = subTotal >= 300 ? '✓' : '✗ INCOMPLETO';
    console.log(`${status} ${sub.id.padEnd(28)} Total: ${String(subTotal).padStart(4)}  (Fácil: ${easy}, Media: ${med}, Difícil: ${hard})`);
  }
}

console.log('\n=======================================');
console.log(`SUBTEMAS EVALUADOS:      ${subtemaCount}`);
console.log(`GRAN TOTAL DE PREGUNTAS: ${grandTotal}`);
console.log(`IDs DUPLICADOS:          ${duplicateIds}`);
console.log(`IDs INVÁLIDOS POSTGRES:  ${badPostgresIds}`);
console.log('=======================================');
