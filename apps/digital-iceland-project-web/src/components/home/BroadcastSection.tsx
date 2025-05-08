import { Box, Text, Link as IslandLink } from '@island.is/island-ui/core'
import { SimpleVideoPlayer } from '../videoPlayer/SimpleVideoPlayer'
import { useLanguage } from '../../contexts/LanguageContext'

interface BroadcastSectionProps {
  title: string
  viewAllText: string
}

export const BroadcastSection = ({ title, viewAllText }: BroadcastSectionProps) => {
  const { t } = useLanguage()

  return (
    <Box
      marginTop={6}
      background="white"
      borderRadius="large"
      borderWidth="standard"
      borderColor="blue200"
      padding={3}
      display="flex"
      flexDirection={["column", "row"]}
      style={{ gap: 32 }}
    >
      <Box style={{ flex: 1, minWidth: 280 }}>
        <SimpleVideoPlayer
          url="https://www.youtube.com/watch?v=YjkLqcRmL0M"
          title="Althingi"
        />
      </Box>
      <Box style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Box
            background="red100"
            borderRadius="standard"
            paddingX={2}
            paddingY={1}
            marginRight={2}
          >
            <Text color="red600" fontWeight="semiBold" variant="small">
              {t('home.broadcast.live')}
            </Text>
          </Box>
          <Text variant="h5" as="h3">
            {title}
          </Text>
        </Box>
        <Text>
          {t('home.broadcast.nextSession')}
        </Text>
        <Box marginTop={2} display="flex" style={{ gap: 16 }}>
          <IslandLink href="#">{viewAllText}</IslandLink>
          <IslandLink href="#">{t('home.broadcast.recordings')}</IslandLink>
        </Box>
      </Box>
    </Box>
  )
}
