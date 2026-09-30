// js/supabase.js
// Cliente Supabase compartido. Usa el global `window.supabase` que carga el CDN.
//
// SUPABASE_URL y SUPABASE_ANON_KEY son las credenciales del proyecto
// vaxpiyhwrfzjukevzslo. La anon key es PUBLICA (pública por diseño), la
// seguridad real viene de las policies RLS en la base de datos.

const SUPABASE_URL = 'https://vaxpiyhwrfzjukevzslo.supabase.co';
const SUPABASE_ANON_KEY =
  'sb_publishable_JHC5u4DBYAM16R2srAtSzA_3KhZyqL5';

let _client = null;

/**
 * Devuelve el cliente Supabase (lo crea en la primera llamada).
 * @returns {object|null}
 */
export function getSupabase() {
  if (_client) return _client;
  if (typeof window === 'undefined' || !window.supabase) return null;
  _client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
    },
  });
  return _client;
}

/**
 * Indica si la librería de Supabase cargó.
 * @returns {boolean}
 */
export function isSupabaseReady() {
  return typeof window !== 'undefined' && !!window.supabase;
}
