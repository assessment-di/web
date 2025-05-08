import React from 'react'
import { Box, Link, Icon, Typography } from '@island.is/island-ui/core'

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
            <Link
              href={manual.url}
              color={manual.disabled ? undefined : 'blue400'}
              underline="normal"
              newTab={!manual.disabled}
              aria-disabled={manual.disabled}
            >
              {manual.title}
            </Link>
          </Box>
          <Icon icon="document" type="outline" color="blue400" />
        </Box>
      ))}
    </Box>
  )
}

export default ParliamentManualsList 