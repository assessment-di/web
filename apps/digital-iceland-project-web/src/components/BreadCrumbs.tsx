import { Box, Text } from '@island.is/island-ui/core'
import { Link, useLocation } from 'react-router-dom'

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
  crumbs.push({ path: '/', label: breadcrumbSegmentMap[''] })
  for (let i = 0; i < pathnames.length; i++) {
    path += '/' + pathnames[i]
    const label = breadcrumbSegmentMap[pathnames[i]] || capitalize(pathnames[i])
    crumbs.push({ path, label })
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
    <Box display="flex" alignItems="center" paddingTop={1} paddingBottom={3} paddingX={6}>
      {crumbs.map((crumb, idx) => (
        <Box
          key={crumb.path}
          display="flex"
          alignItems="center"
          marginLeft={idx !== 0 ? 2 : 0}
        >
          {idx !== 0 && (
            <Box paddingX={1}>
              <Text color="blue400" fontWeight="semiBold" aria-hidden="true">
                •
              </Text>
            </Box>
          )}
          {idx === crumbs.length - 1 ? (
            <Box
              background="blue100"
              borderRadius="large"
              paddingX={3}
              paddingY={1}
              marginLeft={idx !== 0 ? 2 : 0}
            >
              <Text color="blue400" fontWeight="semiBold">
                {crumb.label}
              </Text>
            </Box>
          ) : (
            <Link
              to={crumb.path}
              style={{
                color: '#1662DD',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: 20,
                marginLeft: idx !== 0 ? 8 : 0,
              }}
            >
              {crumb.label}
            </Link>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default BreadCrumbs
