import React, { useState } from 'react'
import { Box, Text } from '@island.is/island-ui/core'
import { mockLaws } from '../mockData/legislation'
import WebReader from '../components/WebReader'
import { LegislationSearch } from '../components/legislation/LegislationSearch'
import { LegislationFilters } from '../components/legislation/LegislationFilters'
import { LegislationTable } from '../components/legislation/LegislationTable'
import { LegislationPagination } from '../components/legislation/LegislationPagination'

const Legislation = () => {
  const [search, setSearch] = useState('')
  const [period, setPeriod] = useState({ label: '155: 2024', value: '155:2024' })
  const [status, setStatus] = useState({ label: 'All', value: 'all' })
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  const filteredLaws = mockLaws.filter((law) => {
    const matchesSearch =
      law.title.toLowerCase().includes(search.toLowerCase()) ||
      law.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      law.proposer.toLowerCase().includes(search.toLowerCase())

    const matchesStatus = status.value === 'all' || law.status === status.label

    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredLaws.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const paginatedLaws = filteredLaws.slice(startIndex, startIndex + itemsPerPage)

  return (
    <Box paddingY={6} paddingX={2} background="blue100">
      <WebReader readId="legislation-content" />
      <Box id="legislation-content">
        <Text variant="h1" as="h1" marginBottom={3}>
          Legislation
        </Text>
        <Box marginBottom={3}>
          <LegislationSearch value={search} onChange={setSearch} />
        </Box>
        <Box marginBottom={3}>
          <LegislationFilters
            period={period}
            status={status}
            onPeriodChange={setPeriod}
            onStatusChange={(newStatus) => {
              setStatus(newStatus)
              setPage(1)
            }}
          />
        </Box>
        <LegislationTable laws={paginatedLaws} />
        <LegislationPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
          startIndex={startIndex}
          endIndex={Math.min(startIndex + itemsPerPage, filteredLaws.length)}
          totalItems={filteredLaws.length}
        />
      </Box>
    </Box>
  )
}

export default Legislation
