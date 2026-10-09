import type { ReactNode } from 'react'

/** Shared page gutter + max width so every section lines up with the nav. */
export default function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-page px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
}
