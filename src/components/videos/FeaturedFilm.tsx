import type { Video } from '../../data/videos'
import VideoThumbnail from './VideoThumbnail'
import VideoTrigger from './VideoTrigger'
import PlayBadge from './PlayBadge'

interface FeaturedFilmProps {
  video: Video
  onPlay: (video: Video) => void
}

/** Single-film showcase: a cinematic 16:9 frame with the play control, then the credits. */
export default function FeaturedFilm({ video, onPlay }: FeaturedFilmProps) {
  const { title, roles, year, context } = video

  return (
    <article aria-labelledby={`film-${video.id}`}>
      <VideoTrigger video={video} onPlay={onPlay} className="overflow-hidden rounded-3xl">
        <VideoThumbnail video={video} priority className="rounded-3xl" />
        <PlayBadge video={video} size="lg" />
      </VideoTrigger>

      <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16">
        <div>
          {context && (
            <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-secondary">{context}</p>
          )}
          <h2
            id={`film-${video.id}`}
            className="font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
          >
            {title}
          </h2>
        </div>

        <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 border-t border-line pt-6 text-sm md:min-w-72 md:border-t-0 md:pt-0">
          <dt className="text-muted">Role</dt>
          <dd>{roles}</dd>
          <dt className="text-muted">Year</dt>
          <dd>{year}</dd>
        </dl>
      </div>
    </article>
  )
}
