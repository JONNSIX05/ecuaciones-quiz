// js/practice-results.js
// Adaptador para practice_attempts (Práctica libre). Persiste en la API del VPS
// cuando hay sesión y siempre deja copia en localStorage como cache.

import { api } from './api.js';
import { getUser } from './auth.js';

const STORAGE_KEY = 'eqd:practice';

function saveLocal(record) {
  try {
    const list = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    list.push(record);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (_) {
    // ignorar
  }
}

/**
 * Guarda un intento de práctica libre: API (si hay sesión) + localStorage.
 * @param {{input:string,topic:string,correct:boolean,date?:number}} record
 * @returns {Promise<{source:'cloud'|'local'}>}
 */
export async function savePracticeAttempt(record) {
  const fullRecord = { ...record, date: record.date || Date.now() };

  try {
    const user = await getUser();
    if (user) {
      await api.post('/attempts/practice', {
        input: fullRecord.input,
        topic: fullRecord.topic || '',
        correct: Boolean(fullRecord.correct),
      });
      saveLocal(fullRecord);
      return { source: 'cloud' };
    }
  } catch (_) {
    // ignorar y caer a local
  }

  saveLocal(fullRecord);
  return { source: 'local' };
}
