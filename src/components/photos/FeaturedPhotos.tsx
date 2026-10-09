import { Link } from 'react-router-dom'
import { photos } from '../../data/photos'

const FEATURED_COUNT = 4

/** Home teaser: the photos flagged `featured` in photos.ts, cropped to a uniform 4:5 tile. */
export default function FeaturedPhotos() {
  const featured = photos.filter((p) => p.featured).slice(0, FEATURED_COUNT)

  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
      {featured.map(({ id, src, alt, title, category, year }, i) => (
        <li key={id} className={i % 2 === 1 ? 'lg:mt-12' : ''}>
          <Link to="/photos" className="group block">
            <figure>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-elevated">
                <img
                  src={src}
                  alt={alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                <span className="font-display text-xl leading-tight">{title}</span>
                <span className="text-xs text-muted">
                  {category} · {year}
                </span>
              </figcaption>
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  )
}
