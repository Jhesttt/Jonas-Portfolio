import { useState } from 'react'
import { site } from '../data/site'
import { videos, type Video } from '../data/videos'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import FeaturedFilm from '../components/videos/FeaturedFilm'
import VideoGrid from '../components/videos/VideoGrid'
import VideoModal from '../components/videos/VideoModal'

export default function Videos() {
  const { eyebrow, title, description } = site.pages.videos
  const [active, setActive] = useState<Video | null>(null)

  return (
    <Container className="pt-16 sm:pt-24">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-12 lg:mt-16">
        {/* One film gets a showcase; two or more get a grid. Driven only by data/videos.ts. */}
        {videos.length === 1 ? (
          <FeaturedFilm video={videos[0]} onPlay={setActive} />
        ) : (
          <VideoGrid videos={videos} onPlay={setActive} />
        )}
      </div>

      {/* Mounted only while a video is playing, so no iframe exists until a click. */}
      {active && <VideoModal video={active} onClose={() => setActive(null)} />}
    </Container>
  )
}
