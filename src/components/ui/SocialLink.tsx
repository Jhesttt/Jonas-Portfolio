import { ArrowUpRight } from 'lucide-react'
import type { SocialLink as SocialLinkData } from '../../data/site'

/**
 * One social entry. Renders a link when `url` is set, with `handle` shown beside
 * the label if present; with only a `handle` (e.g. a Discord username) it renders text.
 */
export default function SocialLink({ label, url, handle, className = '' }: SocialLinkData & { className?: string }) {
  if (!url) {
    return (
      <span className={`inline-flex items-baseline gap-2 ${className}`}>
        {label}
        {handle && <span className="text-muted">{handle}</span>}
      </span>
    )
  }

  // '#' is a placeholder: keep it in the same tab and skip the external arrow.
  const external = /^https?:/.test(url)

  return (
    <a
      href={url}
      className={`group inline-flex items-center gap-1.5 ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {label}
      {handle && <span className="text-muted">{handle}</span>}
      {external && (
        <ArrowUpRight
          size={16}
          aria-hidden
          className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </a>
  )
}
