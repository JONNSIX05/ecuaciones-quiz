// server/src/mailer.js
import nodemailer from 'nodemailer';
import { config } from './config.js';

let _transporter = null;

function getTransporter() {
  if (_transporter) return _transporter;
  if (!config.SMTP_USER || !config.SMTP_PASS) return null;

  _transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: config.SMTP_PORT === 465,
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASS,
    },
  });

  return _transporter;
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Envía el correo de recuperación de contraseña con el código y el enlace directo.
 * @param {{ to: string, fullName?: string, token: string }} opts
 * @returns {Promise<{ sent: boolean, reason?: string }>}
 */
export async function sendPasswordResetEmail({ to, fullName, token }) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn('[MAILER] SMTP_USER / SMTP_PASS no configurados. No se pudo enviar el correo a:', to);
    return { sent: false, reason: 'SMTP_NOT_CONFIGURED' };
  }

  const baseUrl = config.PUBLIC_APP_URL.replace(/\/+$/, '');
  const resetUrl = `${baseUrl}/#/recuperar?token=${encodeURIComponent(token)}&email=${encodeURIComponent(to)}`;
  const fromAddress = config.SMTP_FROM || `"Ecuaciones Diferenciales" <${config.SMTP_USER}>`;
  const greetingName = fullName ? escapeHtml(fullName) : 'Estudiante';

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
      <div style="background: #132652; border-bottom: 4px solid #c59b27; padding: 20px 24px; color: #ffffff;">
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #f5d97e; font-weight: 700;">Ecuaciones Diferenciales</div>
        <h1 style="margin: 4px 0 0; font-size: 20px; font-weight: 800;">Recuperación de Contraseña</h1>
      </div>
      <div style="padding: 24px; color: #1e293b; line-height: 1.6; font-size: 15px;">
        <p style="margin-top: 0;">Hola, <strong>${greetingName}</strong>:</p>
        <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta en la plataforma <strong>Quiz de Matemáticas y Ecuaciones Diferenciales</strong>.</p>
        <p style="margin: 20px 0; text-align: center;">
          <a href="${resetUrl}" style="display: inline-block; background: #132652; color: #ffffff; text-decoration: none; font-weight: 700; padding: 12px 24px; border-radius: 8px; border: 2px solid #c59b27;">
            Restablecer mi contraseña
          </a>
        </p>
        <p>O bien, copia y pega el siguiente <strong>código de recuperación</strong> en la pestaña <em>"2. Ingresar código/token"</em> de la página:</p>
        <div style="background: #f8fafc; border: 1px dashed #94a3b8; border-radius: 8px; padding: 12px 16px; text-align: center; font-family: monospace; font-size: 16px; font-weight: 700; color: #041548; word-break: break-all;">
          ${escapeHtml(token)}
        </div>
        <p style="font-size: 13px; color: #64748b; margin-top: 20px;">
          Este código es de un solo uso y expirará en <strong>30 minutos</strong>. Si tú no solicitaste este cambio, puedes ignorar este mensaje con seguridad; tu contraseña actual seguirá funcionando.
        </p>
      </div>
    </div>
  `;

  const text = [
    `Hola, ${fullName || 'Estudiante'}:`,
    '',
    'Recibimos una solicitud para restablecer tu contraseña en el Quiz de Matemáticas y Ecuaciones Diferenciales.',
    '',
    `Enlace directo (válido por 30 minutos): ${resetUrl}`,
    '',
    `Código / Token de recuperación: ${token}`,
    '',
    'Si no solicitaste este cambio, ignora este mensaje.',
  ].join('\n');

  await transporter.sendMail({
    from: fromAddress,
    to,
    subject: 'Código de recuperación de contraseña — Ecuaciones Diferenciales',
    text,
    html,
  });

  return { sent: true };
}
