// js/practice-results.js
// Adaptador para practice_attempts (Práctica libre). Persiste en Supabase cuando
// hay sesión y siempre deja copia en localStorage como cache.

import { getSupabase } from './supabase.js';
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
 * Guarda un intento de práctica libre: Supabase (si hay sesión) + localStorage.
 * @param {{input:string,topic:string,correct:boolean,date?:number}} record
 * @returns {Promise<{source:'cloud'|'local'}>}
 */
export async function savePracticeAttempt(record) {
  const fullRecord = { ...record, date: record.date || Date.now() };

  const sb = getSupabase();
  if (sb) {
    try {
      const user = await getUser();
      if (user) {
        const { error } = await sb.from('practice_attempts').insert({
          user_id: user.id,
          input: fullRecord.input,
          topic: fullRecord.topic,
          correct: fullRecord.correct,
        });
        if (!error) {
          saveLocal(fullRecord);
          return { source: 'cloud' };
        }
      }
    } catch (_) {
      // ignorar
    }
  }
  saveLocal(fullRecord);
  return { source: 'local' };
}
