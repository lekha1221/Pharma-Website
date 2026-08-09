import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { company } from '../data/company'
import { loginVisual } from '../data/carousel'
import { isAuthenticated, signup } from '../auth/authService'
import { usePageTitle } from '../hooks/usePageTitle'

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-brand-100 bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100'

export default function Signup() {
  usePageTitle('Sign up', `Create a demo account for ${company.shortName}.`)

  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [loading, setLoading] = useState(false)

  if (isAuthenticated()) {
    return <Navigate to="/" replace />
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const next = {}
    if (!fullName.trim()) next.fullName = 'Full name is required.'
    if (!email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Enter a valid email address.'
    }
    if (!password) next.password = 'Password is required.'
    else if (password.length < 6) next.password = 'Password must be at least 6 characters.'
    setFieldErrors(next)
    if (Object.keys(next).length) return

    setLoading(true)
    const result = await signup({ fullName, email, password })
    setLoading(false)

    if (!result.ok) {
      setError(result.error)
      return
    }

    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-screen bg-surface lg:grid lg:grid-cols-2">
      <aside className="relative hidden min-h-screen overflow-hidden lg:block">
        <img
          src={loginVisual.src}
          alt={loginVisual.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-900/85 via-brand-800/70 to-health-700/40"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
          <div className="inline-flex w-fit rounded-2xl bg-white/95 px-4 py-3 shadow-sm">
            <Logo size="lg" />
          </div>
          <div>
            <p className="font-display text-3xl font-semibold leading-snug text-balance">
              Join {company.shortName}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
              Create an optional demo account. Browsing the website never requires sign-up.
            </p>
          </div>
        </div>
      </aside>

      <div className="flex min-h-screen flex-col justify-center px-4 py-12 sm:px-8">
        <div className="mx-auto w-full max-w-md fade-up">
          <div className="mb-8 flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link to="/" className="mb-6">
              <Logo size="lg" />
            </Link>
            <h1 className="font-display text-3xl font-semibold text-brand-800">Sign up</h1>
            <p className="mt-2 text-sm text-muted">
              Demo registration only — stored in your browser, not a real server.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-brand-100/80 bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <label htmlFor="fullName" className="text-sm font-medium text-ink">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={fieldClass}
                aria-invalid={Boolean(fieldErrors.fullName)}
              />
              {fieldErrors.fullName && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.fullName}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
                aria-invalid={Boolean(fieldErrors.email)}
              />
              {fieldErrors.email && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="text-sm font-medium text-ink">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={fieldClass}
                aria-invalid={Boolean(fieldErrors.password)}
              />
              {fieldErrors.password && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.password}
                </p>
              )}
            </div>

            {error && (
              <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                {error}
              </p>
            )}

            <Button type="submit" className="mt-6 w-full" disabled={loading}>
              {loading ? 'Creating account…' : 'Create account'}
            </Button>

            <p className="mt-4 text-center text-sm text-muted">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-brand-600 hover:text-brand-700">
                Login
              </Link>
              {' · '}
              <Link to="/" className="font-semibold text-brand-600 hover:text-brand-700">
                Back to home
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
