import { Box, Text } from '@island.is/island-ui/core'
import { Colors } from '@island.is/island-ui/theme'
import React from 'react'

interface MenuItem {
  label: string
  href: string
}

interface MenuSectionProps {
  items: MenuItem[]
  title: string
  linkColor: string
  titleColor?: 'blue400' | 'blue600' | 'blue300' | 'blue200' | 'blue100'
  titleVariant?: 'h4' | 'eyebrow'
  backgroundColor?: Colors
}

const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  title,
  linkColor,
  titleColor = 'blue400',
  titleVariant = 'h4',
  backgroundColor = 'blue100',
}) => {
  return (
    <Box background={backgroundColor} borderRadius="large" padding={4}>
      <Text
        variant={titleVariant}
        as="h3"
        color={titleColor}
        fontWeight="semiBold"
      >
        {title}
      </Text>
      <Box marginTop={2}>
        {items.map((item) => (
          <Box key={item.href} marginBottom={2}>
            <a
              href={item.href}
              style={{ color: linkColor, textDecoration: 'none' }}
            >
              <Text>{item.label}</Text>
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default MenuSection
