import { ArrowUpRight } from 'lucide-react'
import type { SocialLink as SocialLinkData } from '../../data/site'

/** One social link. A '#' url is a placeholder: it stays in the same tab and shows no external arrow. */
export default function SocialLink({ label, url, className = '' }: SocialLinkData & { className?: string }) {
  const external = /^https?:/.test(url)

  return (
    <a
      href={url}
      className={`group inline-flex items-center gap-1.5 ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {label}
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
