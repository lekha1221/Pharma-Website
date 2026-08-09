import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { company } from '../data/company'
import { services } from '../data/services'
import { heroImage } from '../data/carousel'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Services() {
  usePageTitle(
    'Services',
    `Pharmaceutical services from ${company.shortName} focused on quality, reliability, and healthcare partnerships.`,
  )

  return (
    <>
      <Hero
        compact
        title="Our Services"
        subtitle="We provide pharmaceutical solutions focused on quality, reliability, and the evolving needs of the healthcare ecosystem."
        image={{
          ...heroImage,
          src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80',
        }}
      />

      <section className="section-pad" aria-labelledby="services-list">
        <div className="page-container">
          <h2 id="services-list" className="sr-only">
            Service catalog
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
