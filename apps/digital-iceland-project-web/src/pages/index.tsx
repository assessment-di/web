import {
  Box,
  GridContainer,
  Input,
  Tabs,
  Tag,
  Button,
  Text,
  Stack,
  Link as IslandLink,
} from '@island.is/island-ui/core'
import WebReader from '../components/WebReader'
import { SimpleVideoPlayer } from '../components/SimpleVideoPlayer/SimpleVideoPlayer'
import React, { useState } from 'react'

const agendaItems = [
  {
    title: 'Parliamentary work',
    link: { label: 'Speakers list', href: '#' },
    description: null,
  },
  {
    title: 'Fishing fee (catch value in the calculation base)',
    link: null,
    description:
      'Case 351, bill from the Minister of Fisheries. — Continuation of 1st debate. ',
    extraLink: { label: 'Speakers list', href: '#' },
  },
  {
    title:
      'Environmental assessment of projects and plans (EES rules alignment)',
    link: null,
    description:
      'Case 129, bill from the Minister for the Environment, Energy and Climate. — 2nd debate.',
    bold: true,
  },
  {
    title:
      'Planning of sea and coastal areas and planning laws (regional council, etc.)',
    link: null,
    description:
      'Case 147, bill from the Minister of Social Affairs and Housing. — 2nd debate.',
    bold: true,
    underline: true,
  },
  {
    title:
      'Resolution no. 317/2023 on amendment to Annex II to the EEA Agreement etc. (technical regulations, standards, tests and certification, etc.)',
    link: null,
    description:
      'Case 124, parliamentary resolution from the Minister for Foreign Affairs. — Further debate.',
    bold: true,
  },
]

const Home = () => {
  const [activeTab, setActiveTab] = useState('meetings')
  return (
    <Box>
      <WebReader readId="main-content" />
      <GridContainer id="main-content">
        <Box marginTop={4}>
          <Text variant="h1" as="h1">
            Althingi
          </Text>
          <Text marginBottom={2} color="dark400" variant="default">
            Legislation is the main task of Althingi, which also has an
            extensive supervisory role
          </Text>
          <Box marginBottom={3}>
            <Input
              name="search"
              icon={{ name: 'search' }}
              placeholder="Search Althingi"
              size="md"
              backgroundColor="blue"
              autoComplete="off"
            />
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            marginBottom={3}
            style={{ gap: 8 }}
          >
            <Button variant="ghost" size="default">
              Law collection
            </Button>
            <Button variant="ghost" size="default">
              Bills
            </Button>
            <Button variant="ghost" size="default">
              Members of Parliament
            </Button>
            <Button variant="ghost" size="default">
              Budget 2024
            </Button>
          </Box>
          <Box background="white" borderRadius="large" padding={6}>
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
