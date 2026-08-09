import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { company } from '../data/company'

const sizeMap = {
  sm: 'h-9 w-auto',
  md: 'h-11 w-auto sm:h-12',
  lg: 'h-16 w-auto sm:h-20',
  xl: 'h-24 w-auto sm:h-28',
}

export default function Logo({ size = 'md', to, className = '', showText = false }) {
  const img = (
    <img
      src={logo}
      alt={`${company.name} logo`}
      className={`${sizeMap[size] || sizeMap.md} object-contain ${className}`}
      width={160}
      height={96}
      decoding="async"
    />
  )

  if (to) {
    return (
      <Link
        to={to}
        className="inline-flex items-center gap-3 rounded-md focus-visible:outline-offset-4"
        aria-label={`${company.shortName} home`}
      >
        {img}
        {showText && (
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-sm font-bold tracking-wide text-brand-700">
              M PRIX PHARMA
            </span>
            <span className="block text-[10px] font-medium tracking-[0.18em] text-brand-500">
              PVT. LTD.
            </span>
          </span>
        )}
      </Link>
    )
  }

  return img
}
