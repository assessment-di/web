'use client'
import { Box, Text } from '@island.is/island-ui/core'
import Details from './Details'

export function App() {
  return (
    <Box padding={4}>
      <Text variant="h1">Welcome to Digital Iceland</Text>
      <Details />
    </Box>
  )
}

export default App
