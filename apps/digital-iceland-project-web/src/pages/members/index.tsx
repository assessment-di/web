import { Box, GridContainer, Text } from '@island.is/island-ui/core'
import { parliamentMembers } from '../../mockData/members'
import WebReader from '../../components/WebReader'
import { MemberCard } from '../../components/members/MemberCard'

const Members = () => {
  return (
    <GridContainer>
      <WebReader readId="members-content" />
      <Box
        background="white"
        borderRadius="large"
        padding={4}
        paddingTop={0}
        id="members-content"
      >
        <Text variant="h2" as="h1" marginBottom={4}>
          Members
        </Text>
        <Box display="flex" flexDirection="column" style={{ gap: 16 }}>
          {parliamentMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </Box>
      </Box>
    </GridContainer>
  )
}

export default Members
