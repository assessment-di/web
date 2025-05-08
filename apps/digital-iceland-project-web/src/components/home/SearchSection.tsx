import { Box, Input, Text, Stack, LinkV2 } from '@island.is/island-ui/core'
import { useState, useEffect } from 'react'
import { mockLaws } from '../../mockData/legislation'
import { parliamentMembers } from '../../mockData/members'
import { useLanguage } from '../../contexts/language/LanguageContext'

interface SearchResult {
  type: 'law' | 'member'
  id: string
  title: string
  subtitle?: string
  link: string
  status?: string
}

interface SearchSectionProps {
  placeholder: string
  buttonText: string
}

const searchSuggestions = ['Alma', 'Arna', 'Loftslag']

export const SearchSection = ({
  placeholder,
  buttonText,
}: SearchSectionProps) => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const { t, language } = useLanguage()

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
            status: law.status,
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
        {t('home.search.title')}
      </Text>
      <Text marginBottom={4} color="dark400" variant="default">
        {t('home.search.subtitle')}
      </Text>
      <Box marginBottom={2}>
        <Input
          name="search"
          icon={{ name: 'search' }}
          placeholder={placeholder}
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
            padding={3}
            marginTop={1}
            style={{
              position: 'absolute',
              width: '100%',
              zIndex: 1,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              maxHeight: '400px',
              overflowY: 'auto',
            }}
          >
            <Stack space={3}>
              {searchResults.map((result) => (
                <LinkV2 
                  key={`${result.type}-${result.id}`} 
                  href={`/${language}${result.link}`}
                >
                  <Box 
                    padding={2}
                    borderRadius="large"
                    style={{ 
                      transition: 'background-color 0.2s ease',
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f5f5f5'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    <Box display="flex" justifyContent="spaceBetween" alignItems="flexStart">
                      <Box>
                        <Text variant="h4" as="h2" marginBottom={1}>
                          {result.title}
                        </Text>
                        {result.subtitle && (
                          <Text color="dark400" variant="default" marginBottom={1}>
                            {result.subtitle}
                          </Text>
                        )}
                        <Box display="flex" alignItems="center" style={{ gap: 8 }}>
                          {result.status && (
                            <Box
                              display="inlineBlock"
                              background="blue100"
                              borderRadius="large"
                              paddingY={1}
                              paddingX={2}
                            >
                              <Text color="blue600" variant="small" fontWeight="semiBold">
                                {result.status}
                              </Text>
                            </Box>
                          )}
                          <Text color="blue400" variant="small">
                            {result.type === 'law'
                              ? t('home.search.resultType.law')
                              : t('home.search.resultType.member')}
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </LinkV2>
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
