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
  titleVariant?:
    | 'default'
    | 'small'
    | 'medium'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'intro'
    | 'eyebrow'
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
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false,
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
    <Box
      background={backgroundColor}
      borderRadius="large"
      paddingX={isMobile ? 2 : 4}
      paddingY={1}
      style={
        isMobile
          ? {
              background: '#f6f9fc',
              border: '1px solid #3266E3',
              borderRadius: 16,
              boxShadow: '0 4px 24px 0 rgba(50, 102, 227, 0.08)',
              position: 'relative',
            }
          : {}
      }
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="spaceBetween"
        onClick={handleToggle}
        style={
          isMobile
            ? { cursor: 'pointer', minHeight: 20 }
            : { cursor: 'default' }
        }
      >
        <Text
          variant={titleVariant}
          as="h3"
          color={titleColor}
          fontWeight="semiBold"
        >
          {title}
        </Text>
        {isMobile && (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: 8,
              borderRadius: '50%',
              background: '#eaf0fb',
              width: 40,
              height: 40,
              justifyContent: 'center',
              transition: 'transform 0.2s',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              boxShadow: '0 1px 4px 0 rgba(50,102,227,0.08)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="#3266E3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </Box>

      {(!isMobile || open) && (
        <Box
          marginTop={2}
          style={
            isMobile
              ? {
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  background: backgroundColor,
                  zIndex: 10,
                  borderRadius: 16,
                  padding: '16px 0 24px 0',
                  boxShadow: '0 4px 24px 0 rgba(50, 102, 227, 0.08)',
                  border: '2px solid #3266E3',
                  marginTop: '8px',
                }
              : {}
          }
        >
          {items.map((item, index) => (
            <Box key={index} marginBottom={2} paddingX={4}>
              <a
                href={item.href}
                style={
                  isMobile
                    ? {
                        color: '#3266E3',
                        textDecoration: 'none',
                        fontWeight: item.label === title ? 'bold' : 'normal',
                        fontSize: 18,
                        display: 'block',
                        padding: '4px 0',
                      }
                    : { color: linkColor, textDecoration: 'none' }
                }
              >
                <Text
                  color={isMobile ? 'blue400' : undefined}
                  fontWeight={
                    isMobile
                      ? item.label === title
                        ? 'semiBold'
                        : 'regular'
                      : undefined
                  }
                >
                  {item.label}
                </Text>
              </a>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default MenuSection
