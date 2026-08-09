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
        'group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border border-brand-100/80 bg-white shadow-sm transition-all duration-300',
        'hover:-translate-y-0.5 hover:shadow-md',
      ].join(' ')}
    >
      <div className="relative mx-auto mt-6 h-28 w-28 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-brand-50 to-brand-100 ring-2 ring-brand-100 sm:h-32 sm:w-32">
        {image ? (
          <img
            src={image}
            alt={`${name}, ${role}`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#d5e9f7,transparent_50%),linear-gradient(160deg,#eef6fc,#d8f3db)]"
            aria-hidden="true"
          >
            <span className="text-2xl font-bold tracking-wide text-brand-700">
              {initials}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-4 text-center">
        <h3 className="text-base font-semibold text-ink sm:text-lg">{name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-600">{role}</p>
        <ul className="mt-3 flex flex-1 flex-col gap-1.5 text-left text-xs leading-relaxed text-muted sm:text-sm">
          {bio.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
