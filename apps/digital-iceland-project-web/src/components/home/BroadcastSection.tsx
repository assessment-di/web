import { Box, Text, Link as IslandLink } from '@island.is/island-ui/core'
import { SimpleVideoPlayer } from '../SimpleVideoPlayer/SimpleVideoPlayer'

export const BroadcastSection = () => {
  return (
    <Box marginTop={6}>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Box
          background="red100"
          borderRadius="standard"
          paddingX={2}
          paddingY={1}
          marginRight={2}
        >
          <Text color="red600" fontWeight="semiBold" variant="small">
            Live
          </Text>
        </Box>
        <Text variant="h5" as="h3">
          Broadcast
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        style={{ gap: 32 }}
      >
        <Box style={{ flex: 1 }}>
          <SimpleVideoPlayer
            url="https://www.youtube.com/watch?v=YjkLqcRmL0M"
            title="Althingi"
          />
        </Box>
        <Box style={{ flex: 2 }}>
          <Text>
            The next parliamentary session will be on Wednesday, May 7 at 15:00
          </Text>
          <Box marginTop={2} display="flex" style={{ gap: 16 }}>
            <IslandLink href="#">Other broadcast options</IslandLink>
            <IslandLink href="#">Recordings</IslandLink>
          </Box>
        </Box>
      </Box>
    </Box>
  )
} 