import { Box, GridContainer, Text, Input } from '@island.is/island-ui/core'
import { parliamentMembers } from '../../mockData/members'
import WebReader from '../../components/WebReader'
import { MemberCard } from '../../components/members/MemberCard'
import { useState } from 'react'

const Members = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredMembers = parliamentMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
          Þingmenn
        </Text>
        <Box marginBottom={4}>
          <Input
            name="memberSearch"
            label="Leita að þingmanni"
            placeholder="Sláðu inn nafn þingmanns"
            icon={{ name: 'search' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>
        <Box display="flex" flexDirection="column" style={{ gap: 16 }}>
          {filteredMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </Box>
      </Box>
    </GridContainer>
  )
}

export default Members
