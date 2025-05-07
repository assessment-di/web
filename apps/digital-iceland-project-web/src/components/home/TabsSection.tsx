import { Box, Tabs, Text, Stack, Link as IslandLink, Tag } from '@island.is/island-ui/core'
import { useState } from 'react'
import { agendaItems } from '../../mockData/home'

export const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('meetings')

  const meetingsContent = (
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
            title: 'Constitutional and Supervisory Committee meeting',
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
            {item.time} <IslandLink href={item.href}>{item.title}</IslandLink>
          </Text>
        ))}
      </Stack>
    </Box>
  )

  const agendaContent = (
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
              background={idx === 2 || idx === 3 || idx === 4 ? 'purple100' : 'blue100'}
              color={idx === 2 || idx === 3 || idx === 4 ? 'purple400' : 'blue400'}
              borderColor={idx === 2 || idx === 3 || idx === 4 ? 'purple400' : 'blue400'}
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
                {item.underline ? <u>{item.title}</u> : item.title}
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
  )

  return (
    <Box background="white" borderRadius="large" padding={6} marginTop={6}>
      <Tabs
        label="Timetable Tabs"
        tabs={[
          {
            id: 'meetings',
            label: 'Meetings and visits',
            content: meetingsContent,
          },
          {
            id: 'agenda',
            label: 'Agenda',
            content: agendaContent,
          },
        ]}
        selected={activeTab}
        onChange={setActiveTab}
        variant="default"
      />
    </Box>
  )
} 