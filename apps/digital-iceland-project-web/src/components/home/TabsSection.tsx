import { Box, Tabs } from '@island.is/island-ui/core'
import { useState } from 'react'
import { MeetingsTab } from './MeetingsTab'
import { AgendaTab } from './AgendaTab'

export const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('meetings')

  return (
    <Box background="white" borderRadius="large" marginTop={6}>
      <Tabs
        label="Timetable Tabs"
        tabs={[
          {
            id: 'meetings',
            label: 'Meetings and visits',
            content: <MeetingsTab />,
          },
          {
            id: 'agenda',
            label: 'Agenda',
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
