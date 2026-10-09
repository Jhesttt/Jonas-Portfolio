import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site } from '../../data/site'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/photos', label: 'Photos' },
  { to: '/videos', label: 'Videos' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname])

  // Escape closes the menu; lock page scroll while it is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <Link
          to="/"
          aria-label={`${site.logo}, home`}
          className="font-display text-3xl italic leading-none tracking-tight text-ink"
        >
          {site.logo}
        </Link>

        <div className="flex items-center gap-2 sm:gap-6">
          <ul className="hidden items-center gap-8 md:flex">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-medium tracking-tight transition-colors duration-200 ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {/* Amber stays an indicator only; the label keeps ink-level contrast. */}
                      <span
                        aria-hidden
                        className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-200 ease-out ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] border-t border-line bg-bg md:hidden"
          >
            <ul className="flex flex-col px-5 pt-6 sm:px-8">
              {links.map(({ to, label }) => (
                <li key={to} className="border-b border-line">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-5 font-display text-4xl tracking-tight ${
                        isActive ? 'text-ink' : 'text-muted'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {label}
                        {isActive && <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
