# INSTRUCCIONES MAESTRAS PARA EL AGENTE DE IA EN EL VPS (Ubuntu 24.04)

> **ROL DEL AGENTE:** Actúas como un Ingeniero DevSecOps Senior y Administrador de Sistemas Linux. Tu misión es aprovisionar PostgreSQL 16 local, importar la base de datos de Supabase, desplegar la API Node.js en el puerto 3000 y publicar `eqd-quiz.duckdns.org` mediante el **Nginx + Certbot** existente en el servidor, sin interrumpir ningún servicio actual.

---

## ⚠️ REGLAS ESTRICTAS DE SEGURIDAD Y OPERACIÓN

1. **PROHIBIDO MODIFICAR SSH O UFW:**
   - **NO toques** `/etc/ssh/sshd_config`, `/etc/ssh/sshd_config.d/*`, `~/.ssh/authorized_keys` ni reinicies el servicio `ssh`/`sshd`. El acceso SSH debe quedar exactamente como está ahora.
   - **NO modifiques ni elimines** reglas existentes en `ufw` (ya están abiertos 22, 80, 443 y 51820/udp de WireGuard).
2. **PROHIBIDO AFECTAR SERVICIOS EN PRODUCCIÓN:**
   - No detengas Nginx ni modifiques `/etc/nginx/sites-enabled/play.hexcamrecs.lat` ni ninguno de los contenedores Docker activos.
   - Toda modificación en Nginx debe validarse con `sudo nginx -t` y aplicarse con `sudo systemctl reload nginx` (nunca `stop`).
3. **POSTGRESQL NUNCA SE EXPONE A INTERNET:** El puerto `5432` debe escuchar **única y exclusivamente en `localhost` (`127.0.0.1`, `::1`)**.
4. **PROTECCIÓN DE SECRETOS Y TOKENS:**
   - La cadena de conexión de Supabase y el token de DuckDNS no deben guardarse en el historial de bash (`HISTCONTROL=ignorespace` o variables temporales).
   - Todos los archivos temporales CSV en `/tmp/eqd_migration` deben ser destruidos con `sudo shred -u` inmediatamente tras la importación.
5. **VERIFICACIÓN PASO A PASO:** Ejecuta cada fase y valida su resultado antes de avanzar a la siguiente. Si ocurre un error, deténte y reporta.

---

## FASE 1: CLONAR EL PROYECTO EN `/home/jonathan/Ecuacionesdb`

Clona la rama `migracion-vps` del repositorio en `/home/jonathan/Ecuacionesdb`:
```bash
cd /home/jonathan/Ecuacionesdb
git clone -b migracion-vps https://github.com/JONNSIX05/ecuaciones-quiz.git .
ls -la server/sql server/deploy server/src
```

---

## FASE 2: PAQUETES BASE Y PROTECCIÓN FAIL2BAN (SIN TOCAR SSH NI UFW)

Instala únicamente las utilidades necesarias sin modificar `sshd_config` ni `ufw`:
```bash
sudo apt update
sudo apt install -y curl wget git age fail2ban unattended-upgrades
```

Si `fail2ban` no tiene aún configuración local, puedes activar la jaula por defecto para `sshd` (sin alterar `/etc/ssh/sshd_config`):
```bash
sudo systemctl enable --now fail2ban
```

---

## FASE 3: SUBDOMINIO GRATUITO CON DUCKDNS (`eqd-quiz.duckdns.org`)

1. Solicita al usuario su **DuckDNS Token** (si aún no te lo ha pasado).
2. Crea el directorio y el script de actualización:
```bash
sudo mkdir -p /opt/duckdns
```
Crea `/opt/duckdns/duck.sh` con permisos `700`:
```bash
#!/usr/bin/env bash
DOMAIN="eqd-quiz"
TOKEN="AQUI_EL_TOKEN_DEL_USUARIO"
LOG="/var/log/duckdns.log"
RES=$(curl -s "https://www.duckdns.org/update?domains=${DOMAIN}&token=${TOKEN}&ip=")
echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] DuckDNS update: ${RES}" >> "$LOG"
```
3. Asigna permisos estrictos y pruébalo:
```bash
sudo chmod 700 /opt/duckdns/duck.sh
sudo /opt/duckdns/duck.sh
cat /var/log/duckdns.log
# Debe mostrar 'OK'
```
4. Agrega una tarea en cron para que se actualice cada 5 minutos:
```bash
(sudo crontab -l 2>/dev/null | grep -v '/opt/duckdns/duck.sh'; echo "*/5 * * * * /opt/duckdns/duck.sh >/dev/null 2>&1") | sudo crontab -
```

---

