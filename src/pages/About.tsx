import { site } from '../data/site'
import { tools } from '../data/tools'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import HighlightCard from '../components/ui/HighlightCard'
import CreditCard from '../components/ui/CreditCard'
import ToolGrid from '../components/tools/ToolGrid'

export default function About() {
  const { eyebrow, tools: toolsCopy } = site.pages.about
  const { portrait } = site

  return (
    <Container className="pt-16 sm:pt-24">
      {/* The page opens with his name; the bio sits directly beneath it. */}
      <SectionHeading as="h1" eyebrow={eyebrow} title={site.name} />

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
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
          <figcaption className="mt-4 text-sm text-muted">{site.location}</figcaption>
        </figure>

        <div className="space-y-12">
          <div className="max-w-xl space-y-6 text-lg leading-relaxed">
            {site.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-4">
            <HighlightCard {...site.highlight} />
            <CreditCard {...site.supportingCredit} />
          </div>
        </div>
      </div>

      <section aria-labelledby="toolkit" className="mt-28 sm:mt-40">
        <SectionHeading
          eyebrow={toolsCopy.eyebrow}
          title={<span id="toolkit">{toolsCopy.title}</span>}
          description={toolsCopy.description}
        />
        <div className="mt-10 lg:mt-14">
          <ToolGrid tools={tools} />
        </div>
      </section>
    </Container>
  )
}
