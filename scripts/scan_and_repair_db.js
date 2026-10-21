// scripts/scan_and_repair_db.js
// Escanea la base de datos de Supabase, detecta preguntas con mojibake,
// y las actualiza todas con el contenido local UTF-8 original.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const API_URL = process.env.API_URL || 'https://eqd-quiz.duckdns.org';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || process.argv[2] || '';
const ADMIN_PW = process.env.ADMIN_PW || process.argv[3] || '';

if (!ADMIN_EMAIL || !ADMIN_PW) {
  console.error('Uso: node scripts/scan_and_repair_db.js <email> <password>');
  process.exit(1);
}

const sources = [
  // CÁLCULO DIFERENCIAL (183)
  { file: 'data/calculo-diferencial/limites/sustitucion.js', section: 'calculo-diferencial', subtema: 'limites', type: 'law_object' },
  { file: 'data/calculo-diferencial/limites/indeterminacion-00.js', section: 'calculo-diferencial', subtema: 'limites', type: 'law_object' },
  { file: 'data/calculo-diferencial/limites/infinito.js', section: 'calculo-diferencial', subtema: 'limites', type: 'law_object' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-basicas.js', section: 'calculo-diferencial', subtema: 'derivacion', law: 'derivacion', type: 'array' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-log-exp.js', section: 'calculo-diferencial', subtema: 'derivacion', law: 'derivacion', type: 'array' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-trig.js', section: 'calculo-diferencial', subtema: 'derivacion', law: 'derivacion', type: 'array' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-trig-inv.js', section: 'calculo-diferencial', subtema: 'derivacion', law: 'derivacion', type: 'array' },

  // CÁLCULO INTEGRAL (155)
  { file: 'data/calculo-integral/inmediatas/preguntas-inmediatas.js', section: 'calculo-integral', subtema: 'inmediatas', law: 'inmediatas', type: 'array' },
  { file: 'data/calculo-integral/partes/preguntas-partes.js', section: 'calculo-integral', subtema: 'partes', law: 'partes', type: 'array' },
  { file: 'data/calculo-integral/fracciones-parciales/preguntas-fracciones-parciales.js', section: 'calculo-integral', subtema: 'fracciones-parciales', law: 'fracciones-parciales', type: 'array' },
  { file: 'data/calculo-integral/sustitucion-trigonometrica/preguntas-sustitucion.js', section: 'calculo-integral', subtema: 'sustitucion-trigonometrica', law: 'sustitucion-trigonometrica', type: 'array' },

  // ÁLGEBRA (420)
  { file: 'data/algebra/exponentes/producto.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/cociente.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/potencia-cociente.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/potencia-potencia.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/potencia-producto.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/exponente-cero.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/exponente-negativo.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/exponente-fraccionario.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/logaritmos/definicion.js', section: 'algebra', subtema: 'logaritmos', type: 'law_object' },
  { file: 'data/algebra/logaritmos/producto.js', section: 'algebra', subtema: 'logaritmos', type: 'law_object' },
  { file: 'data/algebra/logaritmos/cociente.js', section: 'algebra', subtema: 'logaritmos', type: 'law_object' },
  { file: 'data/algebra/logaritmos/potencia.js', section: 'algebra', subtema: 'logaritmos', type: 'law_object' },
  { file: 'data/algebra/logaritmos/cambio-base.js', section: 'algebra', subtema: 'logaritmos', type: 'law_object' },
  { file: 'data/algebra/trigonometria/pitagorica.js', section: 'algebra', subtema: 'trigonometria', type: 'law_object' },
  { file: 'data/algebra/trigonometria/reciprocas.js', section: 'algebra', subtema: 'trigonometria', type: 'law_object' },
  { file: 'data/algebra/trigonometria/cociente.js', section: 'algebra', subtema: 'trigonometria', type: 'law_object' },
  { file: 'data/algebra/productos-notables/factor-comun.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/binomio-cuadrado.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/binomio-cubo.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/binomios-conjugados.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/diferencia-cuadrados.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/diferencia-cubos.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/suma-cubos.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/trinomio-cuadrado-perfecto.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/complejos/operaciones.js', section: 'algebra', subtema: 'complejos', type: 'law_object' },
  { file: 'data/algebra/complejos/forma-polar.js', section: 'algebra', subtema: 'complejos', type: 'law_object' },
  { file: 'data/algebra/cuadratica/formula-general.js', section: 'algebra', subtema: 'cuadratica', type: 'law_object' },
  { file: 'data/algebra/division-polinomios/algoritmo.js', section: 'algebra', subtema: 'division-polinomios', type: 'law_object' }
];

