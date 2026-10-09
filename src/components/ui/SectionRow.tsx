import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface SectionRowProps {
  eyebrow: string
  title: string
  linkLabel: string
  to: string
  children: ReactNode
}

/** A teaser row on Home: heading + "view all" link, then the content. */
export default function SectionRow({ eyebrow, title, linkLabel, to, children }: SectionRowProps) {
  return (
    <section aria-labelledby={`${to.slice(1)}-teaser`}>
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-eyebrow text-secondary">{eyebrow}</p>
          <h2
            id={`${to.slice(1)}-teaser`}
            className="font-display text-4xl leading-none tracking-tight sm:text-6xl"
          >
            {title}
          </h2>
        </div>
        <Link to={to} className="group inline-flex items-center gap-2 text-sm font-medium">
          {linkLabel}
          <ArrowRight
            size={16}
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
      <div className="mt-10 lg:mt-14">{children}</div>
    </section>
  )
}
