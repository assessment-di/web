import {
  Box,
  Text,
  GridContainer,
  Accordion,
  AccordionItem,
} from '@island.is/island-ui/core'
import { useParams } from 'react-router-dom'
import { parliamentMembers } from '../../mockData/members'
import WebReader from '../../components/WebReader'
import { MemberHeader } from '../../components/members/MemberHeader'
import { MemberCommittees } from '../../components/members/MemberCommittees'
import { MemberMinisterialCareer } from '../../components/members/MemberMinisterialCareer'

const Details = () => {
  const { id } = useParams<{ id: string }>()
  const member = parliamentMembers.find((m) => m.id === id)

  if (!member) {
    return (
      <Box paddingY={6}>
        <GridContainer>
          <Text>Þingmaður fannst ekki</Text>
        </GridContainer>
      </Box>
    )
  }

  return (
    <GridContainer>
      <Box
        display="flex"
        flexDirection={['column', 'column', 'row']}
        width="full"
        paddingX={[2, 2, 0]}
        paddingY={[2, 2, 2]}
      >
        <Box flexGrow={1} width="full">
          <WebReader readId="member-details" language="en" />
          <MemberHeader member={member} />

          <Accordion>
            <AccordionItem id="parliamentary-career" label="Þingferill">
              <Text>{member.parliamentaryCareer}</Text>
            </AccordionItem>
            <AccordionItem id="title" label="Titill">
              <Text>{member.title}</Text>
            </AccordionItem>
            <AccordionItem id="committees" label="Nefndir">
              <MemberCommittees member={member} />
            </AccordionItem>
            {member.ministerialCareer && member.ministerialCareer.length > 0 && (
              <AccordionItem id="ministerial-career" label="Ráðherraferill">
                <MemberMinisterialCareer member={member} />
              </AccordionItem>
            )}
          </Accordion>
        </Box>
      </Box>
    </GridContainer>
  )
}

export default Details
