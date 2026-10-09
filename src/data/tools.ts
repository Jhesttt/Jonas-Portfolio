// Software toolkit shown on the About page.
//
// `logo` is a path to an image in public/logos/ (e.g. '/logos/capcut.jpg'). If it is missing
// or fails to load, the card falls back to the `icon` monogram (two letters), so a card never
// shows a broken image.
// `teaser` is the one-line summary on the resting card; `description` appears on hover/tap.
// `status` is an optional small badge, e.g. 'Previously'. `since` (a year) is optional.

export interface Tool {
  id: string
  name: string
  logo?: string
  /** Two-letter monogram used when there is no logo or it fails to load. */
  icon: string
  category: string
  teaser: string
  description: string
  status?: string
  since?: number
}

export const tools: Tool[] = [
  {
    id: 'capcut',
    name: 'CapCut',
    logo: '/logos/capcut.jpg',
    icon: 'Cc',
    category: 'Video Editing',
    teaser: 'My primary editing platform',
    description:
      'My primary platform for video editing, where I create content, explore different editing techniques, and continuously develop my skills in video production.',
  },
  {
    id: 'powerdirector',
    name: 'PowerDirector',
    logo: '/logos/powerdirector.png',
    icon: 'Pd',
    category: 'Video Editing',
    teaser: 'Where my editing began',
    status: 'Previously',
    description:
      'My previous video editing platform, which helped me gain experience and build my foundational skills in video editing.',
  },
  {
    id: 'lightroom-mobile',
    name: 'Lightroom Mobile',
    logo: '/logos/lightroom.png',
    icon: 'Lr',
    category: 'Photo Editing',
    teaser: 'Light, color and contrast tweaks',
    description:
      'Used for basic photo editing and enhancement, including adjustments to lighting, colors, contrast, and overall image appearance.',
  },
  {
    id: 'canva',
    name: 'Canva',
    logo: '/logos/canva.png',
    icon: 'Ca',
    category: 'Graphic Design',
    teaser: 'Presentations and clean layouts',
    description:
      'Used to create presentations, basic graphic designs, and visual materials with a focus on clear layouts and creative presentation.',
  },
]
