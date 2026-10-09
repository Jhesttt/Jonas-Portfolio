import { useId, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import type { Tool } from '../../data/tools'

/**
 * A tool card with two faces stacked in the same space: a resting face (monogram, name,
 * category) and a reveal face (description). They cross-fade in 200ms.
 *
 * Input:
 *  - mouse: hovering reveals, leaving hides
 *  - touch / pen: tapping toggles
 *  - keyboard: Enter or Space toggles, Escape closes
 * The whole card is one button, so hover is never the only way in.
 */
export default function ToolCard({ tool }: { tool: Tool }) {
  const { name, icon, category, description, status, since } = tool
  const [open, setOpen] = useState(false)
  const lastPointer = useRef<string>('mouse')
  const reduceMotion = useReducedMotion()
  const revealId = useId()

  const transition = { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }
  const shift = reduceMotion ? 0 : 6

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={revealId}
      onPointerDown={(e) => {
        lastPointer.current = e.pointerType
      }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setOpen(false)}
      onClick={(e) => {
        // A real mouse click is already handled by hover; don't toggle it back off.
        if (e.detail > 0 && lastPointer.current === 'mouse') return
        setOpen((value) => !value)
      }}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      className={`group relative grid min-h-[19rem] w-full grid-cols-[minmax(0,1fr)] overflow-hidden rounded-3xl border bg-elevated p-5 text-left transition-colors duration-200 sm:p-6 ${
        open ? 'border-ink' : 'border-line'
      }`}
    >
      {/* Resting face */}
      <motion.span
        animate={{ opacity: open ? 0 : 1, y: open ? -shift : 0 }}
        transition={transition}
        aria-hidden={open}
        className="col-start-1 row-start-1 flex flex-col justify-between"
      >
        <span className="flex flex-col items-start gap-3">
          <span className="grid h-16 w-16 place-items-center rounded-2xl border border-line bg-bg font-display text-3xl leading-none text-ink">
            {icon}
          </span>
          {status && (
            <span className="rounded-full border border-line bg-bg px-2.5 py-1 text-[11px] font-medium tracking-tight text-secondary">
              {status}
            </span>
          )}
        </span>
        <span className="block pr-8">
          <span className="block font-display text-2xl leading-none tracking-tight sm:text-3xl">{name}</span>
          <span className="mt-2 block text-sm text-muted">{category}</span>
        </span>
      </motion.span>

      {/* Reveal face */}
      <motion.span
        id={revealId}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : shift }}
        transition={transition}
        aria-hidden={!open}
        className="col-start-1 row-start-1 flex flex-col justify-end pr-2"
      >
        <span className="block text-xs font-medium uppercase tracking-eyebrow text-secondary">
          {category}
          {status && ` · ${status}`}
        </span>
        <span className="mt-2 block font-display text-2xl leading-tight">{name}</span>
        <span className="mt-3 block text-sm leading-relaxed text-ink">{description}</span>
        {since && <span className="mt-3 block text-xs text-muted">Since {since}</span>}
      </motion.span>

      {/* Affordance: shows the card is interactive, and turns into a × when open. */}
      <Plus
        size={18}
        aria-hidden
        className={`absolute bottom-5 right-5 text-muted transition-transform duration-200 sm:bottom-6 sm:right-6 ${
          open ? 'rotate-45' : ''
        }`}
      />
    </button>
  )
}
