// Software toolkit shown on the About page.
//
// `icon` is a short text monogram used as a placeholder logo (no brand images
// are hotlinked). `since` is the year the client started using the tool.

export interface Tool {
  id: string
  name: string
  icon: string
  category: 'Photo' | 'Video' | 'Motion'
  description: string
  usedFor: string
  since: number
}

export const tools: Tool[] = [
  { id: 'lightroom', name: 'Lightroom', icon: 'Lr', category: 'Photo', description: 'Cataloguing, culling and colour work for every shoot.', usedFor: 'Photo editing & library management', since: 2018 },
  { id: 'photoshop', name: 'Photoshop', icon: 'Ps', category: 'Photo', description: 'Detailed retouching and compositing where Lightroom stops.', usedFor: 'Retouching & compositing', since: 2017 },
  { id: 'premiere', name: 'Premiere Pro', icon: 'Pr', category: 'Video', description: 'The main cutting room for narrative and brand films.', usedFor: 'Editing & assembly', since: 2020 },
  { id: 'resolve', name: 'DaVinci Resolve', icon: 'Dv', category: 'Video', description: 'Colour grading and final delivery.', usedFor: 'Colour grading & delivery, used on all client work', since: 2021 },
  { id: 'after-effects', name: 'After Effects', icon: 'Ae', category: 'Motion', description: 'Titles, transitions and light motion graphics.', usedFor: 'Motion graphics & titles', since: 2021 },
  { id: 'capcut', name: 'CapCut', icon: 'Cc', category: 'Video', description: 'Quick vertical edits for social and short-form.', usedFor: 'Social & short-form edits', since: 2022 },
]
