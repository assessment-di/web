import { Breadcrumbs, Box } from '@island.is/island-ui/core'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/language/LanguageContext'

const breadcrumbSegmentMap: Record<string, string> = {
  '': 'home.breadcrumbs.home',
  legislation: 'home.breadcrumbs.legislation',
  members: 'home.breadcrumbs.members',
  details: 'home.breadcrumbs.details',
}

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const BreadCrumbs = () => {
  const location = useLocation()
  const { t } = useLanguage()
  const segments = location.pathname.split('/').filter(Boolean)
  const items = segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/')
    const label = t(breadcrumbSegmentMap[segment] as any)
    return {
      title: capitalize(label),
      href: path,
    }
  })

  return (
    <Box paddingY={2}>
      <Breadcrumbs items={items} />
    </Box>
  )
}

export default BreadCrumbs
