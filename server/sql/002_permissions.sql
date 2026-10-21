-- =====================================================================
-- 002_permissions.sql
-- Principio de mínimo privilegio para el usuario de la API (`eqd_app`).
--
-- Ejecutar como superusuario (postgres) o eqd_owner, en la base `eqd`:
--
--   sudo -u postgres psql -v ON_ERROR_STOP=1 -d eqd -f 002_permissions.sql
-- =====================================================================

\set ON_ERROR_STOP on

BEGIN;

-- Otorgar uso del esquema
GRANT USAGE ON SCHEMA eqd TO eqd_app;

-- Tabla users: CRUD controlado (sin DELETE)
GRANT SELECT, INSERT, UPDATE ON eqd.users TO eqd_app;

-- Tabla sessions: gestión completa de sesiones
GRANT SELECT, INSERT, UPDATE, DELETE ON eqd.sessions TO eqd_app;

-- Tabla settings: solo lectura
GRANT SELECT ON eqd.settings TO eqd_app;

-- Tabla terms_acceptance: lectura e inserción
GRANT SELECT, INSERT ON eqd.terms_acceptance TO eqd_app;
GRANT USAGE, SELECT ON SEQUENCE eqd.terms_acceptance_id_seq TO eqd_app;

-- Tabla questions: gestión para el panel administrativo (sin TRUNCATE)
GRANT SELECT, INSERT, UPDATE, DELETE ON eqd.questions TO eqd_app;

-- Tabla quiz_attempts: lectura e inserción
GRANT SELECT, INSERT ON eqd.quiz_attempts TO eqd_app;
GRANT USAGE, SELECT ON SEQUENCE eqd.quiz_attempts_id_seq TO eqd_app;

-- Tabla practice_attempts: lectura e inserción
GRANT SELECT, INSERT ON eqd.practice_attempts TO eqd_app;
GRANT USAGE, SELECT ON SEQUENCE eqd.practice_attempts_id_seq TO eqd_app;

-- Tabla audit_log: SOLO inserción (inmutable desde la API; previene encubrimiento de accesos)
GRANT INSERT ON eqd.audit_log TO eqd_app;
GRANT USAGE, SELECT ON SEQUENCE eqd.audit_log_id_seq TO eqd_app;

COMMIT;
