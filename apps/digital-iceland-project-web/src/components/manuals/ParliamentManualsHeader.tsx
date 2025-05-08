import React from 'react'
import { Box, Typography } from '@island.is/island-ui/core'

const ParliamentManualsHeader = () => (
  <>
    <Typography variant="h1" as="h1" marginBottom={3}>
      Althingi Handbook
    </Typography>
    <Box marginBottom={3}>
      <Typography variant="h3" as="h2">
        Honorable Member of Parliament - a guide to parliamentary work
      </Typography>
    </Box>
    <Typography variant="p" marginBottom={4}>
      The publication Háttvartur þingmann contains information about work at parliamentary sessions and in parliamentary committees, about the preparation and handling of parliamentary matters, and about MPs' working conditions and terms of employment; furthermore, information about the activities of the office and the services it provides to MPs.
    </Typography>
  </>
)

export default ParliamentManualsHeader 