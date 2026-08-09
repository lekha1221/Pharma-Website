import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { company } from '../data/company'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Contact() {
  usePageTitle(
    'Contact Us',
    `Get in touch with ${company.name} for enquiries and partnerships.`,
  )

  return (
    <>
      <Hero
        compact
        title="Let's Connect"
        subtitle="Have a question, partnership opportunity, or business enquiry? We'd be happy to hear from you."
        image={{
          src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
          alt: 'Professional healthcare environment for business contact',
        }}
      />

      <section className="section-pad" aria-labelledby="contact-details">
        <div className="page-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="contact-details" className="font-display text-2xl font-semibold text-brand-800">
              Contact Information
            </h2>
            <p className="mt-2 text-sm text-muted">{company.name}</p>

            <ul className="mt-6 space-y-4">
              <li className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block text-base font-medium text-ink hover:text-brand-700"
                >
                  {company.email}
                </a>
              </li>
              <li className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                  Phone
                </p>
                <p className="mt-1 text-base font-medium text-ink">{company.phone}</p>
              </li>
              <li className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                  Address
                </p>
                <p className="mt-1 text-base font-medium text-ink">{company.address}</p>
              </li>
            </ul>

            <p className="mt-4 text-xs leading-relaxed text-muted">{company.contactNote}</p>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-xl font-semibold text-brand-800 sm:text-2xl">
              Send a Message
            </h2>
            <p className="mt-1 mb-6 text-sm text-muted">
              Fields are validated on this page. Messages are not sent to a server yet.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
