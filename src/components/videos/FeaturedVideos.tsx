import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { videos, youtubeThumbnail } from '../../data/videos'

const FEATURED_COUNT = 3

/** Home teaser: videos flagged `featured`. Links to /videos; no player or iframe loads here. */
export default function FeaturedVideos() {
  const featured = videos.filter((v) => v.featured).slice(0, FEATURED_COUNT)

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featured.map(({ id, title, role, year, thumbnail, youtubeId }) => (
        <li key={id}>
          <Link to="/videos" className="group block">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-elevated">
              <img
                src={thumbnail || youtubeThumbnail(youtubeId)}
                alt=""
                width={1280}
                height={720}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <span
                aria-hidden
                className="absolute inset-0 grid place-items-center bg-[#121212]/0 transition-colors duration-200 group-hover:bg-[#121212]/30"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-contrast transition-transform duration-200 group-hover:scale-110">
                  <Play size={20} fill="currentColor" className="translate-x-px" />
                </span>
              </span>
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl leading-tight">{title}</h3>
              <p className="shrink-0 text-xs text-muted">
                {role} · {year}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
