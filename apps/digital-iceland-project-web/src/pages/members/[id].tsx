import {
  Box,
  Text,
  GridContainer,
  Stack,
  Button,
  Icon,
  Accordion,
  AccordionItem,
} from '@island.is/island-ui/core'
import { useParams } from 'react-router-dom'
import { parliamentMembers } from '../../mockData/members'
import WebReader from '../../components/WebReader'

const Details = () => {
  const { id } = useParams<{ id: string }>()
  const member = parliamentMembers.find((m) => m.id === id)

  if (!member) {
    return (
      <Box paddingY={6}>
        <GridContainer>
          <Text>Member not found</Text>
        </GridContainer>
      </Box>
    )
  }

  return (
    <GridContainer>
      <Box display="flex">
        <Box flexGrow={1}>
          <WebReader readId="member-details" language="en" />
          <Box
            background="white"
            borderRadius="large"
            padding={4}
            paddingTop={0}
            display="flex"
            alignItems="center"
            justifyContent="spaceBetween"
            marginBottom={6}
            style={{ gap: 24 }}
            id="member-details"
          >
            <Box display="flex" alignItems="center" style={{ gap: 24 }}>
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: '#eee',
                  }}
                />
              )}
              <Box>
                <Text variant="h2" as="h1">
                  {member.name}
                </Text>
                <Stack space={1}>
                  <Text>
                    Title <b>{member.title}</b>
                  </Text>
                  <Text>
                    Ministry <b>{member.ministry}</b>
                  </Text>
                  <Text>
                    Party <b>{member.party}</b>
                  </Text>
                  <Text>
                    Date of birth <b>{member.dateOfBirth}</b>
                  </Text>
                </Stack>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ gap: 16, marginTop: 8 }}
                >
                  <a
                    href={`mailto:${member.email}`}
                    style={{ color: '#0061ff' }}
                  >
                    <Icon icon="mail" type="outline" />
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    style={{ color: '#0061ff' }}
                  >
                    <Icon icon="call" type="outline" />
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#0061ff' }}
                    >
                      <Icon icon="link" type="outline" />
                    </a>
                  )}
                </Box>
              </Box>
            </Box>
            <Button icon="share" variant="ghost" size="small">
              Share profile
            </Button>
          </Box>

          <Accordion>
            <AccordionItem
              id="parliamentary-career"
              label="Parliamentary career"
            >
              <Text>{member.parliamentaryCareer}</Text>
            </AccordionItem>
            <AccordionItem id="title" label="Title">
              <Text>{member.title}</Text>
            </AccordionItem>
            <AccordionItem id="committees" label="Committees">
              <Box marginBottom={2}>
                <Text variant="default">Present committees</Text>
                <ul style={{ marginTop: 8 }}>
                  {(member.presentCommittees &&
                  member.presentCommittees.length > 0
                    ? member.presentCommittees
                    : member.committees || []
                  ).map((committee) => (
                    <li key={committee}>
                      <Text>{committee}</Text>
                    </li>
                  ))}
                </ul>
              </Box>
              {member.previousCommittees &&
                member.previousCommittees.length > 0 && (
                  <Box>
                    <Text variant="default">Previous committees</Text>
                    <ul style={{ marginTop: 8 }}>
                      {member.previousCommittees.map((committee) => (
                        <li key={committee}>
                          <Text>{committee}</Text>
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}
            </AccordionItem>
            {member.ministerialCareer && member.ministerialCareer.length > 0 && (
              <AccordionItem id="ministerial-career" label="Ministerial career">
                <ul>
                  {member.ministerialCareer.map((position) => (
                    <li key={position}>
                      <Text>{position}</Text>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            )}
          </Accordion>
        </Box>
      </Box>
    </GridContainer>
  )
}

export default Details
