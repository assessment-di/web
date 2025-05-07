import { Box, Text, GridRow, GridColumn, CategoryCard } from '@island.is/island-ui/core'

const NewOnTheWebSection = () => (
  <Box marginTop={8} marginBottom={8}>
    <Text as="h2" variant="h2" marginBottom={4}>
      Nýtt á vefnum
    </Text>
    <GridRow>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Tilkynningar"
          text="Nýjustu fréttir og mikilvægar uppfærslur frá stjórnvöldum."
          tags={[{ label: 'Fréttir' }]}
          colorScheme="blue"
          href="#"
        />
      </GridColumn>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Lög og ályktanir"
          text="Nýleg lög, lagabreytingar og þingsályktanir."
          tags={[{ label: 'Lög' }]}
          colorScheme="purple"
          href="#"
        />
      </GridColumn>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Ræður"
          text="Opinberar ræður og yfirlýsingar frá embættismönnum."
          tags={[{ label: 'Ræða' }]}
          colorScheme="red"
          href="#"
        />
      </GridColumn>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Þingskjöl"
          text="Aðgangur að þingskjölum og skrám."
          tags={[{ label: 'Skjöl' }]}
          colorScheme="blue"
          href="#"
        />
      </GridColumn>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Mál"
          text="Skoða og leita að þingsmálum."
          tags={[{ label: 'Mál' }]}
          colorScheme="purple"
          href="#"
        />
      </GridColumn>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Viðburðir"
          text="Kommandi og liðnir viðburðir tengdir þinginu."
          tags={[{ label: 'Viðburðir' }]}
          colorScheme="red"
          href="#"
        />
      </GridColumn>
    </GridRow>
  </Box>
)

export default NewOnTheWebSection 