-- =====================================================================
-- 001_schema.sql
-- Esquema `eqd` (sin dependencias ni extensiones propietarias de Supabase).
--
-- Ejecutar como superusuario (postgres), conectado a la base `eqd`:
--
--   sudo -u postgres psql -v ON_ERROR_STOP=1 -d eqd -f 001_schema.sql
-- =====================================================================

\set ON_ERROR_STOP on

-- Extensiones necesarias
CREATE EXTENSION IF NOT EXISTS citext;

-- Cerrar permisos en el esquema public
REVOKE ALL ON SCHEMA public FROM PUBLIC;

BEGIN;

SET LOCAL ROLE eqd_owner;

CREATE SCHEMA IF NOT EXISTS eqd AUTHORIZATION eqd_owner;
REVOKE ALL ON SCHEMA eqd FROM PUBLIC;

-- ---------------------------------------------------------------------
-- 1. Usuarios (unifica auth.users y public.profiles de Supabase)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS eqd.users (
  id             uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  email          citext      NOT NULL UNIQUE
                             CHECK (length(email) BETWEEN 3 AND 254 AND position('@' IN email) > 1),
  password_hash  text        NOT NULL CHECK (password_hash ~ '^\$2[aby]\$\d{2}\$'),
  full_name      text        CHECK (full_name IS NULL OR length(full_name) <= 120),
  is_admin       boolean     NOT NULL DEFAULT false,
  failed_logins  integer     NOT NULL DEFAULT 0 CHECK (failed_logins >= 0),
  locked_until   timestamptz,
  created_at     timestamptz NOT NULL DEFAULT now(),
  last_login_at  timestamptz
);
CREATE INDEX IF NOT EXISTS users_email_idx ON eqd.users (email);

-- ---------------------------------------------------------------------
-- 2. Sesiones opacas (solo se almacena sha256(token))
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS eqd.sessions (
  token_hash    bytea       PRIMARY KEY CHECK (length(token_hash) = 32),
  user_id       uuid        NOT NULL REFERENCES eqd.users(id) ON DELETE CASCADE,
  created_at    timestamptz NOT NULL DEFAULT now(),
  last_seen_at  timestamptz NOT NULL DEFAULT now(),
  expires_at    timestamptz NOT NULL,
  ip            inet,
  user_agent    text        CHECK (user_agent IS NULL OR length(user_agent) <= 400)
);
CREATE INDEX IF NOT EXISTS sessions_user_idx    ON eqd.sessions (user_id);
CREATE INDEX IF NOT EXISTS sessions_expires_idx ON eqd.sessions (expires_at);

-- ---------------------------------------------------------------------
-- 3. Configuración global (versión de términos, etc.)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS eqd.settings (
  key   text PRIMARY KEY CHECK (length(key) <= 64),
  value text NOT NULL
);

INSERT INTO eqd.settings (key, value)
VALUES ('current_terms_version', 'v1-2026-05')
ON CONFLICT (key) DO NOTHING;

-- ---------------------------------------------------------------------
-- 4. Aceptación de Términos y Condiciones
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS eqd.terms_acceptance (
  id             bigserial   PRIMARY KEY,
  user_id        uuid        NOT NULL REFERENCES eqd.users(id) ON DELETE CASCADE,
  terms_version  text        NOT NULL CHECK (length(terms_version) BETWEEN 1 AND 40),
  accepted_at    timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS terms_user_idx ON eqd.terms_acceptance (user_id, accepted_at DESC);

-- ---------------------------------------------------------------------
-- 5. Catálogo de preguntas
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS eqd.questions (
  id           text        PRIMARY KEY CHECK (id ~ '^[a-z0-9][a-z0-9-]{1,79}$'),
  section_id   text        NOT NULL CHECK (length(section_id) <= 64),
  subtema_id   text        NOT NULL CHECK (length(subtema_id) <= 64),
  law_id       text        NOT NULL CHECK (length(law_id) <= 64),
  difficulty   text        NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  prompt       text        NOT NULL CHECK (length(prompt) <= 4000),
  options      jsonb       NOT NULL
               CHECK (jsonb_typeof(options) = 'array' AND jsonb_array_length(options) = 4),
  explanation  text        NOT NULL DEFAULT '' CHECK (length(explanation) <= 8000),
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS questions_law_idx ON eqd.questions (section_id, subtema_id, law_id);

CREATE OR REPLACE FUNCTION eqd.touch_updated_at() RETURNS trigger
LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS questions_touch ON eqd.questions;
CREATE TRIGGER questions_touch BEFORE UPDATE ON eqd.questions
  FOR EACH ROW EXECUTE FUNCTION eqd.touch_updated_at();

-- ---------------------------------------------------------------------
-- 6. Intentos de quiz
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS eqd.quiz_attempts (
  id          bigserial   PRIMARY KEY,
  user_id     uuid        NOT NULL REFERENCES eqd.users(id) ON DELETE CASCADE,
  section_id  text        NOT NULL CHECK (length(section_id) <= 64),
  subtema_id  text        NOT NULL CHECK (length(subtema_id) <= 64),
  law_id      text        NOT NULL CHECK (length(law_id) <= 64),
  law_name    text        CHECK (law_name IS NULL OR length(law_name) <= 200),
  difficulty  text        NOT NULL DEFAULT 'balanced' CHECK (length(difficulty) <= 20),
  score       integer     NOT NULL CHECK (score >= 0),
  total       integer     NOT NULL CHECK (total > 0 AND total <= 500 AND score <= total),
  created_at  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS quiz_user_law_idx ON eqd.quiz_attempts (user_id, law_id, created_at DESC);
CREATE INDEX IF NOT EXISTS quiz_created_idx  ON eqd.quiz_attempts (created_at DESC);

-- ---------------------------------------------------------------------
-- 7. Intentos de Práctica libre
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS eqd.practice_attempts (
  id          bigserial   PRIMARY KEY,
  user_id     uuid        NOT NULL REFERENCES eqd.users(id) ON DELETE CASCADE,
  input       text        NOT NULL CHECK (length(input) <= 2000),
  topic       text        CHECK (topic IS NULL OR length(topic) <= 200),
  correct     boolean     NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS practice_user_idx    ON eqd.practice_attempts (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS practice_created_idx ON eqd.practice_attempts (created_at DESC);

-- ---------------------------------------------------------------------
-- 8. Bitácora de auditoría de seguridad
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS eqd.audit_log (
  id          bigserial   PRIMARY KEY,
  user_id     uuid,
  action      text        NOT NULL CHECK (length(action) <= 64),
  detail      jsonb,
  ip          inet,
  created_at  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS audit_created_idx ON eqd.audit_log (created_at DESC);

COMMIT;
