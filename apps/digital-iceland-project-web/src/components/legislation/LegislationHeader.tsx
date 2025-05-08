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
  <Box paddingX={[0, 1, 2, 3]} paddingY={[0, 1, 2]}>
    <Box marginBottom={[1, 1, 2]}>
      <Text variant="h2" as="h1" color="blue600">
        {title}
      </Text>
    </Box>
    {subtitle && (
      <Box marginBottom={[1, 1, 2]}>
        <Text variant="h4" color="blue400">
          {subtitle}
        </Text>
      </Box>
    )}
    <Text variant="small" color="dark400" marginBottom={[1, 1, 2]}>
      {date} • {proposer}
    </Text>
    <Box marginBottom={[1, 1, 2]}>
      <Text>{description}</Text>
    </Box>
    <Box marginBottom={[1, 1, 2]}>
      <Link href={originalDocumentUrl} newTab>
        <Button size="small">Sjá frumvarp</Button>
      </Link>
    </Box>
    <Box marginBottom={[1, 1, 2]}>
      {relatedDocuments.map((doc, i) => (
        <Box key={i} marginBottom={[0, 0, 1]}>
          <Link href={doc.url} color="blue400" newTab>
            {doc.title}
          </Link>
        </Box>
      ))}
    </Box>
  </Box>
)

export default LegislationHeader 