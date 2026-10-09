import type { ReactNode } from 'react'

interface SectionHeadingProps {
  /** Small label above the title, e.g. "Photography". */
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  /** Use `h1` once per page; `h2` for sections. */
  as?: 'h1' | 'h2'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = 'h2',
  className = '',
}: SectionHeadingProps) {
  return (
    <header className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-secondary">
          {eyebrow}
        </p>
      )}
      <Heading className="font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </header>
  )
}
