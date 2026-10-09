import type { Video } from '../../data/videos'
import VideoThumbnail from './VideoThumbnail'
import VideoTrigger from './VideoTrigger'
import PlayBadge from './PlayBadge'

interface VideoCardProps {
  video: Video
  onPlay: (video: Video) => void
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  const { title, roles, year, context } = video

  return (
    <article>
      <VideoTrigger video={video} onPlay={onPlay} className="overflow-hidden rounded-2xl">
        <VideoThumbnail video={video} className="rounded-2xl" />
        <PlayBadge video={video} />
      </VideoTrigger>

      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-3xl leading-tight tracking-tight">{title}</h3>
          <p className="shrink-0 text-sm tabular-nums text-muted">{year}</p>
        </div>
        <p className="mt-1 text-sm text-muted">{roles}</p>
        {context && <p className="mt-3 text-xs font-medium uppercase tracking-eyebrow text-secondary">{context}</p>}
      </div>
    </article>
  )
}
