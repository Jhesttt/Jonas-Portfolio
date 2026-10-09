// Video entries. Videos are NOT stored in the repo: upload them to YouTube as
// "Unlisted" and paste the ID (the part after `v=` in the URL) into `youtubeId`.
//
// How a card behaves:
//   1. youtubeId set                    -> click opens an in-page player (embed mounts on click)
//   2. youtubeId empty and driveUrl set -> card links out to Google Drive in a new tab
//
// `thumbnail` can be left as an empty string to use YouTube's automatic thumbnail.

export interface Video {
  id: string
  title: string
  role: string
  year: number
  /** Custom thumbnail path or URL. Empty string falls back to YouTube's. */
  thumbnail: string
  youtubeId: string
  driveUrl?: string
  featured: boolean
}

// Stand-in ID until the client supplies real ones.
const PLACEHOLDER_YOUTUBE_ID = 'dQw4w9WgXcQ'

const thumb = (seed: string) => `https://picsum.photos/seed/${seed}/1280/720`

export const videos: Video[] = [
  { id: 'video-01', title: 'Northbound', role: 'Director, Editor', year: 2025, thumbnail: thumb('video-01'), youtubeId: PLACEHOLDER_YOUTUBE_ID, featured: true },
  { id: 'video-02', title: 'Harbour Lights', role: 'Cinematographer', year: 2025, thumbnail: thumb('video-02'), youtubeId: PLACEHOLDER_YOUTUBE_ID, featured: true },
  { id: 'video-03', title: 'The Long Table', role: 'Editor, Colourist', year: 2024, thumbnail: thumb('video-03'), youtubeId: PLACEHOLDER_YOUTUBE_ID, featured: true },
  { id: 'video-04', title: 'Brand Film: Atelier', role: 'Director, Editor', year: 2024, thumbnail: thumb('video-04'), youtubeId: PLACEHOLDER_YOUTUBE_ID, featured: false },
  { id: 'video-05', title: 'Live at the Warehouse', role: 'Camera, Editor', year: 2023, thumbnail: thumb('video-05'), youtubeId: '', driveUrl: 'https://drive.google.com/', featured: false },
  { id: 'video-06', title: 'Wedding Highlights', role: 'Cinematographer, Editor', year: 2023, thumbnail: thumb('video-06'), youtubeId: PLACEHOLDER_YOUTUBE_ID, featured: false },
]

export const youtubeThumbnail = (youtubeId: string) =>
  `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
