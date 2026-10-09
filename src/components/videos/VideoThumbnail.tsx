import { useState } from 'react'
import { youtubeThumbnails, type Video } from '../../data/videos'

interface VideoThumbnailProps {
  video: Video
  /** Eager-load for above-the-fold thumbnails (LCP); lazy otherwise. */
  priority?: boolean
  /** Aspect-ratio class; defaults to 16:9. Banners crop wider. */
  aspect?: string
  className?: string
}

/**
 * 16:9 thumbnail. Uses the entry's own `thumbnail`, otherwise YouTube's, stepping down
 * from maxres to hq if the better one doesn't exist. Decorative: the title is always
 * rendered as text beside it, so the alt is empty.
 */
export default function VideoThumbnail({
  video,
  priority = false,
  aspect = 'aspect-video',
  className = '',
}: VideoThumbnailProps) {
  const sources = [video.thumbnail, ...(video.youtubeId ? youtubeThumbnails(video.youtubeId) : [])].filter(Boolean)
  const [attempt, setAttempt] = useState(0)
  const src = sources[attempt]
  const next = () => setAttempt((a) => (a + 1 < sources.length ? a + 1 : a))

  return (
    <span className={`block ${aspect} overflow-hidden bg-elevated ${className}`}>
      {src && (
        <img
          src={src}
          alt=""
          width={1280}
          height={720}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={next}
          // A missing maxresdefault.jpg is a 404 that still serves a tiny (120x90) grey
          // placeholder image, which loads "successfully", so onError never fires. Real
          // thumbnails are at least 320px wide; treat anything smaller as missing.
          onLoad={(e) => e.currentTarget.naturalWidth <= 120 && next()}
          {...(priority ? { fetchpriority: 'high' } : {})}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      )}
    </span>
  )
}
