import { FC } from 'react'
import { Box } from '@island.is/island-ui/core'
import * as styles from './SimpleVideoPlayer.css'

interface Props {
  url: string
  title?: string
}

export const SimpleVideoPlayer: FC<Props> = ({ url, title }) => {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(
      // eslint-disable-next-line no-useless-escape
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
    )?.[1]
    if (!url) {
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
      <iframe
        width="100%"
        height="315"
        src={getYouTubeEmbedUrl(url)}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  )
}
