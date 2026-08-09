import { useCallback, useEffect, useRef, useState } from 'react'

export default function Carousel({ slides, autoPlayMs = 5000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)
  const reduceMotion = useRef(false)

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const count = slides.length
  const goTo = useCallback(
    (i) => setIndex(((i % count) + count) % count),
    [count],
  )
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused || reduceMotion.current || count <= 1) return undefined
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, autoPlayMs)
    return () => clearInterval(id)
  }, [paused, autoPlayMs, count])

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) {
      if (dx < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  if (!slides?.length) return null

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-brand-900 shadow-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Pharmaceutical imagery carousel"
    >
      <div
        className="flex transition-transform duration-500 ease-out carousel-slide"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <figure key={slide.id} className="relative min-w-full">
            <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent"
              aria-hidden="true"
            />
            {slide.caption && (
              <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white sm:bottom-6 sm:left-6 sm:text-base">
                {slide.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow transition hover:bg-white"
        aria-label="Previous slide"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow transition hover:bg-white"
        aria-label="Next slide"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2" role="tablist" aria-label="Slide indicators">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={[
              'h-2 rounded-full transition-all',
              i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80',
            ].join(' ')}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {count}
      </p>
    </div>
  )
}
