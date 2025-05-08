import { Box, Input, Button } from '@island.is/island-ui/core'

export const LegislationSubscribe = () => (
  <Box style={{ maxWidth: 320 }}>
    <Input label="Netfang" name="email" placeholder="Sláðu inn netfang" size="md" />
    <Box marginTop={2}>
      <Button size="small">Skrá áskrift</Button>
    </Box>
  </Box>
)

export default LegislationSubscribe 