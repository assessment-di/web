import { Box, Text, Tag, Stack } from '@island.is/island-ui/core'
import { mockMeetings } from '../../mockData/home'
import { MeetingItem } from './MeetingItem'
import { useLanguage } from '../../contexts/language/LanguageContext'

export const MeetingsTab = () => {
  const { t } = useLanguage()

  return (
    <Box paddingY={6} paddingX={[2, 6]}>
      <Box
        display="flex"
        alignItems="center"
        style={{ gap: 16 }}
        marginBottom={5}
      >
        <Text variant="h3" as="h2" marginBottom={0}>
          {t('home.meetings.date')}
        </Text>
        <Box style={{ fontSize: 18 }}>
          <Tag variant="mint" outlined>
            {t('home.meetings.speaker')}
          </Tag>
        </Box>
      </Box>
      <Stack space={3}>
        {mockMeetings.map((meeting, idx) => (
          <MeetingItem key={idx} {...meeting} />
        ))}
      </Stack>
    </Box>
  )
}