async function loadLocalQuestions() {
  const all = [];
  for (const src of sources) {
    const absPath = path.resolve(rootDir, src.file);
    const mod = await import(`file://${absPath.replace(/\\/g, '/')}`);
    let list = [];
    let lawId = src.law;
    if (src.type === 'array') {
      list = mod.default;
    } else {
      lawId = mod.default.lawId;
      list = mod.default.questions;
    }
    for (const q of list) {
      all.push({
        id: q.id,
        section_id: src.section,
        subtema_id: src.subtema,
        law_id: lawId,
        difficulty: q.difficulty,
        prompt: q.prompt,
        options: q.options,
        explanation: q.explanation || ''
      });
    }
  }

  // Si existe data/questions/ejercicios_resueltos.json, cargarlo también
  const resueltosPath = path.resolve(rootDir, 'data/questions/ejercicios_resueltos.json');
  if (fs.existsSync(resueltosPath)) {
    const raw = fs.readFileSync(resueltosPath, 'utf8');
    const parsed = JSON.parse(raw);
    const list = Array.isArray(parsed) ? parsed : (parsed.questions || []);
    for (const q of list) {
      all.push({
        id: q.id,
        section_id: q.section,
        subtema_id: q.subtema,
        law_id: q.law,
        difficulty: q.difficulty,
        prompt: q.prompt,
        options: q.options,
        explanation: q.explanation || ''
      });
    }
  }

  return all;
}

async function getAdminToken() {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PW })
  });
  const data = await res.json();
  if (!data.token) {
    throw new Error(`Error de autenticación: ${JSON.stringify(data)}`);
  }
  return data.token;
}

async function scanDbQuestions(token) {
  const corrupted = [];
  let total = 0;
  let offset = 0;
  const limit = 100;

  while (true) {
    const res = await fetch(`${API_URL}/admin/questions?from=${offset}&to=${offset + limit - 1}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    const rows = data.rows || [];
    if (!rows || rows.length === 0) break;
    total += rows.length;
    for (const r of rows) {
      const fullText = (r.prompt || '') + (r.explanation || '') + JSON.stringify(r.options || []);
      if (/Ã|Â|â€|â€“|â€”/.test(fullText)) {
        corrupted.push({ id: r.id, prompt: r.prompt });
      }
    }
    offset += rows.length;
    if (total >= (data.count || 0)) break;
  }
  return { total, corrupted };
}

async function main() {
  console.log(`=== VERIFICACIÓN Y REPARACIÓN DE PREGUNTAS EN API (${API_URL}) ===\n`);

  console.log('1. Obteniendo sesión de administrador en la API...');
  const token = await getAdminToken();
  console.log('   Sesión obtenida con éxito.');

  console.log('\n2. Escaneando estado actual en la base de datos...');
  const beforeScan = await scanDbQuestions(token);
  console.log(`   Total en BD: ${beforeScan.total}`);
  console.log(`   Preguntas con caracteres corruptos (mojibake): ${beforeScan.corrupted.length}`);
  if (beforeScan.corrupted.length > 0) {
    console.log('   Muestra de corruptas:');
    beforeScan.corrupted.slice(0, 5).forEach(c => console.log(`     - [${c.id}] ${c.prompt}`));
  }

  console.log('\n3. Cargando preguntas limpias del código fuente...');
  const localQuestions = await loadLocalQuestions();
  console.log(`   Preguntas locales preparadas: ${localQuestions.length}`);

  console.log('\n4. Sincronizando (upsert) preguntas a la API en lotes...');
  const batchSize = 50;
  let successCount = 0;

  for (let i = 0; i < localQuestions.length; i += batchSize) {
    const batch = localQuestions.slice(i, i + batchSize);
    const res = await fetch(`${API_URL}/admin/questions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(batch)
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Error en lote ${i / batchSize + 1}: HTTP ${res.status} - ${errText}`);
    }
    successCount += batch.length;
    process.stdout.write(`   Progreso: ${successCount}/${localQuestions.length} preguntas sincronizadas...\r`);
  }
  console.log(`\n   ✓ ${successCount} preguntas sincronizadas correctamente.`);

  console.log('\n5. Eliminando fila de prueba test-debug si existe...');
  await fetch(`${API_URL}/admin/questions/test-debug`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  console.log('\n6. Verificando estado final en la base de datos...');
  const afterScan = await scanDbQuestions(token);
  console.log(`   Total preguntas en BD: ${afterScan.total}`);
  console.log(`   Preguntas con mojibake restantes: ${afterScan.corrupted.length}`);

  if (afterScan.corrupted.length === 0) {
    console.log('\n✓ ¡REPARACIÓN COMPLETADA CON ÉXITO! 100% de preguntas sin errores ni caracteres corruptos.');
  } else {
    console.log(`\n⚠ Aún quedan ${afterScan.corrupted.length} preguntas con posibles problemas:`);
    afterScan.corrupted.forEach(c => console.log(`   - ${c.id}: ${c.prompt}`));
  }
}

main().catch(err => {
  console.error('\nError fatal durante la sincronización:', err);
  process.exit(1);
});
