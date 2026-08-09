const icons = {
  flask: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M9 3h6M10 3v5.2L5.5 18a3 3 0 0 0 2.7 4.5h7.6A3 3 0 0 0 18.5 18L14 8.2V3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 14h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  beaker: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M8 3h8M9 3v5l-3.8 8.2A3 3 0 0 0 8 20.5h8a3 3 0 0 0 2.8-4.3L15 8V3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.5 13h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M3 7h11v9H3V7Zm11 3h4.2L21 13.2V16h-7v-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M8 12.5 10.5 15a2 2 0 0 0 2.8 0l4.2-4.2a1.5 1.5 0 0 0 0-2.1l-1.3-1.3a1.5 1.5 0 0 0-2.1 0L12 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 11.5 7 8l2.5 2.5M20.5 11.5 17 8l-1.5 1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 3 5 6v5.5c0 4.2 2.8 7.8 7 9 4.2-1.2 7-4.8 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12 1.8 1.8L15 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  quality: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  trust: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 4v16M4 12h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  future: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M4 16c3-6 6-9 8-9s5 3 8 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1.4" fill="currentColor" />
    </svg>
  ),
}

import { Link } from 'react-router-dom'

export default function ServiceCard({
  title,
  description,
  icon = 'flask',
  learnMoreTo,
  featured = false,
}) {
  return (
    <article
      className={[
        'group flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300',
        'hover:-translate-y-0.5 hover:shadow-md',
        featured ? 'border-brand-200 ring-1 ring-brand-100' : 'border-brand-100/80',
      ].join(' ')}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-health-50 group-hover:text-health-700">
        {icons[icon] || icons.flask}
      </div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      {learnMoreTo && (
        <Link
          to={learnMoreTo}
          className="mt-4 inline-flex text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          Learn More
          <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      )}
    </article>
  )
}
