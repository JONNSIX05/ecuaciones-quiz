-- =====================================================================
-- 003_add_grado_grupo.sql
-- Agrega columnas opcionales `grado` y `grupo` a la tabla `eqd.users`.
--
-- Ejecutar como superusuario (postgres) en la base `eqd`:
--   sudo -u postgres psql -v ON_ERROR_STOP=1 -d eqd -f 003_add_grado_grupo.sql
-- =====================================================================

\set ON_ERROR_STOP on

BEGIN;

ALTER TABLE eqd.users
  ADD COLUMN IF NOT EXISTS grado text CHECK (grado IS NULL OR length(grado) <= 20),
  ADD COLUMN IF NOT EXISTS grupo text CHECK (grupo IS NULL OR length(grupo) <= 20);

COMMIT;
