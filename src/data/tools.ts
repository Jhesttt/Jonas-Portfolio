// Software toolkit shown on the About page.
//
// `icon` is a short text monogram shown in a tile (these four brands have no logo in the
// icon libraries we use, so every card uses a matching monogram for a consistent look).
// `status` is an optional small badge, e.g. 'Previously'. `since` (a year) is optional and
// is only shown if set.

export interface Tool {
  id: string
  name: string
  icon: string
  category: string
  description: string
  status?: string
  since?: number
}

export const tools: Tool[] = [
  {
    id: 'capcut',
    name: 'CapCut',
    icon: 'Cc',
    category: 'Video Editing',
    description:
      'My primary platform for video editing, where I create content, explore different editing techniques, and continuously develop my skills in video production.',
  },
  {
    id: 'powerdirector',
    name: 'PowerDirector',
    icon: 'Pd',
    category: 'Video Editing',
    status: 'Previously',
    description:
      'My previous video editing platform, which helped me gain experience and build my foundational skills in video editing.',
  },
  {
    id: 'lightroom-mobile',
    name: 'Lightroom Mobile',
    icon: 'Lr',
    category: 'Photo Editing',
    description:
      'Used for basic photo editing and enhancement, including adjustments to lighting, colors, contrast, and overall image appearance.',
  },
  {
    id: 'canva',
    name: 'Canva',
    icon: 'Ca',
    category: 'Graphic Design',
    description:
      'Used to create presentations, basic graphic designs, and visual materials with a focus on clear layouts and creative presentation.',
  },
]
