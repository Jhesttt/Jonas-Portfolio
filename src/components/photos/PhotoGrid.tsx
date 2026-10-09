import { motion, useReducedMotion } from 'framer-motion'
import type { Photo } from '../../data/photos'
import PhotoCard from './PhotoCard'

interface PhotoGridProps {
  photos: Photo[]
  onOpen: (index: number) => void
}

/**
 * CSS-columns masonry: 1 column on mobile, 2 on tablet, 3 on desktop, 4 on wide screens.
 * Card heights come from each photo's width/height, so the layout is stable before images load.
 */
export default function PhotoGrid({ photos, onOpen }: PhotoGridProps) {
  const reduceMotion = useReducedMotion()

  return (
    <ul className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 2xl:columns-4">
      {photos.map((photo, index) => (
        <motion.li
          key={photo.id}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : Math.min(index, 8) * 0.03 }}
          className="break-inside-avoid"
        >
          <PhotoCard photo={photo} priority={index < 3} onOpen={() => onOpen(index)} />
        </motion.li>
      ))}
    </ul>
  )
}
