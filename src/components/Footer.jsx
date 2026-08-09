import { Link } from 'react-router-dom'
import { company, navigation } from '../data/company'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="page-container section-pad !py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {company.footerTagline}
            </p>
            <p className="mt-2 text-sm font-medium text-brand-700">{company.name}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Navigate
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-2">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted transition-colors hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-50 pt-6 text-sm text-muted">
          © 2026 {company.name} All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
