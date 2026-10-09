import { site } from '../data/site'
import { photos } from '../data/photos'
import { videos } from '../data/videos'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <Container className="pb-8 pt-16 sm:pt-24 lg:pt-32">
      <p className="mb-6 text-xs font-medium uppercase tracking-eyebrow text-secondary">
        {site.location}
      </p>
      <h1 className="max-w-5xl font-display text-6xl leading-[0.98] tracking-tight sm:text-7xl lg:text-[8.5rem]">
        {site.tagline}
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{site.intro}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button to="/photos">View photography</Button>
        <Button to="/videos" variant="ghost">
          Watch films
        </Button>
      </div>

      <dl className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:max-w-md">
        <div className="bg-elevated p-6">
          <dt className="text-xs uppercase tracking-eyebrow text-muted">Photographs</dt>
          <dd className="mt-2 font-display text-5xl">{photos.length}</dd>
        </div>
        <div className="bg-elevated p-6">
          <dt className="text-xs uppercase tracking-eyebrow text-muted">Films</dt>
          <dd className="mt-2 font-display text-5xl">{videos.length}</dd>
        </div>
      </dl>
    </Container>
  )
}
