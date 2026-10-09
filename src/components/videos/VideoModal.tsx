import { useEffect, useRef, type MouseEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Video } from '../../data/videos'

interface VideoModalProps {
  video: Video
  onClose: () => void
}

/**
 * In-page player. Built on the native <dialog> so the browser provides the modal behaviour:
 * the rest of the page is inert, Tab stays inside, Escape closes, and focus returns to the
 * button that opened it.
 *
 * The component is only mounted while a video is active, so the YouTube iframe (and all its
 * JavaScript) is requested on click, never on page load. youtube-nocookie avoids tracking
 * cookies until the visitor presses play.
 *
 * Limitation: once a visitor clicks inside the YouTube player, keystrokes go to the iframe
 * rather than this page, so Escape won't close it from there. The close button and a click
 * on the dark backdrop still work.
 */
export default function VideoModal({ video, onClose }: VideoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const reduceMotion = useReducedMotion()
  // The element that opened the player (the first render happens before focus moves into the dialog).
  const openerRef = useRef<Element | null>(document.activeElement)

  useEffect(() => {
    const dialog = dialogRef.current
    // Guard: React StrictMode runs effects twice in development.
    if (dialog && !dialog.open) dialog.showModal()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
      // Escape gets focus restoration from the browser; the Close button and backdrop paths
      // just unmount the dialog, so hand focus back to the opener explicitly.
      if (openerRef.current instanceof HTMLElement) openerRef.current.focus()
    }
  }, [])

  // Clicks on the backdrop land on the <dialog> itself (its content fills the box).
  const onBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  const titleId = `modal-title-${video.id}`

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      // Fires for Escape and for dialog.close().
      onClose={onClose}
      onClick={onBackdropClick}
      className="m-auto w-[min(94vw,76rem)] max-w-none overflow-visible border-0 bg-transparent p-0 text-[#F2EFEA] backdrop:bg-[#121212]/90 backdrop:backdrop-blur-sm"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h2 id={titleId} className="truncate font-display text-2xl leading-tight sm:text-3xl">
              {video.title}
            </h2>
            <p className="truncate text-sm text-[#A8A098]">
              {video.roles} · {video.year}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#F2EFEA]/30 text-[#F2EFEA] transition-colors duration-200 hover:border-[#F2EFEA] focus-visible:outline-[#F2EFEA]"
          >
            <X size={20} aria-hidden />
          </button>
        </div>

        <div className="aspect-video overflow-hidden rounded-2xl bg-[#1C1A19]">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={`${video.title} (video player)`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-full w-full border-0"
          />
        </div>
      </motion.div>
    </dialog>
  )
}
