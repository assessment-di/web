import {
  Box,
  GridContainer,
  GridRow,
  GridColumn,
  Text,
} from '@island.is/island-ui/core'
import Timetable from '../components/Timetable'
import WebReader from '../components/WebReader'
import { SimpleVideoPlayer } from '../components/SimpleVideoPlayer/SimpleVideoPlayer'

const Home = () => {
  return (
    <Box>
      <WebReader readId="main-content" />

      <GridContainer id="main-content">
        <Box background="white" borderRadius="large" padding={6} marginTop={4}>
          <Box marginTop={4}>
            <Box
              display="flex"
              flexDirection="row"
              style={{ gap: '32px' }}
              justifyContent="spaceBetween"
            >
              <Box style={{ flex: 1 }}>
                <Timetable />
              </Box>
              <Box style={{ flex: 2 }}>
                <SimpleVideoPlayer
                  url="https://www.youtube.com/watch?v=YjkLqcRmL0M"
                  title="Althingi"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </GridContainer>
    </Box>
  )
}

export default Home
