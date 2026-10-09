import type { ReactNode } from 'react'

/** Small label. Uses the brown secondary token for text, never a large fill. */
export default function Tag({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium tracking-tight text-secondary ${className}`}
    >
      {children}
    </span>
  )
}
