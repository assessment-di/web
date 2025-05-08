import { Box, Stack, Accordion, AccordionItem } from '@island.is/island-ui/core'
import { useParams } from 'react-router-dom'
import { mockLaws } from '../../mockData/legislation'
import WebReader from '../../components/WebReader'
import LegislationHeader from '../../components/legislation/LegislationHeader'
import LegislationStepper from '../../components/legislation/LegislationStepper'
import LegislationDocumentsTable from '../../components/legislation/LegislationDocumentsTable'
import LegislationDebateTable from '../../components/legislation/LegislationDebateTable'
import LegislationCommitteesTable from '../../components/legislation/LegislationCommitteesTable'
import LegislationSubscribe from '../../components/legislation/LegislationSubscribe'

const LawDetails = () => {
  const { id } = useParams<{ id: string }>()
  const law = id
    ? mockLaws.find((l) => l.caseNumber === id.toString())
    : undefined

  if (!law) {
    return (
      <Box paddingY={6}>
        <span>Lög ekki fundin</span>
      </Box>
    )
  }

  return (
    <Box width="full" margin="auto" style={{ maxWidth: '900px' }}>
      <Box
        id="law-details"
        background="white"
        paddingY={[6, 8, 10]}
        paddingX={[2, 4, 5]}
      >
        <WebReader readId="law-details" language="is" />

        <Stack space={2}>
          <Box
            display="flex"
            flexDirection={['column', 'column', 'row']}
            justifyContent="spaceBetween"
            alignItems={['flexStart', 'flexStart', 'flexStart']}
          >
            <Box flexGrow={1}>
              <LegislationHeader
                title={law.title}
                subtitle={law.subtitle}
                date={law.date}
                proposer={law.proposer}
                description={law.description}
                originalDocumentUrl={law.originalDocumentUrl}
                relatedDocuments={law.relatedDocuments}
              />
            </Box>
            <Box
              style={{ minWidth: 320, maxWidth: 320 }}
              marginTop={[4, 0, 0]}
              marginLeft={[0, 4, 4]}
            >
              <LegislationStepper status={law.status} />
            </Box>
          </Box>

          <Box marginTop={6}>
            <span
              style={{
                fontWeight: 600,
                fontSize: 24,
                marginBottom: 16,
                display: 'block',
              }}
            >
              1. umræða
            </span>
            <LegislationDocumentsTable
              date={law.date}
              originalDocumentUrl={law.originalDocumentUrl}
              proposer={law.proposer}
            />
          </Box>

          <Box marginTop={6}>
            <span
              style={{
                fontWeight: 500,
                fontSize: 20,
                marginBottom: 16,
                display: 'block',
              }}
            >
              Umræða í þingsal
            </span>
            <LegislationDebateTable
              history={law.history}
              lawTitle={law.title}
            />
          </Box>

          <Accordion>
            <AccordionItem id="committees" label="Umfjöllun í nefndum">
              <LegislationCommitteesTable committees={law.committees || []} />
            </AccordionItem>
            <AccordionItem id="subscribe" label="Áskriftir">
              <LegislationSubscribe />
            </AccordionItem>
          </Accordion>
        </Stack>
      </Box>
    </Box>
  )
}

export default LawDetails
