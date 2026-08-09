/**
 * Demo frontend auth only — not production security.
 * Optional for account-like UI; the public site does not require login.
 * Replace this module with a real API client later.
 */

const AUTH_KEY = 'mprix_auth'
const USERS_KEY = 'mprix_users'
const DEMO_EMAIL = 'demo@mprixpharma.com'
const DEMO_PASSWORD = 'Demo@123'

export const demoCredentials = {
  email: DEMO_EMAIL,
  password: DEMO_PASSWORD,
}

function readSession() {
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    if (!raw) return []
    const list = JSON.parse(raw)
    return Array.isArray(list) ? list : []
  } catch {
    return []
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function setSession(email) {
  const session = {
    authenticated: true,
    email,
    loggedInAt: new Date().toISOString(),
  }
  localStorage.setItem(AUTH_KEY, JSON.stringify(session))
  return session
}

export function isAuthenticated() {
  const session = readSession()
  return Boolean(session?.authenticated)
}

export function getSession() {
  return readSession()
}

/**
 * Client-side demo login. Returns { ok, error? }.
 * Future: await api.post('/auth/login', credentials)
 */
export async function login({ email, password }) {
  await Promise.resolve()

  const normalizedEmail = String(email || '').trim().toLowerCase()
  const normalizedPassword = String(password || '')

  if (!normalizedEmail || !normalizedPassword) {
    return { ok: false, error: 'Email and password are required.' }
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)
  if (!emailOk) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  if (normalizedPassword.length < 6) {
    return { ok: false, error: 'Password must be at least 6 characters.' }
  }

  const isDemo =
    normalizedEmail === DEMO_EMAIL.toLowerCase() &&
    normalizedPassword === DEMO_PASSWORD

  const users = readUsers()
  const registered = users.find(
    (u) => u.email === normalizedEmail && u.password === normalizedPassword,
  )

  if (!isDemo && !registered) {
    return {
      ok: false,
      error: 'Invalid email or password. Try demo credentials or sign up first.',
    }
  }

  const session = setSession(normalizedEmail)
  return { ok: true, session }
}

/**
 * Client-side demo signup. Returns { ok, error? }.
 * Future: await api.post('/auth/signup', payload)
 */
export async function signup({ fullName, email, password }) {
  await Promise.resolve()

  const name = String(fullName || '').trim()
  const normalizedEmail = String(email || '').trim().toLowerCase()
  const normalizedPassword = String(password || '')

  if (!name) return { ok: false, error: 'Full name is required.' }
  if (!normalizedEmail) return { ok: false, error: 'Email is required.' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }
  if (normalizedPassword.length < 6) {
    return { ok: false, error: 'Password must be at least 6 characters.' }
  }

  if (normalizedEmail === DEMO_EMAIL.toLowerCase()) {
    return { ok: false, error: 'This email is reserved for the demo account. Please log in instead.' }
  }

  const users = readUsers()
  if (users.some((u) => u.email === normalizedEmail)) {
    return { ok: false, error: 'An account with this email already exists. Please log in.' }
  }

  users.push({
    name,
    email: normalizedEmail,
    // ponytail: plaintext local demo only — replace with real auth backend before production
    password: normalizedPassword,
    createdAt: new Date().toISOString(),
  })
  writeUsers(users)

  const session = setSession(normalizedEmail)
  return { ok: true, session }
}

export function logout() {
  localStorage.removeItem(AUTH_KEY)
}
