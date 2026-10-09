import { site, phoneHref } from '../data/site'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import SocialLink from '../components/ui/SocialLink'
import ContactForm from '../components/contact/ContactForm'

const linkClass =
  'break-all font-display text-3xl leading-tight tracking-tight underline decoration-line decoration-1 underline-offset-8 transition-colors duration-200 hover:decoration-ink sm:text-4xl'

const labelClass = 'text-xs font-medium uppercase tracking-eyebrow text-secondary'

export default function Contact() {
  const { eyebrow, title, description } = site.pages.contact

  return (
    <Container className="pt-16 sm:pt-24">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-24">
        <dl className="space-y-10">
          <div>
            <dt className={labelClass}>Email</dt>
            <dd className="mt-3">
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className={labelClass}>Phone</dt>
            <dd className="mt-3">
              <a href={phoneHref} className={linkClass}>
                {site.phone}
              </a>
            </dd>
          </div>

          <div>
            <dt className={labelClass}>Based in</dt>
            <dd className="mt-3 text-lg">{site.location}</dd>
          </div>

          <div>
            <dt className={labelClass}>Elsewhere</dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lg">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <SocialLink {...social} />
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <ContactForm />
      </div>
    </Container>
  )
}
