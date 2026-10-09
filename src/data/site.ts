// Site-wide copy. Replace every "[...]" placeholder with the client's real details.

export interface SocialLink {
  label: string
  url: string
}

export interface SiteImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface PageCopy {
  eyebrow: string
  title: string
  description: string
}

export interface SiteConfig {
  name: string
  tagline: string
  /** Closing line shown in the footer above the email address. */
  footerCta: string
  /** Heading copy for each page. */
  pages: {
    photos: PageCopy
    videos: PageCopy
    about: PageCopy
    contact: PageCopy
  }
  /** One or two sentences for the Home intro. */
  intro: string
  /** Paragraphs shown on the About page. */
  bio: string[]
  /** Placeholder portrait; swap for '/photos/portrait.jpg'. */
  portrait: SiteImage
  /** Image used in the Home hero. */
  heroImage: SiteImage
  email: string
  location: string
  availability: string
  socials: SocialLink[]
}

export const site: SiteConfig = {
  name: '[CLIENT NAME]',
  tagline: '[TAGLINE — photography, film & edit]',
  footerCta: 'Let’s make something worth looking at.',
  pages: {
    photos: {
      eyebrow: 'Photography',
      title: 'Selected photographs',
      description: 'Portraits, events, streets and landscapes, filtered by what you want to see.',
    },
    videos: {
      eyebrow: 'Videography',
      title: 'Films & edits',
      description: 'Shot, cut and graded in-house. Press play to watch without leaving the page.',
    },
    about: {
      eyebrow: 'About',
      title: 'The person behind the lens',
      description: 'A little about the work, the approach, and the tools used to finish it.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Say hello',
      description: 'Tell me about the project, the date and the feeling you are after.',
    },
  },
  intro:
    '[One or two sentences introducing the work: who it is for, what it feels like, where it was made.]',
  bio: [
    '[BIO PARAGRAPH 1 — who you are and how you started.]',
    '[BIO PARAGRAPH 2 — your approach, the kind of work you take on, and who you work with.]',
  ],
  portrait: {
    src: 'https://picsum.photos/seed/portrait-client/900/1125',
    alt: '[Portrait of the photographer]',
    width: 900,
    height: 1125,
  },
  heroImage: {
    src: 'https://picsum.photos/seed/hero-01/2000/1300',
    alt: '[Featured hero photograph]',
    width: 2000,
    height: 1300,
  },
  email: 'hello@example.com',
  location: '[CITY, COUNTRY]',
  availability: '[Booking for 2026 — limited slots]',
  socials: [
    { label: 'Instagram', url: 'https://instagram.com/' },
    { label: 'YouTube', url: 'https://youtube.com/' },
    { label: 'Vimeo', url: 'https://vimeo.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
  ],
}
