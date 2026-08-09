import Hero from '../components/Hero'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import ServiceCard from '../components/ServiceCard'
import { company, highlights, whyChoose } from '../data/company'
import { services, servicePreviewIds } from '../data/services'
import { carouselSlides, heroImage, whyImage } from '../data/carousel'
import { usePageTitle } from '../hooks/usePageTitle'

const highlightIcons = {
  quality: 'quality',
  trust: 'trust',
  healthcare: 'healthcare',
  future: 'future',
}

export default function Home() {
  usePageTitle(
    'Home',
    `${company.name} is committed to delivering quality pharmaceutical solutions with reliability and care.`,
  )

  const previewServices = services.filter((s) => servicePreviewIds.includes(s.id))

  return (
    <>
      <Hero
        title={company.tagline}
        subtitle={`${company.name} is committed to delivering quality pharmaceutical solutions with a focus on reliability, innovation, and better healthcare outcomes.`}
        image={heroImage}
        actions={[
          { label: 'Explore Our Services', to: '/services', variant: 'primary' },
          { label: 'Contact Us', to: '/contact', variant: 'outline' },
          { label: 'Login', to: '/login', variant: 'outline' },
          { label: 'Sign up', to: '/signup', variant: 'secondary' },
        ]}
      />

      <section className="section-pad" aria-labelledby="highlights-heading">
        <div className="page-container">
          <div className="mb-10 max-w-2xl">
            <h2 id="highlights-heading" className="font-display text-2xl font-semibold text-brand-800 sm:text-3xl">
              Built on Quality & Trust
            </h2>
            <p className="mt-2 text-muted">
              What defines how we work with healthcare partners and communities.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <ServiceCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={highlightIcons[item.id] || 'quality'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad" aria-labelledby="carousel-heading">
        <div className="page-container">
          <div className="mb-8 max-w-2xl">
            <h2 id="carousel-heading" className="font-display text-2xl font-semibold text-brand-800 sm:text-3xl">
              A Healthcare Mindset
            </h2>
            <p className="mt-2 text-sm text-muted">
              Visual themes representing research, care, and modern pharmaceutical practice.
            </p>
          </div>
          <Carousel slides={carouselSlides} />
        </div>
      </section>

      <section className="section-pad" aria-labelledby="what-we-do">
        <div className="page-container">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 id="what-we-do" className="font-display text-2xl font-semibold text-brand-800 sm:text-3xl">
                What We Do
              </h2>
              <p className="mt-2 text-muted">
                Pharmaceutical solutions focused on quality, reliability, and partnership.
              </p>
            </div>
            <Button to="/services" variant="secondary" size="sm">
              View all services
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {previewServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.preview}
                icon={service.icon}
                learnMoreTo="/services"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad" aria-labelledby="why-mprix">
        <div className="page-container grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src={whyImage.src}
              alt={whyImage.alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 id="why-mprix" className="font-display text-2xl font-semibold text-brand-800 sm:text-3xl">
              Why Choose M PRIX?
            </h2>
            <p className="mt-3 text-muted">
              A professional, quality-first approach to pharmaceutical collaboration.
            </p>
            <ul className="mt-6 space-y-3">
              {whyChoose.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm sm:text-base">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-health-100 text-health-700"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-12 text-center text-white sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-health-500/20 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-accent-500/15 blur-2xl"
              aria-hidden="true"
            />
            <h2 className="relative font-display text-2xl font-semibold text-balance sm:text-3xl">
              Let&apos;s Build Better Healthcare Solutions Together.
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
              Connect with {company.name} to explore opportunities, services, and partnerships.
            </p>
            <div className="relative mt-8">
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-brand-700 hover:bg-brand-50"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
