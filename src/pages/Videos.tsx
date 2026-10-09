import { site } from '../data/site'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'

export default function Videos() {
  const { eyebrow, title, description } = site.pages.videos
  return (
    <Container className="pt-16 sm:pt-24">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
    </Container>
  )
}
