import {
  Box,
  GridContainer,
  GridRow,
  GridColumn,
  Text,
  Link as IslandLink,
  Stack,
} from '@island.is/island-ui/core'
import Link from 'next/link'
import StreamingVideo from '../components/StreamingVideo'
import Timetable from '../components/Timetable'

const Home = () => {
  return (
    <Box>
      <Box position="relative" width="full" style={{ height: 400 }}>
        <img
          src="https://www.althingi.is/media/althingishusid/21315-281-Edit3.jpg"
          alt="Althingi Parliament"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 2,
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={10}
          right={0}
          bottom={0}
          display="flex"
          alignItems="center"
          style={{ zIndex: 3 }}
        >
          <GridContainer>
            <GridRow>
              <GridColumn span="6/12">
                <Box
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <Text
                    variant="h2"
                    color="white"
                    marginBottom={2}
                    fontWeight="semiBold"
                  >
                    Althingi
                  </Text>
                </Box>
                <Box
                  style={{
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <Box
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="full"
                    height="full"
                    style={{ maxWidth: 120, maxHeight: 120 }}
                  >
                    <img
                      src="assets/althingi-logo.png"
                      alt="Althingi Logo"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '8px',
                      }}
                    />
                  </Box>
                </Box>
              </GridColumn>
            </GridRow>
          </GridContainer>
        </Box>
      </Box>

      <GridContainer>
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
                <StreamingVideo />
              </Box>
            </Box>
          </Box>
        </Box>
      </GridContainer>
    </Box>
  )
}

export default Home
