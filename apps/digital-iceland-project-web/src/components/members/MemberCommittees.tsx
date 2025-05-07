import { Box, Text } from '@island.is/island-ui/core'
import { Member } from '../../types/member'

type MemberCommitteesProps = {
  member: Member
}

export const MemberCommittees = ({ member }: MemberCommitteesProps) => {
  const presentCommittees = member.presentCommittees?.length
    ? member.presentCommittees
    : member.committees || []

  return (
    <>
      <Box marginBottom={2}>
        <Text variant="default">Núverandi nefndir</Text>
        <ul style={{ marginTop: 8 }}>
          {presentCommittees.map((committee) => (
            <li key={committee}>
              <Text>{committee}</Text>
            </li>
          ))}
        </ul>
      </Box>
      {member.previousCommittees && member.previousCommittees.length > 0 && (
        <Box>
          <Text variant="default">Fyrri nefndir</Text>
          <ul style={{ marginTop: 8 }}>
            {member.previousCommittees.map((committee) => (
              <li key={committee}>
                <Text>{committee}</Text>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </>
  )
} 