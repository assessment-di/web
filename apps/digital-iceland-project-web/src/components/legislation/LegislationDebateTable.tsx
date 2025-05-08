import { Table } from '@island.is/island-ui/core'

interface DebateHistory {
  date: string
  event: string
  description?: string
}

interface LegislationDebateTableProps {
  history: DebateHistory[]
  lawTitle: string
}

export const LegislationDebateTable = ({ history, lawTitle }: LegislationDebateTableProps) => (
  <Table.Table>
    <Table.Head>
      <Table.Row>
        <Table.HeadData>Dagsetning</Table.HeadData>
        <Table.HeadData>Þingfundur</Table.HeadData>
        <Table.HeadData>Tími umræðu</Table.HeadData>
        <Table.HeadData>Tegund umræðu</Table.HeadData>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {history.map((h, i) => (
        <Table.Row key={i}>
          <Table.Data>{h.date}</Table.Data>
          <Table.Data>{lawTitle}</Table.Data>
          <Table.Data>-</Table.Data>
          <Table.Data>{h.event}</Table.Data>
        </Table.Row>
      ))}
    </Table.Body>
  </Table.Table>
)

export default LegislationDebateTable 