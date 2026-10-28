// js/auth.js
// Funciones de autenticación y sesión mediante la API REST del VPS.
// Mantiene retrocompatibilidad de firmas con el frontend existente.

import { api, getToken, setToken, removeToken } from './api.js?v=12';

let _cachedUser = null;
let _userFetchPromise = null;

function clearCache() {
  _cachedUser = null;
  _userFetchPromise = null;
}

/**
 * Devuelve la sesión activa o null.
 * @returns {Promise<object|null>}
 */
export async function getSession() {
  const token = getToken();
  if (!token) {
    clearCache();
    return null;
  }

  const user = await getUser();
  if (!user) return null;

  return {
    access_token: token,
    user,
  };
}

/**
 * Devuelve el usuario autenticado o null.
 * @returns {Promise<object|null>}
 */
export async function getUser() {
  const token = getToken();
  if (!token) {
    clearCache();
    return null;
  }

  if (_cachedUser) return _cachedUser;
  if (_userFetchPromise) return _userFetchPromise;

  _userFetchPromise = (async () => {
    try {
      const data = await api.get('/auth/me');
      _cachedUser = data?.user || null;
      return _cachedUser;
    } catch (_) {
      clearCache();
      return null;
    } finally {
      _userFetchPromise = null;
    }
  })();

  return _userFetchPromise;
}

/**
 * Devuelve la versión actual de Términos y Condiciones.
 */
export async function getCurrentTermsVersion() {
  try {
    const data = await api.get('/terms/current');
    return data?.version || 'v1-2026-05';
  } catch (_) {
    return 'v1-2026-05';
  }
}

/**
 * Devuelve la última aceptación del usuario actual.
 */
export async function getLatestTermsAcceptance(_userId) {
  try {
    const data = await api.get('/terms/me');
    return data?.latest || null;
  } catch (_) {
    return null;
  }
}

/**
 * Registra la aceptación de términos del usuario actual.
 */
export async function acceptTerms(_userId, termsVersion) {
  try {
    await api.post('/terms/accept', { termsVersion });
    return { error: null };
  } catch (err) {
    return { error: err };
  }
}

/**
 * Devuelve el perfil (incluido is_admin) del usuario actual.
 */
export async function getProfile(userId) {
  const user = await getUser();
  if (!user || (userId && user.id !== userId)) return null;
  return {
    user_id: user.id,
    email: user.email,
    full_name: user.fullName || user.full_name || '',
    grado: user.grado || null,
    grupo: user.grupo || null,
    is_admin: Boolean(user.isAdmin ?? user.is_admin),
  };
}

/**
 * Registra un usuario nuevo y guarda el token recibido.
 * @param {string} email
 * @param {string} password
 * @param {string} [fullName]
 * @param {string} [termsVersion]
 * @param {{grado?:string, grupo?:string}} [extra]
 */
export async function signUp(email, password, fullName = '', termsVersion = '', extra = {}) {
  if (!fullName || fullName.trim().length < 2) {
    return { user: null, error: new Error('Nombre completo obligatorio.') };
  }

  const cleanGrado = extra?.grado ? String(extra.grado).trim() : '';
  const cleanGrupo = extra?.grupo ? String(extra.grupo).trim() : '';

  try {
    const data = await api.post('/auth/register', {
      email,
      password,
      fullName: fullName.trim(),
      grado: cleanGrado || undefined,
      grupo: cleanGrupo || undefined,
      termsVersion: termsVersion || undefined,
    });

    if (data.token) {
      setToken(data.token);
      _cachedUser = data.user;
    }

    return { user: data.user, error: null };
  } catch (err) {
    return { user: null, error: err };
  }
}

/**
 * Inicia sesión y almacena el token Bearer en almacenamiento local.
 */
export async function signIn(email, password) {
  try {
    const data = await api.post('/auth/login', { email, password });
    if (data.token) {
      setToken(data.token);
      _cachedUser = data.user;
    }
    return {
      user: data.user,
      session: { access_token: data.token, user: data.user },
      error: null,
    };
  } catch (err) {
    clearCache();
    return { user: null, session: null, error: err };
  }
}

/**
 * Cierra sesión revocando el token en el servidor y limpiando el estado local.
 */
export async function signOut() {
  try {
    await api.post('/auth/logout', {});
  } catch (_) {
    // Si la red falla, igualmente limpiamos las credenciales locales
  } finally {
    removeToken();
    clearCache();
  }
}

/**
 * Devuelve true si el usuario actual tiene rol de administrador.
 */
export async function isAdmin() {
  const user = await getUser();
  return Boolean(user && (user.isAdmin ?? user.is_admin));
}

/**
 * Devuelve true si el usuario actual ha aceptado la versión actual de Términos.
 */
export async function hasAcceptedCurrentTerms() {
  const user = await getUser();
  if (!user) return false;
  const current = await getCurrentTermsVersion();
  const last = await getLatestTermsAcceptance(user.id);
  return Boolean(last && last.termsVersion === current);
}

/**
 * Solicita el restablecimiento de contraseña para un correo.
 * @param {string} email
 * @returns {Promise<{ok:boolean, message?:string, error?:Error|null}>}
 */
export async function requestPasswordReset(email) {
  try {
    const data = await api.post('/auth/forgot-password', { email });
    return {
      ok: true,
      message: data?.message || 'Si el correo está registrado, recibirás un código y enlace de recuperación.',
      error: null,
    };
  } catch (err) {
    return { ok: false, error: err };
  }
}

/**
 * Restablece la contraseña utilizando un token o código.
 * @param {string} token
 * @param {string} password
 * @returns {Promise<{ok:boolean, message?:string, error?:Error|null}>}
 */
export async function resetPassword(token, password) {
  try {
    const data = await api.post('/auth/reset-password', { token, password });
    return {
      ok: true,
      message: data?.message || 'Contraseña restablecida exitosamente.',
      error: null,
    };
  } catch (err) {
    return { ok: false, error: err };
  }
}

/**
 * Permite al usuario autenticado cambiar su contraseña actual.
 * @param {string} currentPassword
 * @param {string} newPassword
 * @returns {Promise<{ok:boolean, message?:string, error?:Error|null}>}
 */
export async function changePassword(currentPassword, newPassword) {
  try {
    const data = await api.post('/auth/change-password', { currentPassword, newPassword });
    return {
      ok: true,
      message: data?.message || 'Contraseña actualizada correctamente.',
      error: null,
    };
  } catch (err) {
    return { ok: false, error: err };
  }
}

/**
 * Permite al usuario autenticado actualizar su propio nombre, grado y grupo.
 * @param {{fullName:string, grado?:string|null, grupo?:string|null}} payload
 * @returns {Promise<{ok:boolean, user?:object, error?:Error|null}>}
 */
export async function updateOwnProfile(payload) {
  try {
    const data = await api.patch('/auth/profile', payload);
    if (data?.user) {
      _cachedUser = data.user;
    }
    return {
      ok: true,
      user: data?.user || null,
      error: null,
    };
  } catch (err) {
    return { ok: false, error: err };
  }
}

