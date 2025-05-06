import { Box, Text, GridContainer, GridRow, GridColumn, Button, Stack, Icon, Link } from '@island.is/island-ui/core'

export function Details() {
  return (
    <Box background="blue100" style={{ minHeight: '100vh' }} paddingY={6}>
      <GridContainer>
        <Box marginBottom={6}>
          <Text variant="h1">Cover picture</Text>
        </Box>
        <GridRow>
          <GridColumn span="2/12">
            <Box background="blue100" borderRadius="large" padding={4}>
              <Text variant="h4">Menu?</Text>
            </Box>
          </GridColumn>
          <GridColumn span="10/12">
            <Box background="white" borderRadius="large" padding={6}>
              <GridRow>
                <GridColumn span="3/12">
                  <Box>
                    <Box
                      borderRadius="full"
                      overflow="hidden"
                      marginBottom={3}
                      style={{ width: 120, height: 120 }}
                    >
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Alma D. Möller"
                        width={120}
                        height={120}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </Box>
                  </Box>
                </GridColumn>
                <GridColumn span="6/12">
                  <Box>
                    <Text variant="h3" as="h2" marginBottom={1}>Alma D. Möller</Text>
                    <Stack space={1}>
                      <Text><b>Title</b> Title</Text>
                      <Text><b>Ministry</b> Ministry</Text>
                      <Text><b>Party</b> Samfylkingin</Text>
                      <Text><b>Date of birth</b> Date of birth</Text>
                    </Stack>
                    <Box marginTop={3} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <Link href="mailto:Email@mail.com" color="blue400">
                        <Icon icon="mail" type="outline" /> Email@mail.com
                      </Link>
                      <Link href="tel:+3540000000" color="blue400">
                        <Icon icon="call" type="outline" /> +354 0000 000
                      </Link>
                      <Link href="#" color="blue400">
                        <Icon icon="link" type="outline" /> LinkedIn
                      </Link>
                    </Box>
                  </Box>
                </GridColumn>
                <GridColumn span="3/12">
                  <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button size="small" variant="ghost">
                      Share profile
                    </Button>
                  </Box>
                </GridColumn>
              </GridRow>
              <Box marginTop={6}>
                <Text variant="h4" as="h3" marginBottom={2}>Parliamentary career</Text>
                <Text marginBottom={4}>
                  Member of Althingi for the Reykjavik North Constituency 2016–2021 and the Reykjavik North Constituency since 2021 (Independence Party).
                </Text>
                <Text variant="h4" as="h3" marginBottom={2}>Title</Text>
                <Text variant="h5" as="h4" marginBottom={2}>Committees</Text>
                <Text marginBottom={1}><b>Present committees</b></Text>
                <ul style={{ marginTop: 0 }}>
                  <li>Member of the Budget Committee since 2025.</li>
                  <li>Member of the Future Committee since 2025.</li>
                  <li>Member of the Icelandic delegation to the Nordic Council since 202.</li>
                </ul>
                <Text marginTop={3} marginBottom={1}><b>Previous committees</b></Text>
                <ul style={{ marginTop: 0 }}>
                  <li>Member of the Foreign Affairs Committee 2017–2019 (Chair 2017–2019).</li>
                  <li>Member of the Icelandic delegation to the Inter-Parliamentary Union (IPU) 2017–2019 (Chair 2017–2019).</li>
                  <li>Member of the Judicial Affairs and Education Committee 2017 (Chair 2017).</li>
                  <li>Member of the Economic Affairs and Trade Committee 2017.</li>
                  <li>Member of the Icelandic delegation to the NATO Parliamentary Assembly 2017 (Chair 2017)</li>
                  <li>Member of the Icelandic delegation to the Inter-Parliamentary Union (IPU) 2017.</li>
                  <li>Member of the EU-Iceland joint Parliamentary Committee 2018–2019 (Chair 2018–2019).</li>
                </ul>
                <Text variant="h5" as="h4" marginTop={4} marginBottom={2}>Ministerial career</Text>
                <ul style={{ marginTop: 0 }}>
                  <li>Minister of Higher Education, Science and Innovation 2021–2024.</li>
                  <li>Minister of Justice 2019–2021.</li>
                </ul>
              </Box>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </Box>
  )
}

export default Details 