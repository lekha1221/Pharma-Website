export default function LeadershipCard({
  name,
  role,
  image,
  initials,
  bio = [],
}) {
  return (
    <article
      className={[
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100/80 bg-white shadow-sm transition-all duration-300',
        'hover:-translate-y-0.5 hover:shadow-md',
      ].join(' ')}
    >
      <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100">
        {image ? (
          <img
            src={image}
            alt={`${name}, ${role}`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#d5e9f7,transparent_50%),linear-gradient(160deg,#eef6fc,#d8f3db)]"
            aria-hidden="true"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 text-2xl font-bold tracking-wide text-brand-700 shadow-sm ring-1 ring-brand-100">
              {initials}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 text-center">
        <h3 className="text-base font-semibold text-ink sm:text-lg">{name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-600">{role}</p>
        {bio.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-left text-xs leading-relaxed text-muted sm:text-sm">
            {bio.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
