import { Box, GridContainer } from '@island.is/island-ui/core'
import WebReader from '../components/WebReader'
import { SimpleVideoPlayer } from '../components/SimpleVideoPlayer/SimpleVideoPlayer'
import { SearchSection } from '../components/home/SearchSection'
import { TabsSection } from '../components/home/TabsSection'
import { BroadcastSection } from '../components/home/BroadcastSection'

const Home = () => {
  return (
    <Box>
      <WebReader readId="main-content" />
      <GridContainer id="main-content">
        <Box marginTop={4}>
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            style={{ gap: 24 }}
          >
            <SearchSection />
            <Box display={['none', 'none', 'block']}>
              <SimpleVideoPlayer
                controls={false}
                url="https://videos.ctfassets.net/8k0h54kbe6bj/6evxh8D2Pt6nrSJa2F0KQH/bd0867a88663f70c1b211fbc86f122ac/vor2022-desktop.mp4"
                title="Althingi video"
              />
            </Box>
          </Box>
          <TabsSection />
          <BroadcastSection />
        </Box>
      </GridContainer>
    </Box>
  )
}

export default Home
