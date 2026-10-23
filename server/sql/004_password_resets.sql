-- =====================================================================
-- 004_password_resets.sql
-- Tabla para tokens de recuperación de contraseñas expirables y de un solo uso.
--
-- Ejecutar como superusuario (postgres) o eqd_owner, en la base `eqd`:
--
--   sudo -u postgres psql -v ON_ERROR_STOP=1 -d eqd -f 004_password_resets.sql
-- =====================================================================

\set ON_ERROR_STOP on

BEGIN;

SET LOCAL ROLE eqd_owner;

CREATE TABLE IF NOT EXISTS eqd.password_resets (
  id          bigserial   PRIMARY KEY,
  user_id     uuid        NOT NULL REFERENCES eqd.users(id) ON DELETE CASCADE,
  token_hash  bytea       NOT NULL CHECK (length(token_hash) = 32),
  expires_at  timestamptz NOT NULL,
  used_at     timestamptz,
  ip          inet,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS password_resets_user_idx    ON eqd.password_resets (user_id);
CREATE INDEX IF NOT EXISTS password_resets_token_idx   ON eqd.password_resets (token_hash);
CREATE INDEX IF NOT EXISTS password_resets_expires_idx ON eqd.password_resets (expires_at);

-- Otorgar permisos al rol de aplicación de la API
GRANT SELECT, INSERT, UPDATE, DELETE ON eqd.password_resets TO eqd_app;
GRANT USAGE, SELECT ON SEQUENCE eqd.password_resets_id_seq TO eqd_app;

COMMIT;
