import React from 'react'
import { Box } from '@island.is/island-ui/core'
import ParliamentManualsHeader from './ParliamentManualsHeader'
import ParliamentManualsList from './ParliamentManualsList'

const manuals = [
  {
    year: 2024,
    title: 'Honorable Member of Parliament 2024',
    url: 'https://www.althingi.is/media/thingmenn/Hattvirtur-thingmadur-2024.pdf',
    disabled: true,
  },
  {
    year: 2021,
    title: 'Honorable Member of Parliament 2021',
    url: 'https://www.althingi.is/pdf/hattvirtur_2021.pdf',
    disabled: false,
  },
  {
    year: 2017,
    title: 'Honorable Member of Parliament 2017',
    url: 'https://www.althingi.is/pdf/hattvirtur_2017.pdf',
    disabled: false,
  },
]

const ParliamentManuals = () => {
  return (
    <Box paddingY={2}>
      <ParliamentManualsHeader />
      <ParliamentManualsList manuals={manuals} />
    </Box>
  )
}

export default ParliamentManuals
