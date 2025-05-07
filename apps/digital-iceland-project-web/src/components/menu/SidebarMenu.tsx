import { Box } from '@island.is/island-ui/core'
import React from 'react'
import MenuSection from './MenuSection'

interface MenuItem {
  label: string
  href: string
}

interface SidebarMenuProps {
  mainMenu: MenuItem[]
  extraMenu: MenuItem[]
  mainTitle?: string
  extraTitle?: string
  mainMenuColor?: string
  extraMenuColor?: string
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  mainMenu,
  extraMenu,
  mainTitle = 'Menu',
  extraTitle = 'Related Content',
  mainMenuColor = '#1b4c9a',
  extraMenuColor = '#6a1bbd',
}) => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection={['row', 'row', 'column']}
        columnGap={[3, 3, 0]}
        rowGap={[0, 0, 3]}
      >
        <Box width="full">
          <MenuSection
            items={mainMenu}
            title={mainTitle}
            linkColor={mainMenuColor}
            titleVariant="h4"
            backgroundColor="blue100"
          />
        </Box>
        <Box width="full">
          <MenuSection
            items={extraMenu}
            title={extraTitle}
            titleVariant="medium"
            linkColor={extraMenuColor}
            backgroundColor="purple100"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SidebarMenu
