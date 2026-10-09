import { site, phoneHref } from '../data/site'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import SocialLink from '../components/ui/SocialLink'

const linkClass =
  'font-display text-3xl tracking-tight underline decoration-line decoration-1 underline-offset-8 transition-colors duration-200 hover:decoration-ink sm:text-5xl'

export default function Contact() {
  const { eyebrow, title, description } = site.pages.contact

  return (
    <Container className="pt-16 sm:pt-24">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />

      <dl className="mt-16 divide-y divide-line border-y border-line">
        <div className="grid gap-3 py-8 sm:grid-cols-[12rem_1fr] sm:items-baseline">
          <dt className="text-xs font-medium uppercase tracking-eyebrow text-secondary">Email</dt>
          <dd>
            <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
              {site.email}
            </a>
          </dd>
        </div>

        <div className="grid gap-3 py-8 sm:grid-cols-[12rem_1fr] sm:items-baseline">
          <dt className="text-xs font-medium uppercase tracking-eyebrow text-secondary">Phone</dt>
          <dd>
            <a href={phoneHref} className={linkClass}>
              {site.phone}
            </a>
          </dd>
        </div>

        <div className="grid gap-3 py-8 sm:grid-cols-[12rem_1fr] sm:items-baseline">
          <dt className="text-xs font-medium uppercase tracking-eyebrow text-secondary">Based in</dt>
          <dd className="text-lg">{site.location}</dd>
        </div>

        <div className="grid gap-3 py-8 sm:grid-cols-[12rem_1fr] sm:items-baseline">
          <dt className="text-xs font-medium uppercase tracking-eyebrow text-secondary">Elsewhere</dt>
          <dd>
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
    </Container>
  )
}
