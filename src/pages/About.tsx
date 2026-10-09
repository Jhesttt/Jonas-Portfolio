import { site } from '../data/site'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import HighlightCard from '../components/ui/HighlightCard'

export default function About() {
  const { eyebrow, title, description } = site.pages.about
  const { portrait } = site

  return (
    <Container className="pt-16 sm:pt-24">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <figure className="lg:sticky lg:top-28 lg:self-start">
          <div
            className="overflow-hidden rounded-3xl bg-elevated"
            style={{ aspectRatio: `${portrait.width} / ${portrait.height}` }}
          >
            <img
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 text-sm text-muted">
            {site.name} · {site.location}
          </figcaption>
        </figure>

        <div className="space-y-12">
          <div className="max-w-xl space-y-6 text-lg leading-relaxed">
            {site.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <HighlightCard {...site.highlight} />
        </div>
      </div>
    </Container>
  )
}
