import type { Credit } from '../../data/site'

/** A supporting credit: deliberately quieter than HighlightCard (no fill, no amber, smaller type). */
export default function CreditCard({ title, organization, period, description }: Credit) {
  return (
    <aside aria-label={`${title}, ${organization}`} className="rounded-2xl border border-line p-6 sm:p-7">
      <p className="text-xs font-medium uppercase tracking-eyebrow text-secondary">{period}</p>
      <h3 className="mt-3 font-display text-3xl leading-none tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-muted">{organization}</p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{description}</p>
    </aside>
  )
}
