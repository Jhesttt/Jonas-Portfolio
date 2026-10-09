import type { Video } from '../../data/videos'
import VideoCard from './VideoCard'

interface VideoGridProps {
  videos: Video[]
  onPlay: (video: Video) => void
}

/** Card grid for 2+ videos. Two to four films get two wide columns; more than that gets three. */
export default function VideoGrid({ videos, onPlay }: VideoGridProps) {
  const columns = videos.length <= 4 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'

  return (
    <ul className={`grid gap-x-6 gap-y-14 sm:grid-cols-2 ${columns}`}>
      {videos.map((video) => (
        <li key={video.id}>
          <VideoCard video={video} onPlay={onPlay} />
        </li>
      ))}
    </ul>
  )
}
