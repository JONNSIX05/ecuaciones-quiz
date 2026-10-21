-- =====================================================================
-- 010_import_supabase.sql
-- Importación segura de datos exportados desde Supabase (CSV).
--
-- Requisitos previos:
--   Los archivos CSV deben estar en el directorio de staging (ej. /tmp/eqd_migration/):
--     - auth_users.csv        (id, email, encrypted_password, created_at)
--     - profiles.csv          (user_id, full_name, is_admin)
--     - terms_acceptance.csv  (id, user_id, terms_version, accepted_at)
--     - questions.csv         (id, section_id, subtema_id, law_id, difficulty, prompt, options, explanation)
--     - quiz_attempts.csv     (id, user_id, section_id, subtema_id, law_id, law_name, difficulty, score, total, created_at)
--     - practice_attempts.csv (id, user_id, input, topic, correct, created_at)
--
-- Ejecutar como superusuario (postgres) en la base `eqd`:
--   sudo -u postgres psql -v ON_ERROR_STOP=1 -d eqd -f 010_import_supabase.sql
-- =====================================================================

\set ON_ERROR_STOP on

BEGIN;

CREATE SCHEMA IF NOT EXISTS import_stage;

-- 1. Staging auth.users
CREATE TABLE import_stage.auth_users (
  id uuid,
  email text,
  encrypted_password text,
  created_at timestamptz
);

-- 2. Staging public.profiles
CREATE TABLE import_stage.profiles (
  user_id uuid,
  full_name text,
  is_admin boolean
);

-- 3. Staging terms_acceptance
CREATE TABLE import_stage.terms_acceptance (
  id bigint,
  user_id uuid,
  terms_version text,
  accepted_at timestamptz
);

-- 4. Staging questions
CREATE TABLE import_stage.questions (
  id text,
  section_id text,
  subtema_id text,
  law_id text,
  difficulty text,
  prompt text,
  options jsonb,
  explanation text
);

-- 5. Staging quiz_attempts
CREATE TABLE import_stage.quiz_attempts (
  id bigint,
  user_id uuid,
  section_id text,
  subtema_id text,
  law_id text,
  law_name text,
  difficulty text,
  score integer,
  total integer,
  created_at timestamptz
);

-- 6. Staging practice_attempts
CREATE TABLE import_stage.practice_attempts (
  id bigint,
  user_id uuid,
  input text,
  topic text,
  correct boolean,
  created_at timestamptz
);

\echo '--> Copiando archivos CSV a tablas de staging...'

\copy import_stage.auth_users FROM '/tmp/eqd_migration/auth_users.csv' WITH (FORMAT csv, HEADER true);
\copy import_stage.profiles FROM '/tmp/eqd_migration/profiles.csv' WITH (FORMAT csv, HEADER true);
\copy import_stage.terms_acceptance FROM '/tmp/eqd_migration/terms_acceptance.csv' WITH (FORMAT csv, HEADER true);
\copy import_stage.questions FROM '/tmp/eqd_migration/questions.csv' WITH (FORMAT csv, HEADER true);
\copy import_stage.quiz_attempts FROM '/tmp/eqd_migration/quiz_attempts.csv' WITH (FORMAT csv, HEADER true);
\copy import_stage.practice_attempts FROM '/tmp/eqd_migration/practice_attempts.csv' WITH (FORMAT csv, HEADER true);

\echo '--> Migrando usuarios a eqd.users (combinando auth.users y profiles)...'
INSERT INTO eqd.users (id, email, password_hash, full_name, is_admin, created_at)
SELECT
  u.id,
  u.email::citext,
  u.encrypted_password,
  p.full_name,
  COALESCE(p.is_admin, false),
  COALESCE(u.created_at, now())
FROM import_stage.auth_users u
LEFT JOIN import_stage.profiles p ON p.user_id = u.id
WHERE u.email IS NOT NULL
  AND u.encrypted_password IS NOT NULL
  AND u.encrypted_password ~ '^\$2[aby]\$\d{2}\$'
ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  password_hash = EXCLUDED.password_hash,
  full_name = COALESCE(EXCLUDED.full_name, eqd.users.full_name),
  is_admin = EXCLUDED.is_admin;

\echo '--> Migrando términos aceptados...'
INSERT INTO eqd.terms_acceptance (id, user_id, terms_version, accepted_at)
SELECT t.id, t.user_id, t.terms_version, COALESCE(t.accepted_at, now())
FROM import_stage.terms_acceptance t
JOIN eqd.users u ON u.id = t.user_id
ON CONFLICT (id) DO NOTHING;

\echo '--> Migrando banco de preguntas...'
INSERT INTO eqd.questions (id, section_id, subtema_id, law_id, difficulty, prompt, options, explanation)
SELECT q.id, q.section_id, q.subtema_id, q.law_id, q.difficulty, q.prompt, q.options, COALESCE(q.explanation, '')
FROM import_stage.questions q
ON CONFLICT (id) DO UPDATE SET
  section_id = EXCLUDED.section_id,
  subtema_id = EXCLUDED.subtema_id,
  law_id = EXCLUDED.law_id,
  difficulty = EXCLUDED.difficulty,
  prompt = EXCLUDED.prompt,
  options = EXCLUDED.options,
  explanation = EXCLUDED.explanation,
  updated_at = now();

\echo '--> Migrando intentos de quiz...'
INSERT INTO eqd.quiz_attempts (id, user_id, section_id, subtema_id, law_id, law_name, difficulty, score, total, created_at)
SELECT qa.id, qa.user_id, qa.section_id, qa.subtema_id, qa.law_id, qa.law_name, COALESCE(qa.difficulty, 'balanced'), qa.score, qa.total, COALESCE(qa.created_at, now())
FROM import_stage.quiz_attempts qa
JOIN eqd.users u ON u.id = qa.user_id
ON CONFLICT (id) DO NOTHING;

\echo '--> Migrando intentos de práctica libre...'
INSERT INTO eqd.practice_attempts (id, user_id, input, topic, correct, created_at)
SELECT pa.id, pa.user_id, pa.input, pa.topic, pa.correct, COALESCE(pa.created_at, now())
FROM import_stage.practice_attempts pa
JOIN eqd.users u ON u.id = pa.user_id
ON CONFLICT (id) DO NOTHING;

\echo '--> Ajustando secuencias automáticas...'
SELECT setval('eqd.terms_acceptance_id_seq', COALESCE((SELECT MAX(id) FROM eqd.terms_acceptance), 1));
SELECT setval('eqd.quiz_attempts_id_seq', COALESCE((SELECT MAX(id) FROM eqd.quiz_attempts), 1));
SELECT setval('eqd.practice_attempts_id_seq', COALESCE((SELECT MAX(id) FROM eqd.practice_attempts), 1));

\echo '--> Limpiando tablas de staging...'
DROP SCHEMA import_stage CASCADE;

COMMIT;

\echo '==================================================='
\echo 'RESUMEN DE REGISTROS MIGRADOS EN EQD:'
SELECT 'users' AS tabla, count(*) AS total FROM eqd.users
UNION ALL
SELECT 'terms_acceptance', count(*) FROM eqd.terms_acceptance
UNION ALL
SELECT 'questions', count(*) FROM eqd.questions
UNION ALL
SELECT 'quiz_attempts', count(*) FROM eqd.quiz_attempts
UNION ALL
SELECT 'practice_attempts', count(*) FROM eqd.practice_attempts;
\echo '==================================================='
