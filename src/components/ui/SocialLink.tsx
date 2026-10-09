import { ArrowUpRight } from 'lucide-react'
import type { SocialLink as SocialLinkData } from '../../data/site'

/** One social link. Always opens in a new tab. */
export default function SocialLink({ label, url, className = '' }: SocialLinkData & { className?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className={`group inline-flex items-center gap-1.5 ${className}`}
    >
      {label}
      <ArrowUpRight
        size={16}
        aria-hidden
        className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  )
}
