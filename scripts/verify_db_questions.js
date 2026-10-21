// scripts/verify_db_questions.js
// Verifica la cantidad, distribución e integridad de preguntas en la base de datos vía la API del VPS o local.

const API_URL = process.env.API_URL || 'https://eqd-quiz.duckdns.org';
const AUTH_TOKEN = process.env.AUTH_TOKEN || '';

async function fetchQuestionsCount(filter = '') {
  try {
    const headers = { 'Accept': 'application/json' };
    if (AUTH_TOKEN) headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;

    const res = await fetch(`${API_URL}/admin/questions?from=0&to=1${filter}`, { headers });
    if (!res.ok) {
      return { ok: false, error: `HTTP ${res.status}: ${res.statusText}` };
    }
    const data = await res.json();
    return { ok: true, total: data.count ?? 0 };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

async function checkSample() {
  try {
    const headers = { 'Accept': 'application/json' };
    if (AUTH_TOKEN) headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;

    const res = await fetch(`${API_URL}/admin/questions?from=0&to=99`, { headers });
    if (!res.ok) return { error: `HTTP ${res.status}` };

    const data = await res.json();
    const rows = data.rows || [];
    const corrupted = rows.filter(r => /Ã|Â|â€/.test(r.prompt || '') || /Ã|Â|â€/.test(r.explanation || ''));

    return {
      sampleChecked: rows.length,
      corruptedCount: corrupted.length,
      sample: corrupted.slice(0, 3)
    };
  } catch (err) {
    return { error: err.message };
  }
}

async function main() {
  console.log(`=== Verificando preguntas en API: ${API_URL} ===\n`);

  if (!AUTH_TOKEN) {
    console.warn('AVISO: Variable AUTH_TOKEN no configurada. Si el endpoint requiere autenticación admin, pasarlo como:');
    console.warn('  AUTH_TOKEN="..." node scripts/verify_db_questions.js\n');
  }

  const totalRes = await fetchQuestionsCount();
  if (!totalRes.ok) {
    console.error('Error al consultar la API:', totalRes.error);
    return;
  }

  console.log(`Total de preguntas registradas: ${totalRes.total}`);

  const [alg, cd, ci] = await Promise.all([
    fetchQuestionsCount('&section_id=algebra'),
    fetchQuestionsCount('&section_id=calculo-diferencial'),
    fetchQuestionsCount('&section_id=calculo-integral'),
  ]);

  console.log(`  - Álgebra:             ${alg.ok ? alg.total : 'Error'}`);
  console.log(`  - Cálculo Diferencial: ${cd.ok ? cd.total : 'Error'}`);
  console.log(`  - Cálculo Integral:    ${ci.ok ? ci.total : 'Error'}`);

  const sampleRes = await checkSample();
  if (sampleRes.error) {
    console.warn('Muestra no evaluada:', sampleRes.error);
  } else {
    console.log(`\nRevisión de codificación (muestra de ${sampleRes.sampleChecked}):`);
    console.log(`  - Registros con caracteres corruptos: ${sampleRes.corruptedCount}`);
  }
}

main();
