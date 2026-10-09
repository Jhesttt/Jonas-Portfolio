import { Suspense, lazy, useMemo, useState } from 'react'
import { site } from '../data/site'
import { categories, photos } from '../data/photos'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import CategoryFilter, { ALL } from '../components/photos/CategoryFilter'
import PhotoGrid from '../components/photos/PhotoGrid'

// Loaded on the first photo click, not with the page.
const PhotoLightbox = lazy(() => import('../components/photos/PhotoLightbox'))

const counts: Record<string, number> = {
  [ALL]: photos.length,
  ...Object.fromEntries(categories.map((c) => [c, photos.filter((p) => p.category === c).length])),
}

export default function Photos() {
  const { eyebrow, title, description } = site.pages.photos
  const [category, setCategory] = useState(ALL)
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const [lightboxRequested, setLightboxRequested] = useState(false)

  const visible = useMemo(
    () => (category === ALL ? photos : photos.filter((p) => p.category === category)),
    [category],
  )

  const open = (index: number) => {
    setLightboxRequested(true)
    setLightboxIndex(index)
  }

  return (
    <Container className="pt-16 sm:pt-24">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-12 lg:mt-16">
        <CategoryFilter categories={categories} active={category} counts={counts} onChange={setCategory} />
        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'photograph' : 'photographs'}
          {category === ALL ? '' : ` in ${category}`}
        </p>
      </div>

      <div className="mt-10">
        {/* Keyed by category so the grid re-enters with a fade on every filter change. */}
        <PhotoGrid key={category} photos={visible} onOpen={open} />
      </div>

      {lightboxRequested && (
        <Suspense fallback={null}>
          <PhotoLightbox
            photos={visible}
            index={lightboxIndex}
            onIndexChange={setLightboxIndex}
            onClose={() => setLightboxIndex(-1)}
          />
        </Suspense>
      )}
    </Container>
  )
}
