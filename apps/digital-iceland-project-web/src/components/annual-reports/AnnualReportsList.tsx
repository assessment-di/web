import React from 'react'
import { Box, Text, Link } from '@island.is/island-ui/core'

interface Report {
  year: number
  title: string
  url: string
  disabled: boolean
}

interface AnnualReportsListProps {
  reports: Report[]
}

const AnnualReportsList = ({ reports }: AnnualReportsListProps) => {
  return (
    <Box>
      {reports.map((report) => (
        <Box key={report.year} marginBottom={3}>
          {report.disabled ? (
            <Text variant="h3" as="h3" color="dark300">
              {report.title}
            </Text>
          ) : (
            <Link href={report.url}>
              <Text variant="h3" as="h3">
                {report.title}
              </Text>
            </Link>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default AnnualReportsList 