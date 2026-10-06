// scripts/export_questions_to_sql.js
// Extrae y valida las 758 preguntas de los módulos de JavaScript locales en data/
// y genera scripts SQL optimizados con dollar-quoting para Supabase.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Lista canónica de fuentes con su sección y subtema correspondientes
const sources = [
  // ================= CÁLCULO DIFERENCIAL (183) =================
  // Límites (45)
  { file: 'data/calculo-diferencial/limites/sustitucion.js', section: 'calculo-diferencial', subtema: 'limites', type: 'law_object' },
  { file: 'data/calculo-diferencial/limites/indeterminacion-00.js', section: 'calculo-diferencial', subtema: 'limites', type: 'law_object' },
  { file: 'data/calculo-diferencial/limites/infinito.js', section: 'calculo-diferencial', subtema: 'limites', type: 'law_object' },
  // Derivación (138)
  { file: 'data/calculo-diferencial/derivacion/preguntas-basicas.js', section: 'calculo-diferencial', subtema: 'derivacion', law: 'derivacion', type: 'array' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-log-exp.js', section: 'calculo-diferencial', subtema: 'derivacion', law: 'derivacion', type: 'array' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-trig.js', section: 'calculo-diferencial', subtema: 'derivacion', law: 'derivacion', type: 'array' },
  { file: 'data/calculo-diferencial/derivacion/preguntas-trig-inv.js', section: 'calculo-diferencial', subtema: 'derivacion', law: 'derivacion', type: 'array' },

  // ================= CÁLCULO INTEGRAL (155) =================
  { file: 'data/calculo-integral/inmediatas/preguntas-inmediatas.js', section: 'calculo-integral', subtema: 'inmediatas', law: 'inmediatas', type: 'array' },
  { file: 'data/calculo-integral/partes/preguntas-partes.js', section: 'calculo-integral', subtema: 'partes', law: 'partes', type: 'array' },
  { file: 'data/calculo-integral/fracciones-parciales/preguntas-fracciones-parciales.js', section: 'calculo-integral', subtema: 'fracciones-parciales', law: 'fracciones-parciales', type: 'array' },
  { file: 'data/calculo-integral/sustitucion-trigonometrica/preguntas-sustitucion.js', section: 'calculo-integral', subtema: 'sustitucion-trigonometrica', law: 'sustitucion-trigonometrica', type: 'array' },

  // ================= ÁLGEBRA (420) =================
  // Exponentes (8 leyes = 120)
  { file: 'data/algebra/exponentes/producto.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/cociente.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/potencia-cociente.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/potencia-potencia.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/potencia-producto.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/exponente-cero.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/exponente-negativo.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  { file: 'data/algebra/exponentes/exponente-fraccionario.js', section: 'algebra', subtema: 'exponentes', type: 'law_object' },
  // Logaritmos (5 leyes = 75)
  { file: 'data/algebra/logaritmos/definicion.js', section: 'algebra', subtema: 'logaritmos', type: 'law_object' },
  { file: 'data/algebra/logaritmos/producto.js', section: 'algebra', subtema: 'logaritmos', type: 'law_object' },
  { file: 'data/algebra/logaritmos/cociente.js', section: 'algebra', subtema: 'logaritmos', type: 'law_object' },
  { file: 'data/algebra/logaritmos/potencia.js', section: 'algebra', subtema: 'logaritmos', type: 'law_object' },
  { file: 'data/algebra/logaritmos/cambio-base.js', section: 'algebra', subtema: 'logaritmos', type: 'law_object' },
  // Trigonometría (3 leyes = 45)
  { file: 'data/algebra/trigonometria/pitagorica.js', section: 'algebra', subtema: 'trigonometria', type: 'law_object' },
  { file: 'data/algebra/trigonometria/reciprocas.js', section: 'algebra', subtema: 'trigonometria', type: 'law_object' },
  { file: 'data/algebra/trigonometria/cociente.js', section: 'algebra', subtema: 'trigonometria', type: 'law_object' },
  // Productos notables (8 leyes = 120)
  { file: 'data/algebra/productos-notables/factor-comun.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/binomio-cuadrado.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/binomio-cubo.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/binomios-conjugados.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/diferencia-cuadrados.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/diferencia-cubos.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/suma-cubos.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  { file: 'data/algebra/productos-notables/trinomio-cuadrado-perfecto.js', section: 'algebra', subtema: 'productos-notables', type: 'law_object' },
  // Complejos (2 leyes = 30)
  { file: 'data/algebra/complejos/operaciones.js', section: 'algebra', subtema: 'complejos', type: 'law_object' },
  { file: 'data/algebra/complejos/forma-polar.js', section: 'algebra', subtema: 'complejos', type: 'law_object' },
  // Cuadrática (1 ley = 15)
  { file: 'data/algebra/cuadratica/formula-general.js', section: 'algebra', subtema: 'cuadratica', type: 'law_object' },
  // División de polinomios (1 ley = 15)
  { file: 'data/algebra/division-polinomios/algoritmo.js', section: 'algebra', subtema: 'division-polinomios', type: 'law_object' }
];

function dollarQuote(str, tag = 'str') {
  // Asegura que no haya colisión con el tag delimitador
  let currentTag = tag;
  let counter = 1;
  while (str.includes(`$${currentTag}$`)) {
    currentTag = `${tag}_${counter++}`;
  }
  return `$${currentTag}$${str}$${currentTag}$`;
}

function formatQuestionValue(q) {
  const idSql = dollarQuote(q.id, 'id');
  const secSql = dollarQuote(q.section_id, 'sec');
  const subSql = dollarQuote(q.subtema_id, 'sub');
  const lawSql = dollarQuote(q.law_id, 'law');
  const diffSql = dollarQuote(q.difficulty, 'diff');
  const promptSql = dollarQuote(q.prompt, 'prompt');
  const optionsJson = JSON.stringify(q.options);
  const optionsSql = `${dollarQuote(optionsJson, 'json')}::jsonb`;
  const expSql = dollarQuote(q.explanation || '', 'exp');

  return `  (${idSql}, ${secSql}, ${subSql}, ${lawSql}, ${diffSql}, ${promptSql}, ${optionsSql}, ${expSql})`;
}

function generateSqlScript(questions, title) {
  const lines = [
    `-- =====================================================================`,
    `-- Migración Supabase: ${title}`,
    `-- Total preguntas en este script: ${questions.length}`,
    `-- Fecha de generación: ${new Date().toISOString()}`,
    `-- =====================================================================`,
    ``,
    `-- Tabla e índices base`,
    `CREATE TABLE IF NOT EXISTS public.questions (`,
    `  id          TEXT PRIMARY KEY,`,
    `  section_id  TEXT NOT NULL,`,
    `  subtema_id  TEXT NOT NULL,`,
    `  law_id      TEXT NOT NULL,`,
    `  difficulty  TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),`,
    `  prompt      TEXT NOT NULL,`,
    `  options     JSONB NOT NULL,`,
    `  explanation TEXT NOT NULL DEFAULT '',`,
    `  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),`,
    `  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()`,
    `);`,
    ``,
    `CREATE INDEX IF NOT EXISTS questions_law_idx ON public.questions (section_id, subtema_id, law_id);`,
    ``,
    `ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;`,
    ``,
    `-- Políticas RLS:`,
    `-- 1. Lectura pública (permite alumnos anónimos y autenticados)`,
    `DROP POLICY IF EXISTS "questions read auth" ON public.questions;`,
    `DROP POLICY IF EXISTS "questions read all" ON public.questions;`,
    `CREATE POLICY "questions read all" ON public.questions`,
    `  FOR SELECT TO anon, authenticated USING (true);`,
    ``,
    `-- 2. Escritura restringida a administradores`,
    `DROP POLICY IF EXISTS "questions admin write" ON public.questions;`,
    `CREATE POLICY "questions admin write" ON public.questions`,
    `  FOR ALL TO authenticated`,
    `  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.user_id = auth.uid() AND p.is_admin))`,
    `  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles p WHERE p.user_id = auth.uid() AND p.is_admin));`,
    ``
  ];

  // Agrupar en bloques de hasta 50 preguntas por INSERT para máxima compatibilidad
  const BATCH_SIZE = 50;
  for (let i = 0; i < questions.length; i += BATCH_SIZE) {
    const batch = questions.slice(i, i + BATCH_SIZE);
    lines.push(`-- Lote ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} preguntas)`);
    lines.push(`INSERT INTO public.questions (id, section_id, subtema_id, law_id, difficulty, prompt, options, explanation)`);
    lines.push(`VALUES`);
    lines.push(batch.map(formatQuestionValue).join(',\n'));
    lines.push(`ON CONFLICT (id) DO UPDATE SET`);
    lines.push(`  section_id  = EXCLUDED.section_id,`);
    lines.push(`  subtema_id  = EXCLUDED.subtema_id,`);
    lines.push(`  law_id      = EXCLUDED.law_id,`);
    lines.push(`  difficulty  = EXCLUDED.difficulty,`);
    lines.push(`  prompt      = EXCLUDED.prompt,`);
    lines.push(`  options     = EXCLUDED.options,`);
    lines.push(`  explanation = EXCLUDED.explanation,`);
    lines.push(`  updated_at  = now();`);
    lines.push(``);
  }

  return lines.join('\n');
}

async function main() {
  console.log('--- Iniciando extracción y validación de preguntas ---');
  const allQuestions = [];
  const bySection = {
    'algebra': [],
    'calculo-diferencial': [],
    'calculo-integral': []
  };

  const seenIds = new Set();
  const errors = [];

  for (const src of sources) {
    const absPath = path.resolve(rootDir, src.file);
    const mod = await import(`file://${absPath.replace(/\\/g, '/')}`);
    let list = [];
    let lawId = src.law;

    if (src.type === 'array') {
      list = mod.default;
    } else if (src.type === 'law_object') {
      lawId = mod.default.lawId;
      list = mod.default.questions;
    }

    if (!Array.isArray(list) || list.length === 0) {
      errors.push(`Archivo ${src.file} no tiene preguntas válidas.`);
      continue;
    }

    for (const q of list) {
      if (seenIds.has(q.id)) {
        errors.push(`ID duplicado detectado: ${q.id} en ${src.file}`);
      }
      seenIds.add(q.id);

      if (!q.id || !q.prompt || !q.difficulty || !Array.isArray(q.options) || q.options.length !== 4) {
        errors.push(`Esquema inválido en pregunta ${q.id} (${src.file})`);
      }
      const correctCount = (q.options || []).filter(o => o.correct).length;
      if (correctCount !== 1) {
        errors.push(`Pregunta ${q.id} tiene ${correctCount} opciones correctas (debe tener exactamente 1).`);
      }

      const row = {
        id: q.id,
        section_id: src.section,
        subtema_id: src.subtema,
        law_id: lawId,
        difficulty: q.difficulty,
        prompt: q.prompt,
        options: q.options,
        explanation: q.explanation || ''
      };

      allQuestions.push(row);
      if (bySection[src.section]) {
        bySection[src.section].push(row);
      }
    }
  }

  if (errors.length > 0) {
    console.error('ERRORES ENCONTRADOS:', errors);
    process.exit(1);
  }

  console.log(`✓ Total preguntas validadas: ${allQuestions.length}`);
  console.log(`  - Álgebra: ${bySection['algebra'].length}`);
  console.log(`  - Cálculo Diferencial: ${bySection['calculo-diferencial'].length}`);
  console.log(`  - Cálculo Integral: ${bySection['calculo-integral'].length}`);

  const migrationsDir = path.resolve(rootDir, 'migrations');
  if (!fs.existsSync(migrationsDir)) {
    fs.mkdirSync(migrationsDir, { recursive: true });
  }

  // Generar scripts individuales y global
  const filesToGenerate = [
    { name: '01_algebra_questions.sql', questions: bySection['algebra'], title: 'Sección 01 - Álgebra (420 preguntas)' },
    { name: '02_calculo_diferencial_questions.sql', questions: bySection['calculo-diferencial'], title: 'Sección 02 - Cálculo Diferencial (183 preguntas)' },
    { name: '03_calculo_integral_questions.sql', questions: bySection['calculo-integral'], title: 'Sección 03 - Cálculo Integral (155 preguntas)' },
    { name: '00_all_questions.sql', questions: allQuestions, title: 'Catálogo Completo Global (758 preguntas)' }
  ];

  for (const item of filesToGenerate) {
    const target = path.join(migrationsDir, item.name);
    const sql = generateSqlScript(item.questions, item.title);
    fs.writeFileSync(target, sql, 'utf8');
    console.log(`✓ Generado: migrations/${item.name} (${(fs.statSync(target).size / 1024).toFixed(1)} KB)`);
  }

  console.log('\n--- Generación completada con éxito ---');
}

main().catch(err => {
  console.error('Error fatal:', err);
  process.exit(1);
});
