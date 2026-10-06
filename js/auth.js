// js/auth.js
// Funciones de autenticación: signUp, signIn, signOut, getSession, isAdmin.
// Incluye helpers de aceptación de Términos y Condiciones.

import { getSupabase } from './supabase.js';

/**
 * Devuelve la sesión activa o null.
 * @returns {Promise<object|null>}
 */
export async function getSession() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.auth.getSession();
  return data.session ?? null;
}

/**
 * Devuelve el usuario autenticado o null.
 * @returns {Promise<object|null>}
 */
export async function getUser() {
  // No llamar a sb.auth.getUser() — ese endpoint cuelga cuando no hay sesión
  // y bloquea la UI. En su lugar leemos la sesión local (instantáneo).
  // Si necesitamos un usuario fresco (post-signIn), usamos getSession().user.
  const session = await getSession();
  return session?.user ?? null;
}

/**
 * Devuelve la versión actual de Términos y Condiciones.
 * (Lee de la función SQL creada en la migración.)
 */
export async function getCurrentTermsVersion() {
  const sb = getSupabase();
  if (!sb) return 'v1-2026-05';
  try {
    const { data } = await sb.rpc('current_terms_version');
    if (data) return data;
  } catch (_) {
    // Fallback: usar el valor por defecto de la migración.
  }
  return 'v1-2026-05';
}

/**
 * Devuelve la última aceptación del usuario actual.
 */
export async function getLatestTermsAcceptance(userId) {
  const sb = getSupabase();
  if (!sb || !userId) return null;
  const { data } = await sb
    .from('terms_acceptance')
    .select('terms_version, accepted_at')
    .eq('user_id', userId)
    .order('accepted_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  return data ?? null;
}

/**
 * Registra la aceptación de términos del usuario.
 */
export async function acceptTerms(userId, termsVersion) {
  const sb = getSupabase();
  if (!sb || !userId) return { error: new Error('NO_PARAMS') };
  const { error } = await sb
    .from('terms_acceptance')
    .insert({ user_id: userId, terms_version: termsVersion });
  return { error };
}

/**
 * Devuelve el perfil (incluido is_admin) del usuario actual.
 */
export async function getProfile(userId) {
  const sb = getSupabase();
  if (!sb || !userId) return null;
  const { data, error } = await sb
    .from('profiles')
    .select('user_id, email, full_name, is_admin, created_at')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) return null;
  return data ?? null;
}

/**
 * Registra un usuario nuevo y lo da de alta en profiles.
 * @param {string} email
 * @param {string} password
 * @param {string} [fullName]
 * @param {string} [termsVersion]
 */
export async function signUp(email, password, fullName = '', termsVersion = '') {
  const sb = getSupabase();
  if (!sb) return { user: null, error: new Error('SUPABASE_NOT_READY') };
  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) return { user: null, error };

  // Insertar fila en profiles + (opcional) terms_acceptance.
  if (data.user) {
    try {
      await sb.from('profiles').upsert({
        user_id: data.user.id,
        email,
        full_name: fullName || null,
        is_admin: false,
      });
      if (termsVersion) {
        await sb
          .from('terms_acceptance')
          .insert({ user_id: data.user.id, terms_version: termsVersion });
      }
    } catch (_) {
      // Las inserciones son best-effort; el login funciona sin ellas.
    }
  }
  return { user: data.user, error: null };
}

/**
 * Inicia sesión.
 */
export async function signIn(email, password) {
  const sb = getSupabase();
  if (!sb) return { user: null, error: new Error('SUPABASE_NOT_READY') };
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) return { user: null, error };
  return { user: data.user, session: data.session, error: null };
}

/**
 * Cierra sesión.
 */
export async function signOut() {
  const sb = getSupabase();
  if (!sb) return;
  await sb.auth.signOut();
}

/**
 * Devuelve true si el usuario actual tiene is_admin = true en `profiles`.
 */
export async function isAdmin() {
  const sb = getSupabase();
  if (!sb) return false;
  const user = await getUser();
  if (!user) return false;
  const { data } = await sb
    .from('profiles')
    .select('is_admin')
    .eq('user_id', user.id)
    .maybeSingle();
  if (error) return false;
  return Boolean(data?.is_admin);
}

/**
 * Devuelve true si el usuario actual ha aceptado la versión actual de Términos.
 */
export async function hasAcceptedCurrentTerms() {
  const sb = getSupabase();
  if (!sb) return false;
  const user = await getUser();
  if (!user) return false;
  const current = await getCurrentTermsVersion();
  const last = await getLatestTermsAcceptance(user.id);
  return Boolean(last && last.terms_version === current);
}