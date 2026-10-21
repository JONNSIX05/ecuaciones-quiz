-- =====================================================================
-- 000_roles_db.sql
-- Crea los roles y la base de datos `eqd`.
--
-- Ejecutar como superusuario (postgres), conectado a la base `postgres`:
--
--   sudo -u postgres psql -v ON_ERROR_STOP=1 \
--        -v app_pw="$EQD_APP_PW" -d postgres -f 000_roles_db.sql
--
-- `app_pw` se genera con:  openssl rand -hex 32
-- (hex para evitar caracteres especiales conflictivos en URLs de conexión).
-- La contraseña NUNCA se escribe en este archivo.
-- =====================================================================

\set ON_ERROR_STOP on

\if :{?app_pw}
\else
  \echo 'ERROR: Falta el parámetro -v app_pw="<contraseña_segura>"'
  \quit 1
\endif

-- 1. Rol dueño del esquema (NOLOGIN: solo se asume con SET ROLE por administradores)
SELECT 'CREATE ROLE eqd_owner NOLOGIN'
WHERE NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'eqd_owner') \gexec

-- 2. Rol de la aplicación API (LOGIN restringido, sin privilegios administrativos)
SELECT format(
  'CREATE ROLE eqd_app LOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOBYPASSRLS CONNECTION LIMIT 30 PASSWORD %L',
  :'app_pw'
)
WHERE NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'eqd_app') \gexec

-- Si el rol ya existe, actualiza la contraseña
SELECT format('ALTER ROLE eqd_app PASSWORD %L', :'app_pw') \gexec

-- 3. Crear base de datos propiedad de eqd_owner
SELECT 'CREATE DATABASE eqd OWNER eqd_owner ENCODING ''UTF8'' TEMPLATE template0'
WHERE NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'eqd') \gexec

-- Restricciones de conexión seguras
REVOKE ALL ON DATABASE eqd FROM PUBLIC;
GRANT CONNECT ON DATABASE eqd TO eqd_app;

-- Parámetros defensivos para sesiones de eqd_app
ALTER ROLE eqd_app SET statement_timeout = '15s';
ALTER ROLE eqd_app SET idle_in_transaction_session_timeout = '30s';
ALTER ROLE eqd_app SET search_path = eqd;
