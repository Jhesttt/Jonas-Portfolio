import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { videos } from '../../data/videos'
import VideoThumbnail from './VideoThumbnail'

const FEATURED_COUNT = 3

/**
 * Home teaser for videos. With exactly one film it is a wide banner; with more it is a row of
 * the `featured` entries. Either way it links to /videos: no player or iframe loads on Home.
 */
export default function FeaturedVideos() {
  if (videos.length === 1) return <FilmBanner video={videos[0]} />

  const featured = videos.filter((v) => v.featured).slice(0, FEATURED_COUNT)

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featured.map((video) => (
        <li key={video.id}>
          <Link to="/videos" className="group block" aria-label={`${video.title}, ${video.roles}, ${video.year}`}>
            <span className="relative block overflow-hidden rounded-2xl">
              <VideoThumbnail video={video} className="rounded-2xl" />
              <PlayIcon />
            </span>
            <span className="mt-3 flex items-baseline justify-between gap-3">
              <span className="font-display text-2xl leading-tight">{video.title}</span>
              <span className="shrink-0 text-xs text-muted">
                {video.roles} · {video.year}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function PlayIcon() {
  return (
    <span
      aria-hidden
      className="absolute inset-0 grid place-items-center bg-[#121212]/0 transition-colors duration-200 group-hover:bg-[#121212]/30"
    >
      <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-contrast transition-transform duration-200 group-hover:scale-110">
        <Play size={20} fill="currentColor" className="translate-x-px" />
      </span>
    </span>
  )
}

function FilmBanner({ video }: { video: (typeof videos)[number] }) {
  const { title, roles, year, context } = video

  return (
    <Link
      to="/videos"
      className="group relative block overflow-hidden rounded-3xl"
      aria-label={`${title}, ${roles}, ${year}`}
    >
      <VideoThumbnail video={video} aspect="aspect-[4/3] sm:aspect-[2/1] lg:aspect-[21/9]" />
      <PlayIcon />

      <span className="absolute inset-x-0 bottom-0 block bg-gradient-to-t from-[#121212]/85 via-[#121212]/40 to-transparent p-5 pt-24 text-[#F2EFEA] sm:p-8 sm:pt-32">
        {context && (
          <span className="mb-2 block text-xs font-medium uppercase tracking-eyebrow opacity-80">{context}</span>
        )}
        <span className="block font-display text-4xl leading-none tracking-tight sm:text-6xl">{title}</span>
        <span className="mt-3 block text-sm opacity-85">
          {roles} · {year}
        </span>
      </span>
    </Link>
  )
}
