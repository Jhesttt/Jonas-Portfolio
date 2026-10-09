export const ALL = 'All'

interface CategoryFilterProps {
  categories: string[]
  active: string
  counts: Record<string, number>
  onChange: (category: string) => void
}

/** Filter pills. Amber marks the active pill (as a fill with dark text, so contrast holds). */
export default function CategoryFilter({ categories, active, counts, onChange }: CategoryFilterProps) {
  return (
    <div role="group" aria-label="Filter photographs by category" className="flex flex-wrap gap-2">
      {[ALL, ...categories].map((category) => {
        const isActive = category === active
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(category)}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium tracking-tight transition-colors duration-200 ${
              isActive
                ? 'border-accent bg-accent text-accent-contrast'
                : 'border-line text-ink hover:border-ink'
            }`}
          >
            {category}
            <span className={`text-xs tabular-nums ${isActive ? 'text-accent-contrast/70' : 'text-muted'}`}>
              {counts[category] ?? 0}
            </span>
          </button>
        )
      })}
    </div>
  )
}
