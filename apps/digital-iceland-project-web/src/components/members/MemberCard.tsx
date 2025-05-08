import { Box, LinkV2, Text } from '@island.is/island-ui/core'
import { Member } from '../../types/member'

type MemberCardProps = {
  member: Member
}

export const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <LinkV2 href={`/members/${member.id}`}>
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
            alt={`Mynd af ${member.name}, ${member.title}`}
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
    </LinkV2>
  )
}
