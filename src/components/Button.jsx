import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-brand-600 text-white shadow-sm hover:bg-brand-700 focus-visible:ring-brand-600',
  secondary:
    'bg-white text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50 focus-visible:ring-brand-600',
  ghost:
    'bg-transparent text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-600',
  outline:
    'bg-transparent text-white ring-1 ring-white/70 hover:bg-white/10 focus-visible:ring-white',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-base',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  type = 'button',
  disabled,
  onClick,
  ...rest
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  ].join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