## FASE 4: INSTALACIÓN Y ENDURECIMIENTO DE POSTGRESQL 16

### 4.1. Instalar PostgreSQL 16 (Ubuntu 24.04 incluye `postgresql-16` en repositorios oficiales)
```bash
sudo apt update
sudo apt install -y postgresql-16 postgresql-contrib-16
```

### 4.2. Asegurar que PostgreSQL escuche SOLO en localhost
Verifica `/etc/postgresql/16/main/postgresql.conf`:
```text
listen_addresses = 'localhost'
password_encryption = scram-sha-256
log_connections = on
log_disconnections = on
log_min_duration_statement = 500ms
```
Verifica `/etc/postgresql/16/main/pg_hba.conf` (conexiones TCP locales con `scram-sha-256`):
```text
local   all             postgres                                peer
local   all             all                                     peer
host    all             all             127.0.0.1/32            scram-sha-256
host    all             all             ::1/128                 scram-sha-256
```
Reinicia PostgreSQL y comprueba los sockets:
```bash
sudo systemctl restart postgresql
sudo ss -tlnp | grep 5432
# DEBE mostrar únicamente 127.0.0.1:5432 y [::1]:5432. NUNCA 0.0.0.0:5432
```

### 4.3. Crear base de datos, roles y esquema `eqd`
Genera una contraseña criptográfica segura para el rol de aplicación `eqd_app`:
```bash
cd /home/jonathan/Ecuacionesdb
APP_PW=$(openssl rand -hex 32)

# 1. Crear roles y base de datos
sudo -u postgres psql -v ON_ERROR_STOP=1 -v app_pw="$APP_PW" -d postgres -f server/sql/000_roles_db.sql

# 2. Crear esquema y tablas
sudo -u postgres psql -v ON_ERROR_STOP=1 -d eqd -f server/sql/001_schema.sql

# 3. Aplicar permisos restringidos (mínimo privilegio)
sudo -u postgres psql -v ON_ERROR_STOP=1 -d eqd -f server/sql/002_permissions.sql
```

Guarda de inmediato las credenciales en `/etc/eqd-api/env`:
```bash
sudo mkdir -p /etc/eqd-api
cat <<EOF | sudo tee /etc/eqd-api/env >/dev/null
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://eqd_app:${APP_PW}@127.0.0.1:5432/eqd?sslmode=disable
CORS_ORIGIN=https://jonnsix05.github.io
LOG_LEVEL=info
EOF
unset APP_PW
```

---

## FASE 5: EXPORTACIÓN DESDE SUPABASE Y MIGRACIÓN COMPLETA

Solicita al usuario su cadena de conexión de Supabase (`SUPABASE_DB_URL`).

### 5.1. Exportación segura hacia staging
```bash
sudo rm -rf /tmp/eqd_migration
mkdir -p /tmp/eqd_migration
chmod 700 /tmp/eqd_migration

psql "$SUPABASE_DB_URL" -c "\copy (SELECT id, email, encrypted_password, created_at FROM auth.users) TO '/tmp/eqd_migration/auth_users.csv' WITH (FORMAT csv, HEADER true);"
psql "$SUPABASE_DB_URL" -c "\copy (SELECT user_id, full_name, is_admin FROM public.profiles) TO '/tmp/eqd_migration/profiles.csv' WITH (FORMAT csv, HEADER true);"
psql "$SUPABASE_DB_URL" -c "\copy (SELECT id, user_id, terms_version, accepted_at FROM public.terms_acceptance) TO '/tmp/eqd_migration/terms_acceptance.csv' WITH (FORMAT csv, HEADER true);"
psql "$SUPABASE_DB_URL" -c "\copy (SELECT id, section_id, subtema_id, law_id, difficulty, prompt, options, explanation FROM public.questions) TO '/tmp/eqd_migration/questions.csv' WITH (FORMAT csv, HEADER true);"
psql "$SUPABASE_DB_URL" -c "\copy (SELECT id, user_id, section_id, subtema_id, law_id, law_name, difficulty, score, total, created_at FROM public.quiz_attempts) TO '/tmp/eqd_migration/quiz_attempts.csv' WITH (FORMAT csv, HEADER true);"
psql "$SUPABASE_DB_URL" -c "\copy (SELECT id, user_id, input, topic, correct, created_at FROM public.practice_attempts) TO '/tmp/eqd_migration/practice_attempts.csv' WITH (FORMAT csv, HEADER true);"

# Asignar propiedad temporal al usuario postgres para que psql pueda leer los CSV
sudo chown -R postgres:postgres /tmp/eqd_migration
sudo chmod 700 /tmp/eqd_migration
sudo chmod 600 /tmp/eqd_migration/*.csv
```

