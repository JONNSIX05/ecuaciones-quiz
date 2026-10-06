// scripts/verify_db_questions.js
// Verifica la cantidad y distribución de preguntas migradas en Supabase vía REST API usando curl.

import { execSync } from 'child_process';

const SUPABASE_URL = 'https://vaxpiyhwrfzjukevzslo.supabase.co';
const ANON_KEY = 'sb_publishable_JHC5u4DBYAM16R2srAtSzA_3KhZyqL5';

function checkCount(filter = '') {
  const url = `${SUPABASE_URL}/rest/v1/questions?select=id${filter}`;
  try {
    const output = execSync(
      `curl.exe -s -i "${url}" -H "apikey: ${ANON_KEY}" -H "Authorization: Bearer ${ANON_KEY}" -H "Range: 0-0" -H "Prefer: count=exact"`,
      { encoding: 'utf-8', timeout: 15000 }
    );

    const rangeMatch = output.match(/content-range:\s*([^\r\n]+)/i);
    if (!rangeMatch) {
      if (output.includes('HTTP/1.1 200') || output.includes('HTTP/2 200')) {
        return { ok: true, total: 0 };
      }
      return { ok: false, error: 'No se encontró encabezado content-range' };
    }

    const rangeVal = rangeMatch[1].trim(); // ej: "*/0" o "0-0/758"
    const total = rangeVal.includes('/') ? parseInt(rangeVal.split('/')[1], 10) : 0;
    return { ok: true, total };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

function main() {
  console.log('=== Verificando preguntas en Supabase (vaxpiyhwrfzjukevzslo) ===');
  
  const totalRes = checkCount();
  if (!totalRes.ok) {
    console.error('Error al consultar Supabase:', totalRes.error);
    return;
  }

  console.log(`\nTotal global en BD: ${totalRes.total} / 758 esperadas`);

  const sections = ['algebra', 'calculo-diferencial', 'calculo-integral'];
  const expected = {
    'algebra': 420,
    'calculo-diferencial': 183,
    'calculo-integral': 155
  };

  for (const sec of sections) {
    const res = checkCount(`&section_id=eq.${sec}`);
    if (res.ok) {
      console.log(`  - ${sec}: ${res.total} / ${expected[sec]} esperadas`);
    } else {
      console.log(`  - ${sec}: Error (${res.error})`);
    }
  }

  if (totalRes.total === 758) {
    console.log('\n✓ ¡MIGRACIÓN COMPLETADA Y VERIFICADA CON ÉXITO! (100% de preguntas cargadas)');
  } else if (totalRes.total === 0) {
    console.log('\nℹ Nota: La base de datos aún tiene 0 preguntas.');
    console.log('  Ejecuta el contenido de "migrations/00_all_questions.sql" en el SQL Editor de Supabase:');
    console.log('  https://supabase.com/dashboard/project/vaxpiyhwrfzjukevzslo/sql/new');
  } else {
    console.log(`\n⚠ Advertencia: Se encontraron ${totalRes.total} preguntas pero se esperaban 758.`);
  }
}

main();
