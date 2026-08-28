// latex.js — Wrapper seguro sobre KaTeX (self-hosted en vendor/katex/).
// KaTeX se carga como script global (window.katex) desde index.html.

const DEFAULT_OPTS = {
  throwOnError: false,
  strict: false,
  trust: false,
  displayMode: true,
};

/**
 * Verifica que KaTeX esté disponible en el entorno global.
 * @returns {boolean}
 */
export function isReady() {
  return typeof window !== 'undefined' && typeof window.katex !== 'undefined';
}

/**
 * Sanitiza una cadena LaTeX antes de renderizarla.
 * Mantiene `trust: false` (por defecto en KaTeX), lo que bloquea
 * comandos potencialmente peligrosos como \href, \url o \html*.
 * Aquí solo se eliminan caracteres de control y se recorta.
 * @param {string} latex
 * @returns {string}
 */
export function sanitize(latex) {
  if (typeof latex !== 'string') return '';
  return latex
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .trim();
}

/**
 * Renderiza LaTeX dentro de un elemento del DOM.
 * @param {string} latex
 * @param {HTMLElement} element
 * @param {object} [opts]
 * @returns {boolean} true si se renderizó correctamente.
 */
export function render(latex, element, opts = {}) {
  if (!element) return false;
  if (!isReady()) {
    element.textContent = latex;
    return false;
  }
  const source = sanitize(latex);
  try {
    window.katex.render(source, element, { ...DEFAULT_OPTS, ...opts });
    return true;
  } catch (err) {
    element.textContent = source;
    return false;
  }
}

/**
 * Renderiza LaTeX y lo devuelve como cadena HTML (para inyectar
 * en plantillas con varios fragmentos matemáticos).
 * @param {string} latex
 * @param {object} [opts]
 * @returns {string}
 */
export function toHtml(latex, opts = {}) {
  if (!isReady()) return escapeHtml(latex);
  const source = sanitize(latex);
  try {
    return window.katex.renderToString(source, { ...DEFAULT_OPTS, ...opts });
  } catch (err) {
    return escapeHtml(source);
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
