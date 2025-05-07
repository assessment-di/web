import { Box, Input, Text, Stack } from '@island.is/island-ui/core'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { mockLaws } from '../../mockData/legislation'
import { parliamentMembers } from '../../mockData/members'

interface SearchResult {
  type: 'law' | 'member'
  id: string
  title: string
  subtitle?: string
  link: string
}

const searchSuggestions = ['Alma', 'Arna', 'Loftslag']

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (searchValue.length > 0) {
      const results: SearchResult[] = []

      mockLaws.forEach((law) => {
        if (
          law.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          law.subtitle?.toLowerCase().includes(searchValue.toLowerCase()) ||
          law.proposer.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          results.push({
            type: 'law',
            id: law.caseNumber,
            title: law.title,
            subtitle: law.subtitle,
            link: `/legislation/${law.caseNumber}`,
          })
        }
      })

      parliamentMembers.forEach((member) => {
        if (
          member.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          member.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          member.party.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          results.push({
            type: 'member',
            id: member.id,
            title: member.name,
            subtitle: member.title,
            link: `/members/${member.id}`,
          })
        }
      })

      setSearchResults(results)
      setShowResults(true)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }, [searchValue])

  return (
    <Box style={{ position: 'relative', width: '100%' }}>
      <Text variant="h1" as="h1" marginBottom={2}>
        Alþingi
      </Text>
      <Text marginBottom={4} color="dark400" variant="default">
        Löggjöf er aðalverkefni Alþingis, sem hefur einnig umfangsmikið eftirlit
      </Text>
      <Box marginBottom={2}>
        <Input
          name="search"
          icon={{ name: 'search' }}
          placeholder="Leita á Alþingi"
          size="md"
          backgroundColor="blue"
          autoComplete="off"
          inputMode="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {showResults && searchResults.length > 0 && (
          <Box
            background="white"
            borderRadius="large"
            padding={2}
            marginTop={1}
            style={{
              position: 'absolute',
              width: '100%',
              zIndex: 1,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Stack space={2}>
              {searchResults.map((result) => (
                <Link
                  key={`${result.type}-${result.id}`}
                  href={result.link}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Box
                    padding={2}
                    background="blue100"
                    borderRadius="large"
                    style={{ cursor: 'pointer' }}
                  >
                    <Text variant="h5" as="h3" marginBottom={1}>
                      {result.title}
                    </Text>
                    {result.subtitle && (
                      <Text color="dark400" variant="small">
                        {result.subtitle}
                      </Text>
                    )}
                    <Text color="blue400" variant="small">
                      {result.type === 'law' ? 'Löggjöf' : 'Þingmaður'}
                    </Text>
                  </Box>
                </Link>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
      <Box display="flex" flexWrap="wrap" style={{ gap: 8 }}>
        {searchSuggestions.map((suggestion) => (
          <Box
            key={suggestion}
            background="blue100"
            borderRadius="large"
            paddingY={1}
            paddingX={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ cursor: 'pointer' }}
            onClick={() => setSearchValue(suggestion)}
          >
            <Text color="blue400" fontWeight="semiBold" variant="small">
              {suggestion}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
