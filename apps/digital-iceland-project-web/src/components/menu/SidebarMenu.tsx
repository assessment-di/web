import { Box } from '@island.is/island-ui/core'
import React from 'react'
import MenuSection from './MenuSection'

const styles = `
  @media (max-width: 1100px) {
    .sidebar-menu {
      --sidebar-width: 90%;
    }
  }
  @media (max-width: 768px) {
    .sidebar-menu {
      flex-direction: column !important;
      row-gap: 16px !important;
      column-gap: 0 !important;
    }
    .sidebar-menu > div {
      width: 100% !important;
    }
  }
`

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
  mainTitle = 'Valmynd',
  extraTitle = 'Tengt efni',
  mainMenuColor = '#F2F7FF',
  extraMenuColor = '#F6F6FD',
}) => {
  return (
    <Box style={{ width: '100%' }}>
      <style>{styles}</style>
      <Box
        className="sidebar-menu"
        display="flex"
        flexDirection={['row', 'row', 'column']}
        columnGap={[3, 3, 0]}
        rowGap={[0, 0, 3]}
      >
        <Box style={{ width: 'var(--sidebar-width, 100%)' }}>
          <MenuSection
            items={mainMenu}
            title={mainTitle}
            linkColor={mainMenuColor}
            titleVariant="h4"
            backgroundColor="blue100"
          />
        </Box>
        <Box style={{ width: 'var(--sidebar-width, 100%)' }}>
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
