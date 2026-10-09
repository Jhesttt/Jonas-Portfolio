import { ExternalLink, Play } from 'lucide-react'
import type { Video } from '../../data/videos'
import { videoMode } from './videoMode'

interface PlayBadgeProps {
  video: Video
  size?: 'md' | 'lg'
}

/**
 * Centred play control drawn over a thumbnail. For Drive-only entries it also shows an
 * "Opens in Drive" chip so the new-tab behaviour is never a surprise. Amber is the fill,
 * dark text/icon on top keeps contrast.
 */
export default function PlayBadge({ video, size = 'md' }: PlayBadgeProps) {
  const mode = videoMode(video)
  if (mode === 'none') return null

  const circle = size === 'lg' ? 'h-20 w-20 sm:h-28 sm:w-28' : 'h-14 w-14'
  const icon = size === 'lg' ? 36 : 20

  return (
    <>
      <span
        aria-hidden
        className="absolute inset-0 grid place-items-center bg-[#121212]/10 transition-colors duration-300 group-hover:bg-[#121212]/35"
      >
        <span
          className={`grid place-items-center rounded-full bg-accent text-accent-contrast shadow-lg transition-transform duration-300 ease-out group-hover:scale-110 ${circle}`}
        >
          {mode === 'embed' ? (
            <Play size={icon} fill="currentColor" className="translate-x-0.5" />
          ) : (
            <ExternalLink size={icon * 0.8} />
          )}
        </span>
      </span>

      {mode === 'drive' && (
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#121212]/85 px-3 py-1.5 text-xs font-medium text-[#F2EFEA]">
          <ExternalLink size={12} aria-hidden />
          Opens in Drive
        </span>
      )}
    </>
  )
}
