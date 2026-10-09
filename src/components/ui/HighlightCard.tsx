import type { Highlight } from '../../data/site'
import Tag from './Tag'

/** A single standout credential. Text and badge only; amber is limited to the period badge. */
export default function HighlightCard({ eyebrow, title, subtitle, period, description, roles }: Highlight) {
  return (
    <aside
      aria-label={`${eyebrow}: ${title}`}
      className="rounded-3xl border border-line bg-elevated p-8 sm:p-10 lg:p-12"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-tight text-accent-contrast">
          {period}
        </span>
        <p className="text-xs font-medium uppercase tracking-eyebrow text-secondary">{eyebrow}</p>
      </div>

      <h2 className="mt-6 font-display text-5xl leading-none tracking-tight sm:text-6xl">{title}</h2>
      <p className="mt-3 text-lg text-muted">{subtitle}</p>

      <p className="mt-6 max-w-xl text-base leading-relaxed">{description}</p>

      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Roles">
        {roles.map((role) => (
          <li key={role}>
            <Tag>{role}</Tag>
          </li>
        ))}
      </ul>
    </aside>
  )
}
