import { Box, GridContainer, Input, Tabs, Tag, Button, Text, Stack, Link as IslandLink } from '@island.is/island-ui/core'
import WebReader from '../components/WebReader'
import { SimpleVideoPlayer } from '../components/SimpleVideoPlayer/SimpleVideoPlayer'
import React, { useState } from 'react'

const timetableTabs = [
  { label: 'Fundir og heimsóknir', id: 'meetings' },
  { label: 'Dagskrá', id: 'agenda' },
]

const timetableData = [
  {
    time: 'Kl. 09:00',
    title: 'Fundur í fjárlaganefnd',
    href: '#',
  },
  {
    time: 'Kl. 09:00',
    title: 'Fundur í stjórnskipunar- og eftirlitsnefnd',
    href: '#',
  },
  {
    time: 'Kl. 09:00',
    title: 'Fundur í velferðarnefnd',
    href: '#',
  },
  {
    time: 'Kl. 09:00',
    title: 'Lýðræðisleiksin í Kvos - Breiðholtskóli',
    href: '#',
  },
  {
    time: 'Kl. 10:30',
    title: 'Þingfundur',
    href: '#',
  },
]

const Home = () => {
  const [activeTab, setActiveTab] = useState('meetings')
  return (
    <Box>
      <WebReader readId="main-content" />
      <GridContainer id="main-content">
        <Box marginTop={4}>
          <Text variant="h1" as="h1">Althingi</Text>
          <Text marginBottom={2} color="dark400" variant="default">
            Legislation is the main task of Althingi, which also has an extensive supervisory role
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
          <Box display="flex" flexWrap="wrap" marginBottom={3} style={{ gap: 8 }}>
            <Button variant="ghost" size="default">Law collection</Button>
            <Button variant="ghost" size="default">Bills</Button>
            <Button variant="ghost" size="default">Members of Parliament</Button>
            <Button variant="ghost" size="default">Budget 2024</Button>
          </Box>
          <Box background="white" borderRadius="large" padding={6}>
            <Tabs
              label="Timetable Tabs"
              tabs={[
                { id: 'meetings', label: 'Meetings and visits', content: null },
                { id: 'agenda', label: 'Agenda', content: null },
              ]}
              selected={activeTab}
              onChange={setActiveTab}
              variant="default"
            />
            <Box paddingTop={2}>
              <Box display="flex" alignItems="center" style={{ gap: 8 }}>
                <Text variant="h3" as="h2" marginBottom={1}>
                  Wednesday, May 7
                </Text>
                <Box style={{ fontSize: 18 }}>
                  <Tag variant="mint" outlined>Sigurjón</Tag>
                </Box>
              </Box>
              <Stack space={1}>
                {[
                  { time: '09:00', title: 'Finance Committee meeting', href: '#' },
                  { time: '09:00', title: 'Constitutional and Supervisory Committee meeting', href: '#' },
                  { time: '09:00', title: 'Welfare Committee meeting', href: '#' },
                  { time: '09:00', title: 'Democracy event in Kvos - Breiðholt School', href: '#' },
                  { time: '10:30', title: 'Parliament session', href: '#' },
                ].map((item, idx) => (
                  <Text key={idx}>
                    {item.time} <IslandLink href={item.href}>{item.title}</IslandLink>
                  </Text>
                ))}
              </Stack>
              <Box marginTop={3}>
                <Button variant="ghost" icon="arrowForward" size="default">More</Button>
              </Box>
            </Box>
            <Box marginTop={6}>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Box
                  background="red100"
                  borderRadius="standard"
                  paddingX={2}
                  paddingY={1}
                  marginRight={2}
                >
                  <Text color="red600" fontWeight="semiBold" variant="small">Live</Text>
                </Box>
                <Text variant="h5" as="h3">Broadcast</Text>
              </Box>
              <Box display="flex" flexDirection={["column", "row"]} style={{ gap: 32 }}>
                <Box style={{ flex: 1 }}>
                  <SimpleVideoPlayer
                    url="https://www.youtube.com/watch?v=YjkLqcRmL0M"
                    title="Althingi"
                  />
                </Box>
                <Box style={{ flex: 2 }}>
                  <Text>The next parliamentary session will be on Wednesday, May 7 at 15:00</Text>
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
