import {
  Box,
  Text,
  GridContainer,
  Stack,
} from '@island.is/island-ui/core'
import { parliamentMembers } from './mockData/members'
import { useParams } from 'react-router-dom'

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
    <Box background="blue100" paddingY={6}>
      <GridContainer>
        <Stack space={4}>
          <Box display="flex" alignItems="center" style={{ gap: '16px' }}>
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                style={{ width: 120, height: 120, borderRadius: '50%' }}
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
              <Text variant="h1" as="h1" color="blue400">
                {member.name}
              </Text>
              <Text variant="h3" as="h2">
                {member.party}
              </Text>
            </Box>
          </Box>

          <Box>
            <Text variant="h2" as="h2" marginBottom={2}>
              Parliamentary Career
            </Text>
            <Text>{member.parliamentaryCareer}</Text>
          </Box>

          <Box>
            <Text variant="h2" as="h2" marginBottom={2}>
              Contact Information
            </Text>
            <Stack space={2}>
              <Text>Email: {member.email}</Text>
              <Text>Phone: {member.phone}</Text>
            </Stack>
          </Box>

          <Box>
            <Text variant="h2" as="h2" marginBottom={2}>
              Constituency
            </Text>
            <Text>{member.constituency}</Text>
          </Box>

          <Box>
            <Text variant="h2" as="h2" marginBottom={2}>
              Term
            </Text>
            <Text>
              {member.termStart} - {member.termEnd}
            </Text>
          </Box>

          <Box>
            <Text variant="h2" as="h2" marginBottom={2}>
              Current Committees
            </Text>
            <Stack space={1}>
              {member.committees.map((committee) => (
                <Text key={committee}>{committee}</Text>
              ))}
            </Stack>
          </Box>

          {member.previousCommittees && member.previousCommittees.length > 0 && (
            <Box>
              <Text variant="h2" as="h2" marginBottom={2}>
                Previous Committees
              </Text>
              <Stack space={1}>
                {member.previousCommittees.map((committee) => (
                  <Text key={committee}>{committee}</Text>
                ))}
              </Stack>
            </Box>
          )}

          {member.ministerialCareer && member.ministerialCareer.length > 0 && (
            <Box>
              <Text variant="h2" as="h2" marginBottom={2}>
                Ministerial Career
              </Text>
              <Stack space={1}>
                {member.ministerialCareer.map((position) => (
                  <Text key={position}>{position}</Text>
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
      </GridContainer>
    </Box>
  )
}

export default Details
