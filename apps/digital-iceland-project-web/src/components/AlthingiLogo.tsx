import { Box, LinkV2 } from '@island.is/island-ui/core'

const AlthingiLogo = () => {
  return (
    <LinkV2 href="/">
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
          src="https://cdn.brandfetch.io/idSyXhoh8v/w/820/h/673/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
          alt="Alþingi merki"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            padding: '8px',
          }}
        />
      </Box>
    </LinkV2>
  )
}

export default AlthingiLogo
