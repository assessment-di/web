import { Box, Tabs } from '@island.is/island-ui/core'
import { useState } from 'react'
import { MeetingsTab } from './MeetingsTab'
import { AgendaTab } from './AgendaTab'
import { useLanguage } from '../../contexts/LanguageContext'

interface TabsSectionProps {
  popularText: string
  newText: string
  allText: string
}

export const TabsSection = ({ popularText, newText, allText }: TabsSectionProps) => {
  const [activeTab, setActiveTab] = useState('meetings')
  const { t } = useLanguage()

  return (
    <Box background="white" borderRadius="large" marginTop={6}>
      <Tabs
        label={t('home.tabs.label')}
        tabs={[
          {
            id: 'meetings',
            label: t('home.tabs.meetings'),
            content: <MeetingsTab />,
          },
          {
            id: 'agenda',
            label: t('home.tabs.agenda'),
            content: <AgendaTab />,
          },
        ]}
        selected={activeTab}
        onChange={setActiveTab}
        variant="default"
      />
    </Box>
  )
}
