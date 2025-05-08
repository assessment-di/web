import { Box, Text, Button, Link } from '@island.is/island-ui/core'

interface LegislationHeaderProps {
  title: string
  subtitle?: string
  date: string
  proposer: string
  description: string
  originalDocumentUrl: string
  relatedDocuments?: { title: string; url: string }[]
}

export const LegislationHeader = ({
  title,
  subtitle,
  date,
  proposer,
  description,
  originalDocumentUrl,
  relatedDocuments = [],
}: LegislationHeaderProps) => (
  <>
    <Text variant="h1" as="h1" color="blue600" marginBottom={1}>
      {title}
    </Text>
    {subtitle && (
      <Text variant="h3" color="blue400" marginBottom={2}>
        {subtitle}
      </Text>
    )}
    <Text variant="small" color="dark400" marginBottom={2}>
      {date} • {proposer}
    </Text>
    <Box marginBottom={2}>
      <Text>{description}</Text>
    </Box>
    <Box marginBottom={2}>
      <Link href={originalDocumentUrl} newTab>
        <Button size="small">Sjá frumvarp</Button>
      </Link>
    </Box>
    <Box marginBottom={2}>
      {relatedDocuments.map((doc, i) => (
        <Box key={i} marginBottom={1}>
          <Link href={doc.url} color="blue400" newTab>
            {doc.title}
          </Link>
        </Box>
      ))}
    </Box>
  </>
)

export default LegislationHeader 