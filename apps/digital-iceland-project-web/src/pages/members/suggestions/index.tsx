import { Box, Text, Stack, LinkV2 } from '@island.is/island-ui/core'

interface Suggestion {
  id: string
  title: string
  date: string
  author: { name: string }
}

const mockSuggestions: Suggestion[] = [
  {
    id: '1',
    title: 'Aðgerðaáætlun gegn útbreiðslu sýklalyfjaónæmis 2025-2029',
    date: '2025-02-10',
    author: { name: 'Alma D. Möller' },
  },
  {
    id: '2',
    title: 'Krabbameinsáætlun 2025-2029',
    date: '2025-02-10',
    author: { name: 'Alma D. Möller' },
  },
]

const SuggestionsPage = () => {
  return (
    <Box padding={[3, 3, 4]}>
      <Stack space={4}>
        <Text variant="h1" as="h1">
          Alma D. Möller: tillögur að þingsályktunum
        </Text>
        <Text variant="h2" as="h2">1. flytjandi</Text>
        <Text variant="h3" as="h3">156. löggjafarþing, 2025</Text>
        <Box marginTop={2}>
          <ol style={{ paddingLeft: 20 }}>
            {mockSuggestions.map((suggestion, idx) => (
              <li key={suggestion.id} style={{ marginBottom: 12 }}>
                <LinkV2 href={`#`} color="blue400">
                  {suggestion.title}
                </LinkV2>
                {', '}
                {new Date(suggestion.date).toLocaleDateString('is-IS', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </li>
            ))}
          </ol>
        </Box>
      </Stack>
    </Box>
  )
}

export default SuggestionsPage
