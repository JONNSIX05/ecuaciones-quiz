// js/terms.js
// Texto legal de Términos y Condiciones + Aviso de Privacidad.
// Fundamentado en la legislación federal mexicana (CPEUM, LFPDPPP, LGPDPPSO y Código Civil Federal)
// y en la legislación del Estado Libre y Soberano de Chiapas.

export const TERMS_DEFAULT = {
  version: 'v1-2026-05',
  title: 'Términos y Condiciones — Quiz de Matemáticas y Ecuaciones Diferenciales',
  intro:
    'Antes de utilizar esta plataforma educativa, por favor lee y acepta los siguientes ' +
    'términos y condiciones de uso y aviso de privacidad. Al crear una cuenta y continuar, ' +
    'manifiestas tu consentimiento libre, específico, informado e inequívoco para el ' +
    'tratamiento de tus datos personales conforme a la legislación federal mexicana y la ' +
    'legislación del Estado de Chiapas.',
  sections: [
    {
      h: '1. Responsable del tratamiento de datos personales',
      p:
        'El responsable de la operación de la plataforma educativa "Quiz de Matemáticas y ' +
        'Ecuaciones Diferenciales" y del tratamiento de los datos recabados a través de este ' +
        'sitio es la Administración Docente del proyecto, con domicilio y jurisdicción en el ' +
        'Estado Libre y Soberano de Chiapas, Estados Unidos Mexicanos.',
    },
    {
      h: '2. Datos personales que recabamos',
      p:
        'Para el registro y funcionamiento académico de la plataforma recabamos únicamente: ' +
        '(i) nombre completo, (ii) dirección de correo electrónico, (iii) grado y grupo escolar, ' +
        'y (iv) contraseña de acceso almacenada de forma irreversible mediante cifrado ' +
        'criptográfico (bcrypt). En ningún caso se recaban datos personales sensibles ni ' +
        'información patrimonial o financiera.',
    },
    {
      h: '3. Finalidades del tratamiento',
      p:
        'Sus datos personales se utilizan exclusivamente con fines educativos y académicos para: ' +
        '(a) crear, autenticar y administrar su cuenta de usuario; (b) registrar su avance, ' +
        'puntajes e intentos en los cuestionarios y en el módulo de práctica libre; (c) mostrar ' +
        'el seguimiento de aprovechamiento académico al docente titular del curso; y (d) generar ' +
        'estadísticas agregadas para la mejora continua del material didáctico.',
    },
    {
      h: '4. Fundamento legal (Marco Federal Mexicano y del Estado de Chiapas)',
      p:
        'El tratamiento de sus datos personales y el uso de esta plataforma se rigen por: ' +
        '(I) En el ámbito federal: los artículos 6° y 16, segundo párrafo, de la Constitución ' +
        'Política de los Estados Unidos Mexicanos; la Ley Federal de Protección de Datos ' +
        'Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento; la Ley General de ' +
        'Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO) en lo que ' +
        'resulte aplicable; y el artículo 1803 del Código Civil Federal respecto al consentimiento ' +
        'expresado por medios electrónicos. ' +
        '(II) En el ámbito estatal: la Constitución Política del Estado Libre y Soberano de ' +
        'Chiapas; la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del ' +
        'Estado de Chiapas; y las disposiciones aplicables del Código Civil para el Estado de Chiapas.',
    },
    {
      h: '5. Transferencia de datos',
      p:
        'Sus datos personales no serán comercializados, cedidos ni transferidos a terceros ajenos ' +
        'a la finalidad académica del curso, salvo en los supuestos de excepción expresamente ' +
        'previstos en el artículo 37 de la LFPDPPP y demás disposiciones legales aplicables.',
    },
    {
      h: '6. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)',
      p:
        'En todo momento usted tiene derecho a conocer qué datos personales tenemos de usted, ' +
        'para qué los utilizamos y las condiciones del uso que les damos (Acceso); solicitar la ' +
        'corrección de su información personal en caso de que esté desactualizada o inexacta ' +
        '(Rectificación); solicitar que la eliminemos de nuestros registros cuando considere que ' +
        'no está siendo utilizada conforme a los principios y deberes legales (Cancelación); así ' +
        'como oponerse al uso de sus datos personales para fines específicos (Oposición). Para ' +
        'ejercer sus derechos ARCO o revocar su consentimiento, puede solicitarlo directamente ' +
        'al docente administrador del curso o mediante los canales de contacto de la plataforma.',
    },
    {
      h: '7. Conservación y medidas de seguridad',
      p:
        'Sus datos se conservan de forma segura en servidores protegidos mediante cifrado en ' +
        'tránsito (TLS/HTTPS) y controles de acceso estrictos mientras su cuenta permanezca ' +
        'activa durante el periodo académico correspondiente. Al solicitar la baja de su cuenta, ' +
        'sus datos identificativos serán eliminados.',
    },
    {
      h: '8. Uso adecuado de la plataforma y propiedad intelectual',
      p:
        'El usuario se compromete a hacer un uso lícito, ético y estrictamente académico de los ' +
        'reactivos, formularios y herramientas de la plataforma, absteniéndose de realizar ' +
        'acciones que comprometan la disponibilidad o seguridad del servicio.',
    },
    {
      h: '9. Modificaciones al aviso y términos',
      p:
        'Cualquier actualización sustancial a los presentes términos será publicada en este ' +
        'mismo apartado y notificada al usuario al iniciar sesión.',
    },
    {
      h: '10. Consentimiento y jurisdicción aplicable',
      p:
        'Al marcar la casilla de aceptación y completar su registro, usted manifiesta su ' +
        'conformidad y consentimiento expreso con estos Términos y Condiciones y Aviso de ' +
        'Privacidad. Para la interpretación y cumplimiento de los presentes términos, las partes ' +
        'se someten a la legislación federal mexicana y a las leyes y tribunales competentes del ' +
        'Estado de Chiapas, México.',
    },
  ],
};

export function termsToHtml(terms) {
  const html = [];
  html.push(`<h2>${escape(terms.title)}</h2>`);
  html.push(`<p class="terms-intro">${escape(terms.intro)}</p>`);
  for (const s of terms.sections) {
    html.push(`<h3>${escape(s.h)}</h3>`);
    html.push(`<p>${escape(s.p)}</p>`);
  }
  return html.join('');
}

function escape(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
