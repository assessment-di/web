import { Box, Text, GridRow, GridColumn, CategoryCard } from '@island.is/island-ui/core'
import { useLanguage } from '../../contexts/LanguageContext'

interface NewOnTheWebSectionProps {
  title: string
  viewAllText: string
}

const NewOnTheWebSection = ({ title, viewAllText }: NewOnTheWebSectionProps) => {
  const { t } = useLanguage()

  return (
    <Box marginTop={8} marginBottom={8}>
      <Text as="h2" variant="h2" marginBottom={4}>
        {title}
      </Text>
      <GridRow>
        <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
          <CategoryCard
            heading={t('home.newOnWeb.announcements.heading')}
            text={t('home.newOnWeb.announcements.text')}
            tags={[{ label: t('home.newOnWeb.announcements.tag') }]}
            colorScheme="blue"
            href="#"
          />
        </GridColumn>
        <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
          <CategoryCard
            heading={t('home.newOnWeb.laws.heading')}
            text={t('home.newOnWeb.laws.text')}
            tags={[{ label: t('home.newOnWeb.laws.tag') }]}
            colorScheme="purple"
            href="#"
          />
        </GridColumn>
        <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
          <CategoryCard
            heading={t('home.newOnWeb.speeches.heading')}
            text={t('home.newOnWeb.speeches.text')}
            tags={[{ label: t('home.newOnWeb.speeches.tag') }]}
            colorScheme="red"
            href="#"
          />
        </GridColumn>
        <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
          <CategoryCard
            heading={t('home.newOnWeb.documents.heading')}
            text={t('home.newOnWeb.documents.text')}
            tags={[{ label: t('home.newOnWeb.documents.tag') }]}
            colorScheme="blue"
            href="#"
          />
        </GridColumn>
        <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
          <CategoryCard
            heading={t('home.newOnWeb.cases.heading')}
            text={t('home.newOnWeb.cases.text')}
            tags={[{ label: t('home.newOnWeb.cases.tag') }]}
            colorScheme="purple"
            href="#"
          />
        </GridColumn>
        <GridColumn span={['12/12', '6/12', '4/12']} paddingBottom={3}>
          <CategoryCard
            heading={t('home.newOnWeb.events.heading')}
            text={t('home.newOnWeb.events.text')}
            tags={[{ label: t('home.newOnWeb.events.tag') }]}
            colorScheme="red"
            href="#"
          />
        </GridColumn>
      </GridRow>
    </Box>
  )
}

export default NewOnTheWebSection 