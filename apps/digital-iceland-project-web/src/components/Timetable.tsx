import { Box, Text, Stack, Link as IslandLink } from '@island.is/island-ui/core'

const Timetable = () => {
  return (
    <Box borderRadius="large" padding={3}>
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
  )
}

export default Timetable 