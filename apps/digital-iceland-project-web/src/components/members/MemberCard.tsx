import { Box, Text } from '@island.is/island-ui/core'
import Link from 'next/link'
import { Member } from '../../types/member'

type MemberCardProps = {
  member: Member
}

export const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <Link
      href={`/members/${member.id}`}
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
  )
} 