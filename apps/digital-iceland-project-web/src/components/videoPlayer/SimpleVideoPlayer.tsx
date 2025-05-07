import { FC } from 'react'
import { Box } from '@island.is/island-ui/core'
import * as styles from './SimpleVideoPlayer.css'

interface Props {
  url: string
  title?: string
  controls?: boolean
  autoPlay?: boolean
}

export const SimpleVideoPlayer: FC<Props> = ({
  url,
  title,
  controls = true,
  autoPlay = false,
}) => {
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be')

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(
      /(?:youtube.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu.be\/)([^"&?/\s]{11})/,
    )?.[1]
    if (!videoId) {
      throw new Error('Invalid YouTube URL')
    }
    return `https://www.youtube.com/embed/${videoId}`
  }

  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="large"
      borderWidth="large"
      borderStyle="solid"
      borderColor="blue200"
      className={styles.container}
    >
      {isYouTube ? (
        <iframe
          width="100%"
          height="315"
          src={getYouTubeEmbedUrl(url)}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          width="100%"
          height="315"
          controls={controls}
          autoPlay={!controls || autoPlay}
          muted={!controls || autoPlay}
          style={{ display: 'block' }}
        >
          <source src={url} />
          Your browser does not support the video tag.
        </video>
      )}
    </Box>
  )
}
