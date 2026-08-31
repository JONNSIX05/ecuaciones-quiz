// modal.js — Modal mínimo y accesible: foco atrapado, cierre con
// Escape / backdrop / botón, restauración de foco al cerrar.

let activeModal = null;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function isModalOpen() {
  return activeModal !== null;
}

export function closeActiveModal() {
  if (activeModal) activeModal.close();
}

/**
 * Abre un modal accesible. Solo puede haber uno activo a la vez.
 * @param {{title:string, contentHTML?:string, onClose?:Function}} opts
 * @returns {{close:Function, root:HTMLElement}}
 */
export function openModal({ title, contentHTML = '', onClose = null }) {
  closeActiveModal();

  const previousFocus = document.activeElement;

  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';

  const dialog = document.createElement('div');
  dialog.className = 'modal';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'modal-title');
  dialog.innerHTML = `
    <div class="modal-head">
      <h2 id="modal-title">${escapeHtml(title)}</h2>
      <button class="modal-close" type="button" aria-label="Cerrar">✕</button>
    </div>
    <div class="modal-body">${contentHTML}</div>`;

  backdrop.appendChild(dialog);
  document.body.appendChild(backdrop);
  document.body.classList.add('modal-open');

  let closed = false;

  function close() {
    if (closed) return;
    closed = true;
    document.removeEventListener('keydown', onKeyDown, true);
    backdrop.remove();
    document.body.classList.remove('modal-open');
    activeModal = null;
    if (previousFocus && typeof previousFocus.focus === 'function') {
      previousFocus.focus();
    }
    if (typeof onClose === 'function') onClose();
  }

  function focusables() {
    return Array.from(
      dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.disabled);
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key !== 'Tab') return;
    const list = focusables();
    if (!list.length) return;
    const first = list[0];
    const last = list[list.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  document.addEventListener('keydown', onKeyDown, true);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });
  dialog.querySelector('.modal-close').addEventListener('click', close);
  dialog.querySelector('.modal-close').focus();

  activeModal = { close, root: dialog };
  return activeModal;
}
