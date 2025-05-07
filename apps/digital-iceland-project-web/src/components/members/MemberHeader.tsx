import { Box, Text, Stack, Button, Icon } from '@island.is/island-ui/core'
import { Member } from '../../types/member'

type MemberHeaderProps = {
  member: Member
}

export const MemberHeader = ({ member }: MemberHeaderProps) => {
  return (
    <Box
      background="white"
      borderRadius="large"
      padding={[3, 3, 4]}
      paddingTop={0}
      display="flex"
      flexDirection={['column', 'column', 'row']}
      alignItems={['flexStart', 'flexStart', 'center']}
      justifyContent="spaceBetween"
      marginBottom={6}
      style={{ gap: 24 }}
      id="member-details"
    >
      <Box 
        display="flex" 
        flexDirection={['column', 'column', 'row']}
        alignItems={['center', 'center', 'flexStart']}
        style={{ gap: 24 }}
        width="full"
      >
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
        <Box width="full">
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
            justifyContent={['center', 'center', 'flexStart']}
            style={{ gap: 16, marginTop: 8 }}
          >
            <a href={`mailto:${member.email}`} style={{ color: '#0061ff' }}>
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
      <Box display="flex" justifyContent={['center', 'center', 'flexStart']}>
        <Button 
          icon="share" 
          variant="ghost" 
          size="small"
        >
          Share profile
        </Button>
      </Box>
    </Box>
  )
} 