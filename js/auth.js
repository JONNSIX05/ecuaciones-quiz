// js/auth.js
// Funciones de autenticación: signUp, signIn, signOut, getSession, isAdmin.

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
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.auth.getUser();
  return data.user ?? null;
}

/**
 * Registra un usuario nuevo.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{user:object|null, error:Error|null}>}
 */
export async function signUp(email, password) {
  const sb = getSupabase();
  if (!sb) return { user: null, error: new Error('SUPABASE_NOT_READY') };
  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) return { user: null, error };
  return { user: data.user, error: null };
}

/**
 * Inicia sesión.
 * @param {string} email
 * @param {string} password
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
 * @returns {Promise<boolean>}
 */
export async function isAdmin() {
  const sb = getSupabase();
  if (!sb) return false;
  const user = await getUser();
  if (!user) return false;
  const { data, error } = await sb
    .from('profiles')
    .select('is_admin')
    .eq('user_id', user.id)
    .maybeSingle();
  if (error) return false;
  return Boolean(data?.is_admin);
}
