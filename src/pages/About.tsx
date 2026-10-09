import { site } from '../data/site'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'

export default function About() {
  const { eyebrow, title, description } = site.pages.about
  return (
    <Container className="pt-16 sm:pt-24">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
    </Container>
  )
}
