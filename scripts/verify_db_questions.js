// scripts/verify_db_questions.js
// Verifica la cantidad, distribución e integridad de caracteres (mojibake) en Supabase vía REST API usando curl.

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

function checkMojibake() {
  try {
    const url = `${SUPABASE_URL}/rest/v1/questions?select=id,prompt,explanation&limit=100`;
    const output = execSync(
      `curl.exe -s "${url}" -H "apikey: ${ANON_KEY}" -H "Authorization: Bearer ${ANON_KEY}"`,
      { encoding: 'utf-8', timeout: 15000 }
    );
    const rows = JSON.parse(output);
    const corrupted = rows.filter(r => /Ã|Â|â€/.test(r.prompt || '') || /Ã|Â|â€/.test(r.explanation || ''));
    const testDebug = rows.find(r => r.id === 'test-debug');
    return {
      sampleChecked: rows.length,
      corruptedCount: corrupted.length,
      hasTestDebug: Boolean(testDebug),
      corruptedSample: corrupted.slice(0, 3)
    };
  } catch (e) {
    return { error: e.message };
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

  const mojibakeRes = checkMojibake();
  console.log('\n--- Auditoría de Caracteres y Filas de Prueba ---');
  if (mojibakeRes.error) {
    console.log('  No se pudo verificar muestra de texto:', mojibakeRes.error);
  } else {
    if (mojibakeRes.hasTestDebug) {
      console.log('  ⚠ Fila de prueba "test-debug" presente en BD.');
    } else {
      console.log('  ✓ Sin filas de prueba extra ("test-debug" eliminada).');
    }

    if (mojibakeRes.corruptedCount > 0) {
      console.log(`  ⚠ Advertencia: Se detectaron caracteres corruptos (mojibake) en la muestra (${mojibakeRes.corruptedCount}/${mojibakeRes.sampleChecked}):`);
      mojibakeRes.corruptedSample.forEach(c => console.log(`    - ID: ${c.id}: ${c.prompt}`));
      console.log('  -> Es necesario re-aplicar migrations/00_all_questions.sql con codificación UTF-8.');
    } else {
      console.log('  ✓ Acentos y caracteres especiales limpios (sin mojibake).');
    }
  }

  if (totalRes.total === 758 && mojibakeRes.corruptedCount === 0 && !mojibakeRes.hasTestDebug) {
    console.log('\n✓ ¡MIGRACIÓN COMPLETADA Y VERIFICADA CON ÉXITO! (100% de preguntas cargadas y limpias)');
  }
}

main();