### 5.2. Ejecutar script de importación
```bash
cd /home/jonathan/Ecuacionesdb
sudo -u postgres psql -v ON_ERROR_STOP=1 -d eqd -f server/sql/010_import_supabase.sql
```

### 5.3. Asignar rol de Administrador al correo del profesor
```bash
sudo -u postgres psql -d eqd -c "UPDATE eqd.users SET is_admin = true WHERE email = 'CORREO_DEL_PROFESOR';"
```

### 5.4. Destrucción segura de archivos temporales
```bash
sudo shred -u /tmp/eqd_migration/*.csv
sudo rmdir /tmp/eqd_migration
unset SUPABASE_DB_URL
```

---

## FASE 6: INSTALACIÓN DE NODE.JS 22 LTS Y SERVICIO API (`127.0.0.1:3000`)

### 6.1. Verificar o instalar Node.js 22 LTS
```bash
if ! command -v node >/dev/null || [ "$(node -v | cut -d. -f1 | tr -d 'v')" -lt 20 ]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt install -y nodejs
fi
node -v
npm -v
```

### 6.2. Crear usuario de sistema `eqd` y desplegar `/opt/eqd-api`
```bash
sudo id -u eqd &>/dev/null || sudo useradd -r -s /usr/sbin/nologin -d /opt/eqd-api eqd

sudo mkdir -p /opt/eqd-api
sudo cp -r /home/jonathan/Ecuacionesdb/server/* /opt/eqd-api/
sudo chown -R eqd:eqd /opt/eqd-api
sudo chown -R root:eqd /etc/eqd-api
sudo chmod 640 /etc/eqd-api/env

cd /opt/eqd-api
sudo -u eqd npm install --omit=dev
```

### 6.3. Activar servicio systemd
```bash
sudo cp /home/jonathan/Ecuacionesdb/server/deploy/eqd-api.service /etc/systemd/system/eqd-api.service
sudo systemctl daemon-reload
sudo systemctl enable --now eqd-api
sudo systemctl status eqd-api --no-pager

curl -i http://127.0.0.1:3000/health
# Debe responder HTTP 200 con {"status":"ok",...}
```

---

## FASE 7: NGINX + CERTBOT EXISTENTE (SIN TOCAR `play.hexcamrecs.lat`)

Usa el Nginx y Certbot ya instalados en el servidor:

```bash
# 1. Copiar configuración del virtualhost
sudo cp /home/jonathan/Ecuacionesdb/server/deploy/nginx-eqd-api.conf.example /etc/nginx/sites-available/eqd-quiz.duckdns.org
sudo ln -sf /etc/nginx/sites-available/eqd-quiz.duckdns.org /etc/nginx/sites-enabled/eqd-quiz.duckdns.org

# 2. Validar sintaxis de Nginx antes de recargar
sudo nginx -t
sudo systemctl reload nginx

# 3. Emitir certificado TLS con Certbot y activar redirección HTTPS
sudo certbot --nginx -d eqd-quiz.duckdns.org --non-interactive --agree-tos --redirect --register-unsafely-without-email || sudo certbot --nginx -d eqd-quiz.duckdns.org --redirect
```

Verifica que ambos sitios respondan correctamente:
```bash
curl -sI https://eqd-quiz.duckdns.org/health
curl -sI https://play.hexcamrecs.lat
```

---

## FASE 8: RESPALDOS AUTOMÁTICOS CIFRADOS

1. Crea `/opt/backups` (`chmod 700`) y genera una llave `age` en `/etc/eqd-api/backup.key` (`chmod 600`).
2. Crea `/opt/backups/backup_eqd.sh` que ejecute `sudo -u postgres pg_dump -Fc eqd | age -r "$PUBKEY" > /opt/backups/eqd_$(date +%F).dump.age` y borre respaldos mayores a 14 días (`find /opt/backups -name 'eqd_*.dump.age' -mtime +14 -delete`).
3. Programa el cron diario a las 03:00 AM y realiza una prueba de ejecución.

---

## FASE 9: INFORME DE AUDITORÍA FINAL

Presenta al usuario la salida real de:
- [ ] `sudo ss -tlnp` (confirmando que `5432` y `3000` están solo en `127.0.0.1`).
- [ ] `curl -i https://eqd-quiz.duckdns.org/health` (200 OK por HTTPS).
- [ ] Conteo de filas migradas en `eqd.users`, `eqd.questions`, `eqd.quiz_attempts`, `eqd.practice_attempts`.
- [ ] Confirmación de que `/tmp/eqd_migration` fue eliminado con `shred` y que SSH y `play.hexcamrecs.lat` siguen intactos.
