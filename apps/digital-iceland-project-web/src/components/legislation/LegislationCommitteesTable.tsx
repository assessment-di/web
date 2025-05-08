import { Table, Text } from '@island.is/island-ui/core'

interface Committee {
  name: string
  status: string
  deadline: string
}

interface LegislationCommitteesTableProps {
  committees: Committee[]
}

export const LegislationCommitteesTable = ({ committees }: LegislationCommitteesTableProps) => {
  if (!committees.length) {
    return <Text>Engar upplýsingar um nefndir</Text>
  }
  return (
    <Table.Table>
      <Table.Head>
        <Table.Row>
          <Table.HeadData>Nafn nefndar</Table.HeadData>
          <Table.HeadData>Staða</Table.HeadData>
          <Table.HeadData>Frestur</Table.HeadData>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {committees.map((c, i) => (
          <Table.Row key={i}>
            <Table.Data>{c.name}</Table.Data>
            <Table.Data>{c.status}</Table.Data>
            <Table.Data>{c.deadline}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Table>
  )
}

export default LegislationCommitteesTable 