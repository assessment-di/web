import {
  Box,
  GridContainer,
  Input,
  Tabs,
  Tag,
  Text,
  Stack,
  Link as IslandLink,
} from '@island.is/island-ui/core'
import WebReader from '../components/WebReader'
import { SimpleVideoPlayer } from '../components/SimpleVideoPlayer/SimpleVideoPlayer'
import { useState, useEffect } from 'react'
import { agendaItems } from '../mockData/home'
import { mockLaws } from '../mockData/legislation'
import { parliamentMembers } from '../mockData/members'
import Link from 'next/link'

const searchSuggestions = [
  'Law collection',
  'Bills',
  'Members of Parliament',
  'Budget 2024',
]

interface SearchResult {
  type: 'law' | 'member'
  id: string
  title: string
  subtitle?: string
  link: string
}

const Home = () => {
  const [activeTab, setActiveTab] = useState('meetings')
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (searchValue.length > 0) {
      const results: SearchResult[] = []

      // Search in laws
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

      // Search in members
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
    <Box>
      <WebReader readId="main-content" />
      <GridContainer id="main-content">
        <Box marginTop={4}>
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            style={{ gap: 24 }}
          >
            <Box style={{ position: 'relative', width: '100%' }}>
              <Text variant="h1" as="h1" marginBottom={2}>
                Althingi
              </Text>
              <Text marginBottom={4} color="dark400" variant="default">
                Legislation is the main task of Althingi, which also has an
                extensive supervisory role
              </Text>
              <Box marginBottom={2}>
                <Input
                  name="search"
                  icon={{ name: 'search' }}
                  placeholder="Search Althingi"
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
                              {result.type === 'law'
                                ? 'Legislation'
                                : 'Member of Parliament'}
                            </Text>
                          </Box>
                        </Link>
                      ))}
                    </Stack>
                  </Box>
                )}
              </Box>
              <Box display="flex" flexWrap="wrap" style={{ gap: 8 }}>
                {searchSuggestions.map((suggestion, idx) => (
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
            <Box display={['none', 'none', 'block']}>
              <SimpleVideoPlayer
                controls={false}
                url="https://videos.ctfassets.net/8k0h54kbe6bj/6evxh8D2Pt6nrSJa2F0KQH/bd0867a88663f70c1b211fbc86f122ac/vor2022-desktop.mp4"
                title="Althingi video"
              />
            </Box>
          </Box>
          <Box
            background="white"
            borderRadius="large"
            padding={6}
            marginTop={6}
          >
            <Tabs
              label="Timetable Tabs"
              tabs={[
                {
                  id: 'meetings',
                  label: 'Meetings and visits',
                  content: (
                    <Box paddingY={6} paddingX={[2, 6]}>
                      <Box
                        display="flex"
                        alignItems="center"
                        style={{ gap: 16 }}
                        marginBottom={5}
                      >
                        <Text variant="h3" as="h2" marginBottom={0}>
                          Wednesday, May 7
                        </Text>
                        <Box style={{ fontSize: 18 }}>
                          <Tag variant="mint" outlined>
                            Sigurjón
                          </Tag>
                        </Box>
                      </Box>
                      <Stack space={3}>
                        {[
                          {
                            time: '09:00',
                            title: 'Finance Committee meeting',
                            href: '#',
                          },
                          {
                            time: '09:00',
                            title:
                              'Constitutional and Supervisory Committee meeting',
                            href: '#',
                          },
                          {
                            time: '09:00',
                            title: 'Welfare Committee meeting',
                            href: '#',
                          },
                          {
                            time: '09:00',
                            title: 'Democracy event in Kvos - Breiðholt School',
                            href: '#',
                          },
                          {
                            time: '10:30',
                            title: 'Parliament session',
                            href: '#',
                          },
                        ].map((item, idx) => (
                          <Text key={idx} marginBottom={0}>
                            {item.time}{' '}
                            <IslandLink href={item.href}>
                              {item.title}
                            </IslandLink>
                          </Text>
                        ))}
                      </Stack>
                    </Box>
                  ),
                },
                {
                  id: 'agenda',
                  label: 'Agenda',
                  content: (
                    <Box background="blue100" borderRadius="large" padding={6}>
                      <Text variant="h3" as="h2" marginBottom={1}>
                        Agenda of the 35th Parliamentary Session
                      </Text>
                      <Text color="dark400" marginBottom={2}>
                        Tuesday, May 6, session started at 13:30
                      </Text>
                      <Box>
                        {agendaItems.map((item, idx) => (
                          <Box
                            key={idx}
                            display="flex"
                            alignItems="flexStart"
                            marginBottom={3}
                          >
                            <Box
                              borderRadius="full"
                              background={
                                idx === 2 || idx === 3 || idx === 4
                                  ? 'purple100'
                                  : 'blue100'
                              }
                              color={
                                idx === 2 || idx === 3 || idx === 4
                                  ? 'purple400'
                                  : 'blue400'
                              }
                              borderColor={
                                idx === 2 || idx === 3 || idx === 4
                                  ? 'purple400'
                                  : 'blue400'
                              }
                              borderWidth="standard"
                              borderStyle="solid"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              marginRight={3}
                              style={{ minWidth: 32, minHeight: 32 }}
                            >
                              <Text variant="h5" as="span">
                                {idx + 1}
                              </Text>
                            </Box>
                            <Box flexGrow={1}>
                              <Text
                                as="div"
                                fontWeight={item.bold ? 'semiBold' : 'regular'}
                                variant="h5"
                                marginBottom={1}
                              >
                                {item.underline ? (
                                  <u>{item.title}</u>
                                ) : (
                                  item.title
                                )}
                              </Text>
                              {item.link && (
                                <IslandLink href={item.link.href}>
                                  <u>{item.link.label}</u>
                                </IslandLink>
                              )}
                              {item.description && (
                                <Text as="div" color="dark400" marginBottom={1}>
                                  {item.description}{' '}
                                  {item.extraLink && (
                                    <IslandLink href={item.extraLink.href}>
                                      <u>{item.extraLink.label}</u>
                                    </IslandLink>
                                  )}
                                </Text>
                              )}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ),
                },
              ]}
              selected={activeTab}
              onChange={setActiveTab}
              variant="default"
            />
            <Box marginTop={6}>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Box
                  background="red100"
                  borderRadius="standard"
                  paddingX={2}
                  paddingY={1}
                  marginRight={2}
                >
                  <Text color="red600" fontWeight="semiBold" variant="small">
                    Live
                  </Text>
                </Box>
                <Text variant="h5" as="h3">
                  Broadcast
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection={['column', 'row']}
                style={{ gap: 32 }}
              >
                <Box style={{ flex: 1 }}>
                  <SimpleVideoPlayer
                    url="https://www.youtube.com/watch?v=YjkLqcRmL0M"
                    title="Althingi"
                  />
                </Box>
                <Box style={{ flex: 2 }}>
                  <Text>
                    The next parliamentary session will be on Wednesday, May 7
                    at 15:00
                  </Text>
                  <Box marginTop={2} display="flex" style={{ gap: 16 }}>
                    <IslandLink href="#">Other broadcast options</IslandLink>
                    <IslandLink href="#">Recordings</IslandLink>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </GridContainer>
    </Box>
  )
}

export default Home
