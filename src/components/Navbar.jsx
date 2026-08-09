import { useEffect, useId, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { navigation } from '../data/company'
import { isAuthenticated, logout } from '../auth/authService'
import Logo from './Logo'
import Button from './Button'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [authed, setAuthed] = useState(() => isAuthenticated())
  const navigate = useNavigate()
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sync = () => setAuthed(isAuthenticated())
    window.addEventListener('storage', sync)
    window.addEventListener('focus', sync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener('focus', sync)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleLogout = () => {
    logout()
    setAuthed(false)
    setMenuOpen(false)
    navigate('/', { replace: true })
  }

  const linkClass = ({ isActive }) =>
    [
      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
      isActive
        ? 'bg-brand-50 text-brand-700'
        : 'text-ink/80 hover:bg-brand-50/70 hover:text-brand-700',
    ].join(' ')

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-brand-100/80 bg-white/90 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white/80 backdrop-blur-sm',
      ].join(' ')}
    >
      <nav className="page-container flex h-16 items-center justify-between gap-3 sm:h-[4.25rem]" aria-label="Primary">
        <Logo to="/" size="md" />

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} end={item.path === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          {authed ? (
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button to="/login" variant="ghost" size="sm">
                Login
              </Button>
              <Button to="/signup" size="sm">
                Sign up
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-700 ring-1 ring-brand-100 md:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={[
                'h-0.5 w-full rounded bg-current transition-transform',
                menuOpen ? 'translate-y-2 rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'h-0.5 w-full rounded bg-current transition-opacity',
                menuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'h-0.5 w-full rounded bg-current transition-transform',
                menuOpen ? '-translate-y-2 -rotate-45' : '',
              ].join(' ')}
            />
          </span>
        </button>
      </nav>

      <div
        id={menuId}
        className={[
          'fixed inset-x-0 top-16 bottom-0 z-40 bg-white transition-transform duration-300 ease-out md:hidden',
          menuOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <ul className="flex h-full flex-col gap-1 overflow-y-auto p-4">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  [
                    'block rounded-xl px-4 py-3 text-base font-medium',
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink hover:bg-brand-50',
                  ].join(' ')
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-4 space-y-2 border-t border-brand-100 pt-4">
            {authed ? (
              <Button className="w-full" variant="secondary" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button
                  className="w-full"
                  variant="secondary"
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Button>
                <Button className="w-full" to="/signup" onClick={() => setMenuOpen(false)}>
                  Sign up
                </Button>
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}
