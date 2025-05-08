import React from 'react'
import { Box, LinkV2, Icon, Typography } from '@island.is/island-ui/core'

interface Manual {
  year: number
  title: string
  url: string
  disabled?: boolean
}

interface ParliamentManualsListProps {
  manuals: Manual[]
}

const ParliamentManualsList: React.FC<ParliamentManualsListProps> = ({ manuals }) => {
  return (
    <Box as="ul" padding={0} margin={0} style={{ listStyle: 'none' }}>
      {manuals.map((manual) => (
        <Box as="li" key={manual.year} marginBottom={2} display="flex" alignItems="center">
          <Box style={{ opacity: manual.disabled ? 0.6 : 1 }}>
            <LinkV2
              href={manual.url}
              color={manual.disabled ? undefined : 'blue400'}
              underline="normal"
              newTab={!manual.disabled}
              aria-disabled={manual.disabled}
            >
              {manual.title}
            </LinkV2>
          </Box>
          <Icon icon="document" type="outline" color="blue400" aria-label="Skjal" />
        </Box>
      ))}
    </Box>
  )
}

export default ParliamentManualsList 