import { Text } from '@island.is/island-ui/core'
import { Member } from '../../types/member'

type MemberMinisterialCareerProps = {
  member: Member
}

export const MemberMinisterialCareer = ({ member }: MemberMinisterialCareerProps) => {
  if (!member.ministerialCareer || member.ministerialCareer.length === 0) {
    return null
  }

  return (
    <ul>
      {member.ministerialCareer.map((position) => (
        <li key={position}>
          <Text>{position}</Text>
        </li>
      ))}
    </ul>
  )
} 