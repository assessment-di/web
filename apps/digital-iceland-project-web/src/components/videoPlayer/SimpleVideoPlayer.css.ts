import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
  width: '100%',
  height: 'auto',
})

export const controls = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '8px',
  background: 'rgba(255, 255, 255, 0.9)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}) 