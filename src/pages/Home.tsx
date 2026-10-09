import { site } from '../data/site'
import { videos } from '../data/videos'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SectionRow from '../components/ui/SectionRow'
import FeaturedPhotos from '../components/photos/FeaturedPhotos'
import FeaturedVideos from '../components/videos/FeaturedVideos'

export default function Home() {
  const { heroImage, home } = site

  return (
    <>
      {/* Hero */}
      <Container className="pt-14 sm:pt-20 lg:pt-28">
        {/* The name leads; the tagline supports it. */}
        <h1 className="font-display text-[3.5rem] leading-[0.95] tracking-tight sm:text-8xl lg:text-[10.5rem]">
          {site.name}
        </h1>
        <p className="mt-5 font-display text-3xl italic leading-tight text-muted sm:mt-7 sm:text-5xl">
          {site.tagline}
        </p>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-eyebrow text-secondary">{site.role}</p>
            <p className="text-lg leading-relaxed text-muted">{site.intro}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/photos">{home.primaryCta}</Button>
            <Button to="/videos" variant="ghost">
              {home.secondaryCta}
            </Button>
          </div>
        </div>

        <figure className="relative mt-14 overflow-hidden rounded-3xl bg-elevated sm:mt-20">
          <div className="aspect-[4/3] sm:aspect-[2/1]">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              // The hero is the largest contentful paint: load it first, never lazily.
              {...{ fetchpriority: 'high' }}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#121212]/70 to-transparent p-5 pt-20 text-xs tracking-tight text-[#F2EFEA] sm:p-8 sm:text-sm">
            {site.location}
          </figcaption>
        </figure>
      </Container>

      {/* Teaser rows */}
      <Container className="mt-28 space-y-28 sm:mt-40 sm:space-y-40">
        <SectionRow {...home.photos} to="/photos">
          <FeaturedPhotos />
        </SectionRow>

        <SectionRow
          eyebrow={home.videos.eyebrow}
          title={videos.length === 1 ? home.videos.singleTitle : home.videos.title}
          linkLabel={videos.length === 1 ? home.videos.singleLinkLabel : home.videos.linkLabel}
          to="/videos"
        >
          <FeaturedVideos />
        </SectionRow>

        {/* Contact CTA */}
        <section
          aria-labelledby="home-cta"
          className="rounded-3xl border border-line bg-elevated px-6 py-16 text-center sm:px-12 sm:py-24"
        >
          <h2 id="home-cta" className="mx-auto max-w-3xl font-display text-5xl leading-none tracking-tight sm:text-7xl">
            {home.cta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted">{home.cta.description}</p>
          <Button to="/contact" className="mt-10">
            {home.cta.buttonLabel}
          </Button>
        </section>
      </Container>
    </>
  )
}
