import { Box, Tabs } from '@island.is/island-ui/core'
import { useState } from 'react'
import { MeetingsTab } from './MeetingsTab'
import { AgendaTab } from './AgendaTab'

export const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('meetings')

  return (
    <Box background="white" borderRadius="large" marginTop={6}>
      <Tabs
        label="Dagskrárflipar"
        tabs={[
          {
            id: 'meetings',
            label: 'Fundir og heimsóknir',
            content: <MeetingsTab />,
          },
          {
            id: 'agenda',
            label: 'Dagskrá',
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
