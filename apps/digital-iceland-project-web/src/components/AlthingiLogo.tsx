import { Box } from '@island.is/island-ui/core'

const AlthingiLogo = () => {
  return (
    <Box
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="full"
      height="full"
      paddingBottom={2}
      style={{ maxWidth: 120, maxHeight: 120 }}
    >
      <img
        src="assets/althingi-logo.png"
        alt="Althingi Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          padding: '8px',
        }}
      />
    </Box>
  )
}

export default AlthingiLogo 