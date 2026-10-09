import { ArrowUpRight } from 'lucide-react'
import { site } from '../../data/site'

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr] lg:px-12">
        <div>
          <p className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {site.footerCta}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block text-base text-muted underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-ink"
          >
            {site.email}
          </a>
        </div>

        <div className="md:justify-self-end">
          <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-secondary">
            Elsewhere
          </p>
          <ul className="space-y-3">
            {site.socials.map(({ label, url }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-1.5 text-base text-ink"
                >
                  {label}
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-page px-5 py-6 text-sm text-muted sm:px-8 lg:px-12">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
