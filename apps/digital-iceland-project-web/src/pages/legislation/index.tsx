import React, { useState } from 'react'
import { Box, Text, Stack } from '@island.is/island-ui/core'
import { mockLaws } from '../../mockData/legislation'
import WebReader from '../../components/WebReader'
import { LegislationSearch } from '../../components/legislation/LegislationSearch'
import { LegislationFilters } from '../../components/legislation/LegislationFilters'
import { LegislationTable } from '../../components/legislation/LegislationTable'
import { LegislationPagination } from '../../components/legislation/LegislationPagination'

const Legislation = () => {
  const [search, setSearch] = useState('')
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
  const paginatedLaws = filteredLaws.slice(
    startIndex,
    startIndex + itemsPerPage,
  )

  return (
    <Box background="blue100" paddingY={[4, 6, 8]} paddingX={[2, 3, 4]}>
      <WebReader readId="legislation-content" />
      <Box width="full" margin="auto" style={{ maxWidth: '1200px' }}>
        <Box id="legislation-content">
          <Stack space={4}>
            <Box>
              <Text variant="h1" as="h1" color="blue600">
                Legislation
              </Text>
              <Text variant="intro" color="dark400" marginTop={2}>
                Browse and search through current legislation and proposals
              </Text>
            </Box>

            <Box
              background="white"
              padding={[3, 4]}
              borderRadius="large"
              boxShadow="subtle"
            >
              <Stack space={3}>
                <Box
                  display="flex"
                  flexDirection={['column', 'row']}
                  alignItems={['stretch', 'center']}
                >
                  <Box marginBottom={[3, 0]} width="full">
                    <LegislationSearch value={search} onChange={setSearch} />
                  </Box>
                  <Box marginLeft={[0, 2]} width="full">
                    <LegislationFilters
                      status={status}
                      onStatusChange={(newStatus) => {
                        setStatus(newStatus)
                        setPage(1)
                      }}
                    />
                  </Box>
                </Box>

                <Box background="white" borderRadius="large" overflow="hidden">
                  <LegislationTable laws={paginatedLaws} />
                </Box>

                <LegislationPagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                  startIndex={startIndex}
                  endIndex={Math.min(
                    startIndex + itemsPerPage,
                    filteredLaws.length,
                  )}
                  totalItems={filteredLaws.length}
                />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default Legislation
