import { Box, Text } from '@island.is/island-ui/core'
import { Colors } from '@island.is/island-ui/theme'
import React, { useState, useEffect } from 'react'

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
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleToggle = () => {
    if (isMobile) {
      setOpen((prev) => !prev)
    }
  }

  return (
    <Box background={backgroundColor} borderRadius="large" padding={4}>
      <Box display="flex" alignItems="center" justifyContent="spaceBetween" onClick={handleToggle} style={{ cursor: isMobile ? 'pointer' : 'default' }}>
        <Text
          variant={titleVariant}
          as="h3"
          color={titleColor}
          fontWeight="semiBold"
        >
          {title}
        </Text>
        {isMobile && (
          <span style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 8,
            borderRadius: '50%',
            background: '#eaf0fb',
            width: 36,
            height: 36,
            justifyContent: 'center',
            transition: 'transform 0.2s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 8L10 13L15 8" stroke="#3266E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </Box>
      {(!isMobile || open) && (
        <Box marginTop={2}>
          {items.map((item, index) => (
            <Box key={index} marginBottom={2}>
              <a
                href={item.href}
                style={{ color: linkColor, textDecoration: 'none' }}
              >
                <Text>{item.label}</Text>
              </a>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default MenuSection
