import React from 'react'
import { Box } from '@island.is/island-ui/core'
import AnnualReportsHeader from './AnnualReportsHeader'
import AnnualReportsList from './AnnualReportsList'

const reports = [
  {
    year: 2023,
    title: 'Annual Report of Althingi 2023',
    url: 'https://www.althingi.is/um-althingi/utgefid-efni/arsskyrslur-althingis/',
    disabled: false,
  },
  {
    year: 2022,
    title: 'Annual Report of Althingi 2022',
    url: 'https://www.althingi.is/um-althingi/utgefid-efni/arsskyrslur-althingis/',
    disabled: false,
  },
  {
    year: 2021,
    title: 'Annual Report of Althingi 2021',
    url: 'https://www.althingi.is/um-althingi/utgefid-efni/arsskyrslur-althingis/',
    disabled: false,
  },
]

const AnnualReports = () => {
  return (
    <Box paddingY={2}>
      <AnnualReportsHeader />
      <AnnualReportsList reports={reports} />
    </Box>
  )
}

export default AnnualReports 