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
        paddingTop={4}
        style={{ gap: 24 }}
        width="full"
      >
        {member.image ? (
          <img
            src={member.image}
            alt={`Mynd af ${member.name}, ${member.title} í ${member.ministry}`}
            style={{
              width: 180,
              height: 240,
              borderRadius: 24,
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              width: 180,
              height: 240,
              borderRadius: 24,
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
              Titill <b>{member.title}</b>
            </Text>
            <Text>
              Ráðuneyti <b>{member.ministry}</b>
            </Text>
            <Text>
              Flokkur <b>{member.party}</b>
            </Text>
            <Text>
              Fæðingardagur <b>{member.dateOfBirth}</b>
            </Text>
          </Stack>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={['center', 'center', 'flexStart']}
            style={{ gap: 16, marginTop: 8 }}
          >
            <a href={`mailto:${member.email}`} style={{ color: '#0061ff' }} aria-label="Sendu tölvupóst">
              <Icon icon="mail" type="outline" />
            </a>
            <a
              href={`tel:${member.phone.replace(/\s/g, '')}`}
              style={{ color: '#0061ff' }}
              aria-label="Hringdu í"
            >
              <Icon icon="call" type="outline" />
            </a>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0061ff' }}
                aria-label="LinkedIn tengill"
              >
                <Icon icon="link" type="outline" />
              </a>
            )}
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent={['center', 'center', 'flexStart']}>
        <Button icon="share" variant="ghost" size="default" nowrap aria-label="Deila prófíli">
          Deila prófíli
        </Button>
      </Box>
    </Box>
  )
}
