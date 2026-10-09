import type { Video } from '../../data/videos'

export type VideoMode = 'embed' | 'drive' | 'none'

/** How a video is opened: YouTube takes priority, Drive is the fallback, otherwise it is display-only. */
export function videoMode({ youtubeId, driveUrl }: Video): VideoMode {
  if (youtubeId) return 'embed'
  if (driveUrl) return 'drive'
  return 'none'
}
