import { Box, Text, GridRow, GridColumn, CategoryCard } from '@island.is/island-ui/core'

const NewOnTheWebSection = () => (
  <Box marginTop={8} marginBottom={8}>
    <Text as="h2" variant="h2" marginBottom={4}>
      New on the web
    </Text>
    <GridRow>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Announcements"
          text="Latest news and important updates from the government."
          tags={[{ label: 'News' }]}
          colorScheme="blue"
          href="#"
        />
      </GridColumn>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Laws & Resolutions"
          text="Recent laws, legal changes, and parliamentary resolutions."
          tags={[{ label: 'Law' }]}
          colorScheme="purple"
          href="#"
        />
      </GridColumn>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Speeches"
          text="Official speeches and statements from public officials."
          tags={[{ label: 'Speech' }]}
          colorScheme="red"
          href="#"
        />
      </GridColumn>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Parliamentary Documents"
          text="Access to parliamentary documents and records."
          tags={[{ label: 'Documents' }]}
          colorScheme="blue"
          href="#"
        />
      </GridColumn>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Cases"
          text="Browse and search for parliamentary cases."
          tags={[{ label: 'Cases' }]}
          colorScheme="purple"
          href="#"
        />
      </GridColumn>
      <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
        <CategoryCard
          heading="Events"
          text="Upcoming and past events related to the parliament."
          tags={[{ label: 'Events' }]}
          colorScheme="red"
          href="#"
        />
      </GridColumn>
    </GridRow>
  </Box>
)

export default NewOnTheWebSection 