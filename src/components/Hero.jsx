import Button from './Button'

export default function Hero({
  title,
  subtitle,
  image,
  actions,
  compact = false,
  align = 'left',
}) {
  return (
    <section
      className={[
        'relative isolate overflow-hidden',
        compact ? 'min-h-[40vh] sm:min-h-[44vh]' : 'min-h-[72vh] sm:min-h-[78vh]',
      ].join(' ')}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/75 to-brand-700/45"
        aria-hidden="true"
      />
      <div
        className={[
          'page-container relative flex h-full items-center',
          compact ? 'py-16 sm:py-20' : 'py-20 sm:py-28',
        ].join(' ')}
      >
        <div
          className={[
            'max-w-2xl fade-up',
            align === 'center' ? 'mx-auto text-center' : '',
          ].join(' ')}
        >
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              {subtitle}
            </p>
          )}
          {actions && actions.length > 0 && (
            <div
              className={[
                'mt-8 flex flex-wrap gap-3',
                align === 'center' ? 'justify-center' : '',
              ].join(' ')}
            >
              {actions.map((action) => (
                <Button
                  key={action.label}
                  to={action.to}
                  variant={action.variant || 'primary'}
                  size="lg"
                  className={
                    action.variant === 'outline'
                      ? ''
                      : action.variant === 'secondary'
                        ? ''
                        : 'bg-health-500 hover:bg-health-600 focus-visible:ring-health-500'
                  }
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
