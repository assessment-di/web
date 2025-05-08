import { Table, LinkV2 } from '@island.is/island-ui/core'

interface LegislationDocumentsTableProps {
  date: string
  originalDocumentUrl: string
  proposer: string
}

export const LegislationDocumentsTable = ({ date, originalDocumentUrl, proposer }: LegislationDocumentsTableProps) => (
  <Table.Table>
    <Table.Head>
      <Table.Row>
        <Table.HeadData>Dagsetning</Table.HeadData>
        <Table.HeadData>Þingskjöl</Table.HeadData>
        <Table.HeadData>Flutningsmaður</Table.HeadData>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Data>{date}</Table.Data>
        <Table.Data>
          <LinkV2 href={originalDocumentUrl} color="blue400" newTab>
            Þingskjal
          </LinkV2>
        </Table.Data>
        <Table.Data>{proposer}</Table.Data>
      </Table.Row>
    </Table.Body>
  </Table.Table>
)

export default LegislationDocumentsTable 