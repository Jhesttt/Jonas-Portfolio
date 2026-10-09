// Video entries. Videos are NOT stored in the repo: upload them to YouTube as
// "Unlisted" and paste the ID (the part after `v=` in the URL) into `youtubeId`.
//
// The Videos page adapts to how many entries are here:
//   1 entry   -> a single "Featured Film" showcase
//   2+ entries -> a grid of cards
// Just add or remove entries; nothing else needs changing.
//
// How an entry behaves:
//   1. youtubeId set                    -> click opens an in-page player (embed mounts on click)
//   2. youtubeId empty and driveUrl set -> links out to Google Drive in a new tab
//
// `thumbnail` can be left as an empty string to use YouTube's automatic thumbnail.

export interface Video {
  id: string
  title: string
  /** Display text, e.g. 'Video Editor · Audio Engineer · Actor'. */
  roles: string
  year: string
  /** Optional line of context, e.g. the competition or client. */
  context?: string
  /** Custom thumbnail path or URL. Empty string falls back to YouTube's. */
  thumbnail: string
  youtubeId: string
  driveUrl?: string
  featured: boolean
}

// Stand-in ID until the real one arrives.
const PLACEHOLDER_YOUTUBE_ID = 'dQw4w9WgXcQ'

export const videos: Video[] = [
  {
    id: 'film-01',
    title: '[FILM TITLE]',
    roles: 'Video Editor · Audio Engineer · Actor',
    year: '2025',
    context: 'DAR Short Film Competition — PelikulAgraryo',
    // Placeholder frame. Clear this (set to '') to use YouTube's own thumbnail.
    thumbnail: 'https://picsum.photos/seed/film-01/1920/1080',
    youtubeId: PLACEHOLDER_YOUTUBE_ID,
    featured: true,
  },
]

/** YouTube thumbnails, best first. maxres is 16:9 but missing on some uploads; hq always exists (4:3, letterboxed). */
export const youtubeThumbnails = (youtubeId: string) => [
  `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`,
  `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
]
