import type { ReactNode } from 'react'
import type { Video } from '../../data/videos'
import { videoMode } from './videoMode'

interface VideoTriggerProps {
  video: Video
  onPlay: (video: Video) => void
  className?: string
  children: ReactNode
}

/**
 * Wraps a thumbnail in the right interactive element:
 * a button that opens the player, a new-tab link to Drive, or nothing for display-only entries.
 * Children must be phrasing content (spans), since they sit inside a button.
 */
export default function VideoTrigger({ video, onPlay, className = '', children }: VideoTriggerProps) {
  const base = `group relative block w-full text-left ${className}`

  switch (videoMode(video)) {
    case 'embed':
      return (
        <button type="button" onClick={() => onPlay(video)} aria-label={`Play ${video.title}`} className={base}>
          {children}
        </button>
      )
    case 'drive':
      return (
        <a
          href={video.driveUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${video.title} (opens in Google Drive)`}
          className={base}
        >
          {children}
        </a>
      )
    default:
      return <span className={base}>{children}</span>
  }
}
