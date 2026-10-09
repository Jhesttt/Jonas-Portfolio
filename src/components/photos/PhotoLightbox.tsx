import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import type { Photo } from '../../data/photos'

interface PhotoLightboxProps {
  photos: Photo[]
  /** Index of the open photo, or -1 when closed. */
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}

/**
 * Fullscreen viewer. This module is lazy-loaded from the Photos page, so none of
 * the lightbox code ships until a visitor opens their first photo.
 * Keyboard (arrows, Esc) and swipe navigation come with the library.
 */
export default function PhotoLightbox({ photos, index, onIndexChange, onClose }: PhotoLightboxProps) {
  return (
    <Lightbox
      open={index >= 0}
      index={Math.max(index, 0)}
      close={onClose}
      on={{ view: ({ index: current }) => onIndexChange(current) }}
      plugins={[Captions, Zoom]}
      slides={photos.map(({ src, alt, width, height, title, category, year }) => ({
        src,
        alt,
        width,
        height,
        title,
        description: `${category} · ${year}`,
      }))}
      carousel={{ finite: false, preload: 2 }}
      animation={{ fade: 250, swipe: 300 }}
      styles={{
        // Opaque so the page behind (nav, headings) never bleeds through the caption bar.
        container: { backgroundColor: '#121212' },
      }}
    />
  )
}
