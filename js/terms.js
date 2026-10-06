// js/terms.js
// Texto legal de Términos y Condiciones + Aviso de Privacidad.
// Basado en la Ley General de Protección de Datos Personales en Posesión de
// Sujetos Obligados (LGPDPPSO) y la Ley Orgánica de la Universidad Autónoma de Chiapas.
// Este archivo es el DEFAULT en frontend; el panel admin puede actualizar la
// tabla `terms_text` y el frontend la refresca vía `getCurrentTerms()`.

export const TERMS_DEFAULT = {
  version: 'v1-2026-05',
  title: 'Términos y Condiciones — Quiz de Matemáticas',
  intro:
    'Antes de usar este servicio, por favor lee y acepta los siguientes términos. ' +
    'Al continuar, manifiestas tu consentimiento libre, específico, informado e ' +
    'inequívoco para el tratamiento de tus datos personales conforme a lo descrito ' +
    'en este documento y conforme a la legislación mexicana aplicable.',
  sections: [
    {
      h: '1. Responsable del tratamiento',
      p:
        'El responsable del tratamiento de los datos personales recabados a través ' +
        'de este sitio es la Universidad Autónoma de Chiapas (UNACH), con domicilio ' +
        'en Boulevard Dr. Eduardo J. Albores Corso Km. 1.5, Col. Centro, Tuxtla ' +
        'Gutiérrez, Chiapas, México. El responsable del sistema es el Comité de ' +
        'Transparencia y Protección de Datos Personales de la UNACH.',
    },
    {
      h: '2. Datos personales que recabamos',
      p:
        'Para el registro y operación de este sitio recabamos: (i) dirección de ' +
        'correo electrónico, (ii) nombre completo (opcional), y (iii) contraseña ' +
        'administrada por el proveedor de autenticación. La contraseña es ' +
        'cifrada por el proveedor y no es accesible para el responsable. No ' +
        'recabamos datos personales sensibles.',
    },
    {
      h: '3. Finalidades del tratamiento',
      p:
        'Sus datos personales se utilizan para: (a) crear y administrar su cuenta; ' +
        '(b) almacenar el progreso de las preguntas respondidas en cada ley y sus ' +
        'intentos; (c) generar estadísticas agregadas y anonimizadas para uso ' +
        'académico; (d) mostrar su progreso al profesor titular del grupo al que ' +
        'pertenece, en caso de que aplique.',
    },
    {
      h: '4. Base legal',
      p:
        'El tratamiento se realiza con fundamento en los artículos 6, apartado A, ' +
        'fracción II, y 16, segundo párrafo, de la Constitución Política de los ' +
        'Estados Unidos Mexicanos; los artículos 1, 2, 4, 5, 11 y 17 de la Ley ' +
        'General de Protección de Datos Personales en Posesión de Sujetos Obligados ' +
        '(LGPDPPSO); y los artículos 1, 2, 3, 11, 13, 16, 17, 26, 27 y 28 de la ' +
        'Ley Orgánica de la Universidad Autónoma de Chiapas.',
    },
    {
      h: '5. Transferencias',
      p:
        'Sus datos personales no se transfieren a terceros, salvo los casos ' +
        'previstos en los artículos 22 y 70 de la LGPDPPSO.',
    },
    {
      h: '6. Derechos ARCO',
      p:
        'Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación u ' +
        'Oposición (ARCO), así como revocar su consentimiento, mediante solicitud ' +
        'escrita dirigida al Comité de Transparencia de la UNACH al correo ' +
        'institucional del responsable del sistema. La respuesta se dará en los ' +
        'plazos previstos en el artículo 25 de la LGPDPPSO.',
    },
    {
      h: '7. Conservación',
      p:
        'Sus datos se conservan mientras su cuenta esté activa. Al solicitar la ' +
        'baja, se eliminan en un plazo máximo de 30 días naturales.',
    },
    {
      h: '8. Encuestas anónimas y agregadas',
      p:
        'Las preguntas respondidas y los puntajes pueden agregarse y presentarse de ' +
        'forma anónima para fines académicos y de mejora docente. No se conservan ' +
        'con su nombre salvo en su cuenta personal.',
    },
    {
      h: '9. Modificaciones',
      p:
        'Cualquier cambio a estos términos le será notificado al iniciar sesión y ' +
        'requerirá nueva aceptación para continuar usando el servicio.',
    },
    {
      h: '10. Consentimiento',
      p:
        'Al marcar la casilla de aceptación y continuar con el registro, usted ' +
        'manifiesta su consentimiento libre, específico, informado e inequívoco ' +
        'para el tratamiento de sus datos personales conforme a lo descrito en ' +
        'este documento.',
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