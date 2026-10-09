import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <Container className="pt-16 sm:pt-24">
      <SectionHeading
        as="h1"
        eyebrow="404"
        title="This frame is empty"
        description="The page you were looking for doesn’t exist or has moved."
      />
      <Button to="/" className="mt-10">
        Back to home
      </Button>
    </Container>
  )
}
