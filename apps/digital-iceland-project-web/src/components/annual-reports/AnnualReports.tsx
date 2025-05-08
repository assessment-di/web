import React from 'react'
import { Box } from '@island.is/island-ui/core'
import AnnualReportsHeader from './AnnualReportsHeader'
import AnnualReportsList from './AnnualReportsList'

const reports = [
  {
    year: 2023,
    title: 'Annual Report of Althingi 2023',
    url: 'https://www.althingi.is/media/uncategorized/Arsreikningur-2023.pdf',
    disabled: false,
  },
  {
    year: 2022,
    title: 'Annual Report of Althingi 2022',
    url: 'https://www.althingi.is/media/uncategorized/00-201-Arsreikningur-2022-undirritadur.pdf',
    disabled: false,
  },
  {
    year: 2021,
    title: 'Annual Report of Althingi 2021',
    url: 'https://www.althingi.is/media/uncategorized/00-201-Althingi-arsreikningur-2021-undirritadur.pdf',
    disabled: false,
  },
]

const AnnualReports = () => {
  return (
    <Box paddingY={4} paddingX={[2, 2, 4]}>
      <AnnualReportsHeader />
      <Box marginTop={4}>
        <AnnualReportsList reports={reports} />
      </Box>
    </Box>
  )
}

export default AnnualReports
