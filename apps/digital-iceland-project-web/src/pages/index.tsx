import {
  Box,
  GridContainer,
  GridRow,
  GridColumn,
  Text,
  Link as IslandLink,
  Stack,
} from '@island.is/island-ui/core'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box background="blue100">
      <GridContainer>
        <Box background="white" borderRadius="large" padding={6} marginTop={4}>
          <GridRow>
            <GridColumn span="2/12">
              <Box
                background="blue200"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="full"
                height="full"
                marginTop={4}
                marginBottom={4}
                style={{ maxWidth: 80, maxHeight: 80 }}
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
            </GridColumn>
            <GridColumn span="10/12">
              <Box marginTop={4}>
                <Text variant="h3" as="h3">
                  Útsending
                </Text>
                <Box
                  background="blue100"
                  borderRadius="large"
                  height="full"
                  marginY={2}
                  style={{ minHeight: 160 }}
                />
                <Stack space={2}>
                  <Text variant="h5" as="h4" color="blue400">
                    Fundir og heimsóknir
                  </Text>
                  <Box background="blue100" borderRadius="large" padding={3}>
                    <Text variant="h5" as="h5">
                      Þriðjudag 6. mai
                    </Text>
                    <Stack space={1}>
                      <Text>
                        Kl. 09:00 <IslandLink href="#">Halda áfram</IslandLink>
                      </Text>
                      <Text>
                        Kl. 09:00 <IslandLink href="#">Halda áfram</IslandLink>
                      </Text>
                      <Text>
                        Kl. 09:00 <IslandLink href="#">Halda áfram</IslandLink>
                      </Text>
                      <Text>
                        Kl. 09:00 <IslandLink href="#">Halda áfram</IslandLink>
                      </Text>
                      <Text>
                        Kl. 10:30 <IslandLink href="#">Halda áfram</IslandLink>
                      </Text>
                      <Text>
                        Kl. 13:30 <IslandLink href="#">Halda áfram</IslandLink>
                      </Text>
                    </Stack>
                    <Box marginTop={2}>
                      <Text>Now casting</Text>
                      <Text fontWeight="semiBold">Stortingets 35. sesjon</Text>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </GridColumn>
          </GridRow>
          <Box marginTop={6}>
            <Link to="/members">Members page</Link>
          </Box>
        </Box>
      </GridContainer>
    </Box>
  )
}

export default Home
