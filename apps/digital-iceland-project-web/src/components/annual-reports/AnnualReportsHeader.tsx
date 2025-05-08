import React from 'react'
import { Box, Text, Stack } from '@island.is/island-ui/core'

const AnnualReportsHeader = () => {
  return (
    <Stack space={2}>
      <Text variant="h1" as="h1">
        Annual Reports
      </Text>
      <Text variant="default">
        Here you can find annual reports from Althingi, the Icelandic Parliament.
      </Text>
    </Stack>
  )
}

export default AnnualReportsHeader 