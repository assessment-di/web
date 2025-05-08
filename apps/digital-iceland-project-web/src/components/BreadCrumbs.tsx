import { Breadcrumbs, Box } from '@island.is/island-ui/core'
import { useLocation, useParams } from 'react-router-dom'
import { useLanguage } from '../contexts/language/LanguageContext'

const breadcrumbSegmentMap: Record<string, string> = {
  '': 'home.breadcrumbs.home',
  legislation: 'home.breadcrumbs.legislation',
  members: 'home.breadcrumbs.members',
  details: 'home.breadcrumbs.details',
  'parliament-manuals': 'menu.main.manuals',
  'annual-reports': 'menu.main.annual-reports',
}

const capitalize = (word: string) => {
  if (!word) return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const BreadCrumbs = () => {
  const location = useLocation()
  const { t, language } = useLanguage()
  const segments = location.pathname.split('/').filter(Boolean)

  const items = [
    {
      title: capitalize(t('home.breadcrumbs.home')),
      href: `/${language}`,
    },
  ]

  segments.forEach((segment, index) => {
    const path = `/${language}/` + segments.slice(0, index + 1).join('/')
    let label = ''
    if (breadcrumbSegmentMap[segment]) {
      label = t(breadcrumbSegmentMap[segment] as any)
    } else {
      label = segment
    }
    if (segment !== '') {
      items.push({
        title: capitalize(label),
        href: path,
      })
    }
  })

  return (
    <Box paddingY={2}>
      <Breadcrumbs items={items} />
    </Box>
  )
}

export default BreadCrumbs
