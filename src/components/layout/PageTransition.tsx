import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/** Subtle fade/slide on route change. Skipped entirely under prefers-reduced-motion. */
export default function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
