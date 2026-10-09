import { site } from '../data/site'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  const { eyebrow, title, description, homeLabel, browseLabel } = site.notFound

  return (
    <Container className="relative overflow-hidden pb-8 pt-16 sm:pt-24">
      {/* Oversized numeral, drawn like a film-frame counter. Decorative. */}
      <p
        aria-hidden
        className="pointer-events-none select-none font-display text-[10rem] italic leading-[0.8] tracking-tight text-line sm:text-[20rem] lg:text-[28rem]"
      >
        404
      </p>

      <div className="relative -mt-10 max-w-3xl sm:-mt-24 lg:-mt-40">
        <p className="mb-4 text-xs font-medium uppercase tracking-eyebrow text-secondary">{eyebrow}</p>
        <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{description}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/">{homeLabel}</Button>
          <Button to="/photos" variant="ghost">
            {browseLabel}
          </Button>
        </div>
      </div>
    </Container>
  )
}
