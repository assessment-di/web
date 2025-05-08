import { Table, Box, Text, LinkV2 } from '@island.is/island-ui/core'
import { LegislationTableProps } from '../../types/legislation'

export const LegislationTable = ({ laws }: LegislationTableProps) => {
  return (
    <Table.Table>
      <Table.Head>
        <Table.Row>
          <Table.HeadData>Málsnúmer</Table.HeadData>
          <Table.HeadData>Dagsetning</Table.HeadData>
          <Table.HeadData>Titill</Table.HeadData>
          <Table.HeadData>Frumkvæðismaður</Table.HeadData>
          <Table.HeadData>Staða</Table.HeadData>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {laws.map((row, i) => (
          <Table.Row key={i}>
            <Table.Data>{row.caseNumber}</Table.Data>
            <Table.Data>{row.date}</Table.Data>
            <Table.Data>
              <Box style={{ color: '#0061FF' }}>
                <LinkV2 href={`/legislation/${row.caseNumber}`}>
                  {row.title}
                  {row.isNew && (
                    <span
                      style={{
                        marginLeft: '8px',
                        fontSize: '12px',
                        color: '#0061FF',
                      }}
                    >
                      (Nýtt)
                    </span>
                  )}
                </LinkV2>
              </Box>
            </Table.Data>
            <Table.Data>{row.proposer}</Table.Data>
            <Table.Data>{row.status}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Table>
  )
} 