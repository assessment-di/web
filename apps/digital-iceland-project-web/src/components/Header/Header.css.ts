import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px',
  width: '100%',
  padding: '0 24px',
})

export const islandIsApplicationLogoWrapper = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'block',
    },
  },
})

export const islandIsApplicationLogoIconWrapper = style({
  display: 'block',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
})

export const headerTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const headerActions = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'flex',
    },
  },
}) 