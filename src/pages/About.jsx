import Hero from '../components/Hero'
import LeadershipCard from '../components/LeadershipCard'
import { aboutContent, company } from '../data/company'
import { leadership } from '../data/leadership'
import { usePageTitle } from '../hooks/usePageTitle'

export default function About() {
  usePageTitle(
    'About Us',
    `Learn about ${company.name} — vision, mission, and leadership.`,
  )

  return (
    <>
      <Hero
        compact
        title="About M PRIX PHARMA"
        subtitle={aboutContent.intro}
        image={{
          src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
          alt: 'Healthcare professional representing trust and care',
        }}
      />

      <section className="section-pad" aria-labelledby="vision-mission">
        <div className="page-container grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 id="vision-mission" className="font-display text-xl font-semibold text-brand-800 sm:text-2xl">
              Our Vision
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {aboutContent.vision}
            </p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-xl font-semibold text-brand-800 sm:text-2xl">
              Our Mission
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {aboutContent.mission}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white section-pad" aria-labelledby="leadership-heading">
        <div className="page-container">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2
              id="leadership-heading"
              className="font-display text-2xl font-semibold tracking-wide text-brand-800 sm:text-3xl"
            >
              Our Leadership
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              The team guiding {company.shortName} with professionalism and purpose.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person) => (
              <LeadershipCard
                key={person.id}
                name={person.name}
                role={person.role}
                image={person.image}
                initials={person.initials}
                bio={person.bio}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
