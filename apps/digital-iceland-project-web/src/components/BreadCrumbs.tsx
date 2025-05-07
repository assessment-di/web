import { Breadcrumbs, Box } from '@island.is/island-ui/core'
import { useLocation } from 'react-router-dom'

const breadcrumbSegmentMap: Record<string, string> = {
  '': 'Home',
  members: 'Members',
  details: 'Details',
}

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const getBreadcrumbs = (pathname: string) => {
  const pathnames = pathname.split('/').filter(Boolean)
  const crumbs = []
  let path = ''
  crumbs.push({ title: breadcrumbSegmentMap[''], href: '/' })
  for (let i = 0; i < pathnames.length; i++) {
    path += '/' + pathnames[i]
    const title = breadcrumbSegmentMap[pathnames[i]] || capitalize(pathnames[i])
    crumbs.push({
      title,
      href: path,
      isCurrentPage: i === pathnames.length - 1,
    })
  }
  return crumbs
}

const BreadCrumbs = () => {
  const location = useLocation()
  const crumbs = getBreadcrumbs(location.pathname)

  if (crumbs.length <= 1) {
    return null
  }

  return (
    <Box paddingTop={1} paddingBottom={3} paddingX={8}>
      <Breadcrumbs items={crumbs} />
    </Box>
  )
}

export default BreadCrumbs
