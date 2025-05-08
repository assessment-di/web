import React from 'react'
import { Box, Text, LinkV2, Stack } from '@island.is/island-ui/core'

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
    <Stack space={3}>
      {reports.map((report) => (
        <Box
          key={report.year}
          padding={3}
          background="white"
          borderRadius="large"
          border="standard"
        >
          <Stack space={1}>
            <Text variant="h3" as="h3">
              {report.title}
            </Text>
            <LinkV2 href={report.url} color="blue400" underline="normal">
              View Report
            </LinkV2>
          </Stack>
        </Box>
      ))}
    </Stack>
  )
}

export default AnnualReportsList 