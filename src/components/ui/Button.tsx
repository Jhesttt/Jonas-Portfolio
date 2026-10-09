import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

type Variant = 'primary' | 'ghost'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-[transform,background-color,border-color] duration-200 ease-out active:scale-[0.98]'

const variants: Record<Variant, string> = {
  // Amber is a fill only: it never carries text on its own against the page background.
  primary: 'bg-accent text-accent-contrast hover:brightness-95',
  ghost: 'border border-line text-ink hover:border-ink',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined }
type RouterLinkProps = CommonProps & { to: string; href?: undefined }
type AnchorProps = CommonProps & { href: string; to?: undefined } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

/** One component for buttons, internal links (`to`) and external/mailto links (`href`). */
export default function Button(props: ButtonProps | RouterLinkProps | AnchorProps) {
  const { variant = 'primary', className = '', children } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if (props.href !== undefined) {
    const { href, variant: _v, className: _c, children: _ch, to: _t, ...rest } = props
    const external = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...rest}
      >
        {children}
        {external && <ArrowUpRight size={16} aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </a>
    )
  }

  const { variant: _v, className: _c, children: _ch, to: _t, href: _h, ...rest } = props
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
