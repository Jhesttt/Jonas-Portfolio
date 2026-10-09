import type { Photo } from '../../data/photos'

interface PhotoCardProps {
  photo: Photo
  /** Images that may be above the fold load eagerly; everything else is lazy. */
  priority?: boolean
  onOpen: () => void
}

export default function PhotoCard({ photo, priority = false, onOpen }: PhotoCardProps) {
  const { src, alt, title, category, year, width, height } = photo

  return (
    <figure className="mb-4 break-inside-avoid sm:mb-5">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${title} (${category}, ${year}) full screen`}
        className="group relative block w-full overflow-hidden rounded-2xl bg-elevated"
      >
        {/* The aspect-ratio box reserves space before the image arrives, so nothing shifts. */}
        <div style={{ aspectRatio: `${width} / ${height}` }}>
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#121212]/75 to-transparent p-4 pt-16 text-left text-[#F2EFEA] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="font-display text-2xl leading-none">{title}</span>
          <span className="text-xs tracking-tight opacity-80">
            {category} · {year}
          </span>
        </figcaption>
      </button>
    </figure>
  )
}
