import React, { useState } from 'react'
import {
  Box,
  Stack,
  Text,
  Input,
  Select,
  Pagination,
  Table,
} from '@island.is/island-ui/core'
import Link from 'next/link'
import { mockLaws } from '../mockData/legislation'

const legislationPeriods = [
  { label: '156: 2025', value: '156:2025' },
  { label: '155: 2024', value: '155:2024' },
]

const statusOptions = [
  { label: 'All', value: 'all' },
  { label: '1st discussion', value: '1st' },
  { label: 'Committee opinion', value: 'committee' },
  { label: 'Law', value: 'law' },
]

const Legislation = () => {
  const [search, setSearch] = useState('')
  const [period, setPeriod] = useState(legislationPeriods[0])
  const [status, setStatus] = useState(statusOptions[0])
  const [page, setPage] = useState(1)

  return (
    <Box paddingY={6} paddingX={2} background="blue100">
      <Text variant="h1" as="h1" marginBottom={3}>
        Legislation
      </Text>
      <Stack space={2} align="center">
        <Input
          name="search"
          value={search}
          placeholder="Search legislation"
          onChange={(e) => setSearch(e.target.value)}
          size="md"
        />
        <Select
          label="Legislation period"
          name="period"
          size="sm"
          value={period}
          options={legislationPeriods}
          onChange={(opt) => opt && setPeriod(opt)}
        />
        <Select
          label="Status"
          name="status"
          size="sm"
          value={status}
          options={statusOptions}
          onChange={(opt) => opt && setStatus(opt)}
        />
      </Stack>
      <Table.Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadData>Case No.</Table.HeadData>
            <Table.HeadData>Date</Table.HeadData>
            <Table.HeadData>Title</Table.HeadData>
            <Table.HeadData>Proposer</Table.HeadData>
            <Table.HeadData>Status</Table.HeadData>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {mockLaws.map((row, i) => (
            <Table.Row key={i}>
              <Table.Data>{row.caseNumber}</Table.Data>
              <Table.Data>{row.date}</Table.Data>
              <Table.Data>
                <Link href={`/legislation/${row.caseNumber}`} style={{ color: '#0061FF' }}>
                  {row.title}{' '}
                  {row.subtitle && (
                    <span style={{ color: '#6D6D6D', fontWeight: 400 }}>
                      {' '}
                      {row.subtitle}
                    </span>
                  )}
                </Link>
              </Table.Data>
              <Table.Data>{row.proposer}</Table.Data>
              <Table.Data>{row.status}</Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Table>
      <Box display="flex" justifyContent="flexEnd" marginTop={3}>
        <Pagination
          totalPages={47}
          page={page}
          renderLink={(pageNum, className, children) => (
            <button
              className={className}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setPage(pageNum)}
              type="button"
            >
              {children}
            </button>
          )}
        />
      </Box>
      <Text variant="small" color="dark400" marginTop={2}>
        Showing 1-10 out of 470
      </Text>
    </Box>
  )
}

export default Legislation
