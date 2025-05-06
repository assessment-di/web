import { Box, GridContainer, Text } from '@island.is/island-ui/core'
import { Link } from 'react-router-dom'
import { parliamentMembers } from '../../mockData/members'

const Members = () => {
  return (
    <Box background="blue100" paddingY={6}>
      <GridContainer>
        <Box background="white" borderRadius="large" padding={4}>
          <Text variant="h2" as="h1" marginBottom={4}>
            Members
          </Text>
          <Box display="flex" flexDirection="column" style={{ gap: 16 }}>
            {parliamentMembers.map((member) => (
              <Link
                key={member.id}
                to={`/members/${member.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Box
                  background="blue100"
                  borderRadius="large"
                  padding={3}
                  display="flex"
                  alignItems="center"
                  style={{ gap: 16 }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: '#eee',
                      }}
                    />
                  )}
                  <Box>
                    <Text variant="h4" as="h2">
                      {member.name}
                    </Text>
                    <Text>{member.title}</Text>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </GridContainer>
    </Box>
  )
}

export default Members
