// Site-wide copy. Replace every "[...]" placeholder with real details when they arrive.

export interface SocialLink {
  label: string
  /** Full profile URL. Always opens in a new tab. */
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

export interface Highlight {
  eyebrow: string
  title: string
  subtitle: string
  period: string
  description: string
  roles: string[]
}

/** A supporting credit, shown smaller than the main highlight. */
export interface Credit {
  title: string
  organization: string
  period: string
  description: string
}

export interface SiteConfig {
  /** Full name, used everywhere except the nav logo. */
  name: string
  /** Italic wordmark shown in the nav. */
  logo: string
  /** Short role line shown with the hero intro. */
  role: string
  tagline: string
  /** One or two sentences for the Home intro. */
  intro: string
  /** Paragraphs shown on the About page. */
  bio: string[]
  /** Credential shown as a highlight card on the About page. */
  highlight: Highlight
  /** Secondary credential shown beneath the highlight card. */
  supportingCredit: Credit
  /** Placeholder portrait; swap for '/photos/portrait.jpg'. */
  portrait: SiteImage
  /** Image used in the Home hero. */
  heroImage: SiteImage
  email: string
  /** Display format. The tel: link is derived from it (see `phoneHref`). */
  phone: string
  location: string
  socials: SocialLink[]
  /** Closing line shown in the footer above the email address. */
  footerCta: string
  /** Heading copy for each page. */
  pages: {
    photos: PageCopy
    videos: PageCopy
    /** The About heading is the visitor's name; `tools` heads the toolkit section. */
    about: { eyebrow: string; tools: PageCopy }
    contact: PageCopy & {
      form: { heading: string; note: string; button: string; fallback: string }
    }
  }
  /** Copy for the 404 page. */
  notFound: {
    eyebrow: string
    title: string
    description: string
    homeLabel: string
    browseLabel: string
  }
  /** Copy for the Home page sections. */
  home: {
    primaryCta: string
    secondaryCta: string
    photos: { eyebrow: string; title: string; linkLabel: string }
    /** `single*` copy is used when videos.ts holds exactly one film. */
    videos: { eyebrow: string; title: string; linkLabel: string; singleTitle: string; singleLinkLabel: string }
    cta: { title: string; description: string; buttonLabel: string }
  }
}

export const site: SiteConfig = {
  name: 'Jonas Abesamis',
  logo: 'Sanjo',
  role: 'Photographer · Videographer · Editor',
  tagline: 'Seen, shot, and cut.',
  intro:
    'Based in Antipolo City, I shoot portraits, landscapes and the streets in between, then carry the footage all the way through edit and sound.',
  bio: [
    'I’m a photographer, videographer and editor based in Antipolo City. I shoot people and places as they actually feel, then take the work through the edit, the sound and the final grade, so what you watch is finished, not just filmed.',
    'I’m also studying BS Tourism Management at the University of Rizal System – Antipolo Campus. It’s a good companion to the camera: it keeps my eye on places, culture and the people who make them what they are.',
  ],
  highlight: {
    eyebrow: 'Recognition',
    title: 'PelikulAgraryo',
    subtitle: 'DAR Short Film Competition',
    period: '2025–2026',
    description:
      'Represented Antipolo City in the Department of Agrarian Reform’s short film competition, working across the picture, the sound and the performance.',
    roles: ['Video Editor', 'Audio Engineer', 'Actor'],
  },
  supportingCredit: {
    title: 'Historian',
    organization: 'College of Hospitality Industry Student Council',
    period: '2024',
    description:
      'Documented the council’s year in photos, video and written records, then cut a year-in-review film to close it out. Also kept the Marketing and Advertising officers working in step.',
  },
  portrait: {
    src: 'https://picsum.photos/seed/portrait-client/900/1125',
    alt: 'Portrait of Jonas Abesamis',
    width: 900,
    height: 1125,
  },
  heroImage: {
    src: 'https://picsum.photos/seed/hero-01/2000/1100',
    alt: 'Featured photograph by Jonas Abesamis',
    width: 2000,
    height: 1100,
  },
  email: 'sanjodrops@gmail.com',
  phone: '+63 926 077 3411',
  location: 'Antipolo City, Rizal, Philippines',
  socials: [
    { label: 'Instagram', url: 'https://www.instagram.com/_jnsabsms' },
    { label: 'Facebook', url: 'https://www.facebook.com/jonas.abesamis.2025/' },
    { label: 'YouTube', url: 'https://www.youtube.com/@sanjutsu000' },
  ],
  footerCta: 'Let’s make something worth looking at.',
  pages: {
    photos: {
      eyebrow: 'Photography',
      title: 'Selected photographs',
      description: 'Portraits, landscapes and street photography. Pick a category or browse it all.',
    },
    videos: {
      eyebrow: 'Videography',
      title: 'Films & edits',
      description: 'Edited, mixed and sometimes in front of the camera. Press play to watch without leaving the page.',
    },
    about: {
      eyebrow: 'About',
      tools: {
        eyebrow: 'Toolkit',
        title: 'What I edit with',
        description: 'The software behind the work. Hover or tap a card to see how I use it.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Say hello',
      description: 'Tell me about the project, the date and the feeling you are after.',
      form: {
        heading: 'Send a message',
        note: 'This opens your email app with the message ready to send. Nothing is sent from this page.',
        button: 'Open in your mail app',
        fallback: 'Nothing opened? No problem. Email me directly at',
      },
    },
  },
  notFound: {
    eyebrow: 'Error 404',
    title: 'This frame didn’t make the cut.',
    description: 'The page you’re looking for doesn’t exist, or it has moved.',
    homeLabel: 'Back to home',
    browseLabel: 'See the photography',
  },
  home: {
    primaryCta: 'View photography',
    secondaryCta: 'Watch films',
    photos: { eyebrow: 'Photography', title: 'Recent frames', linkLabel: 'All photographs' },
    videos: {
      eyebrow: 'Videography',
      title: 'Selected films',
      linkLabel: 'All films',
      singleTitle: 'Featured film',
      singleLinkLabel: 'Watch the film',
    },
    cta: {
      title: 'Have a project in mind?',
      description: 'Shoots, edits, short films. Tell me what you’re making.',
      buttonLabel: 'Get in touch',
    },
  },
}

/** `tel:` URL derived from the display number (keeps digits and the leading +). */
export const phoneHref = `tel:${site.phone.replace(/[^\d+]/g, '')}`
