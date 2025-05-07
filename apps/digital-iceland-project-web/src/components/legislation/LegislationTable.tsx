import { Table } from '@island.is/island-ui/core'
import Link from 'next/link'
import { LegislationTableProps } from '../../types/legislation'

export const LegislationTable = ({ laws }: LegislationTableProps) => {
  return (
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
        {laws.map((row, i) => (
          <Table.Row key={i}>
            <Table.Data>{row.caseNumber}</Table.Data>
            <Table.Data>{row.date}</Table.Data>
            <Table.Data>
              <Link
                href={`/legislation/${row.caseNumber}`}
                style={{ color: '#0061FF' }}
              >
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
  )
} 