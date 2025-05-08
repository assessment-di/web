import {
  Logo,
  Box,
  Button,
  Text,
  GridContainer,
  Menu,
  Icon,
} from '@island.is/island-ui/core'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/language/LanguageContext'
import './Header.css'

const mainLinks = [
  { href: '#', text: 'home.menu.driving' },
  { href: '#', text: 'home.menu.business' },
  { href: '#', text: 'home.menu.courts' },
  { href: '#', text: 'home.menu.finance' },
  { href: '#', text: 'home.menu.family' },
  { href: '#', text: 'home.menu.health' },
  { href: '#', text: 'home.menu.housing' },
  { href: '#', text: 'home.menu.industry' },
  { href: '#', text: 'home.menu.immigration' },
  { href: '#', text: 'home.menu.employment' },
  { href: '#', text: 'home.menu.disability' },
  { href: '#', text: 'home.menu.education' },
  { href: '#', text: 'home.menu.consumer' },
  { href: '#', text: 'home.menu.society' },
  { href: '#', text: 'home.menu.transport' },
  { href: '#', text: 'home.menu.environment' },
  { href: '#', text: 'home.menu.travel' },
  { href: '#', text: 'home.menu.services' },
]

const asideTopLinks = [
  { href: '#', text: 'home.menu.institutions' },
  { href: '#', text: 'home.menu.digital' },
  {
    href: '#',
    text: 'home.menu.development',
    sub: [
      { href: '#', text: 'home.menu.development.wisdom' },
      { href: '#', text: 'home.menu.development.ui' },
      { href: '#', text: 'home.menu.development.design' },
      { href: '#', text: 'home.menu.development.content' },
    ],
  },
  {
    href: '#',
    text: 'home.menu.information',
    sub: [{ href: '#', text: 'home.menu.information.link' }],
  },
]

const asideBottomLinks = [
  { href: '#', text: 'home.menu.health' },
  { href: '#', text: 'home.menu.consultation' },
  { href: '#', text: 'home.menu.names' },
  { href: '#', text: 'home.menu.petitions' },
  { href: '#', text: 'home.menu.openData' },
  { href: '#', text: 'home.menu.innovation' },
  { href: '#', text: 'home.menu.income' },
]

const Header = () => {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'is' ? 'en' : 'is')
  }

  const translatedMainLinks = mainLinks.map((link) => ({
    ...link,
    text: t(link.text as any),
  }))

  const translatedAsideTopLinks = asideTopLinks.map((link) => ({
    ...link,
    text: t(link.text as any),
    sub: link.sub?.map((subLink) => ({
      ...subLink,
      text: t(subLink.text as any),
    })),
  }))

  const translatedAsideBottomLinks = asideBottomLinks.map((link) => ({
    ...link,
    text: t(link.text as any),
  }))

  return (
    <GridContainer>
      <Box
        display="flex"
        flexDirection={['column', 'row', 'row']}
        alignItems={['center', 'center', 'center']}
        justifyContent="spaceBetween"
        paddingY={[2, 2, 3]}
        rowGap={[3, 0, 0]}
        width="full"
      >
        <Link to="/">
          <Box className="logo-container" display="flex" justifyContent="center" width="full">
            <Logo width={120} />
          </Box>
        </Link>
        <Box
          display="flex"
          alignItems="center"
          columnGap={[2, 2, 5]}
          borderRadius="large"
          borderColor="blue200"
          borderStyle="solid"
          width="full"
          justifyContent="center"
        >
          <Button
            variant="text"
            size="small"
            colorScheme="light"
            onClick={toggleLanguage}
          >
            {language === 'is' ? 'IS' : 'EN'}
          </Button>
          <Menu
            baseId="story"
            mainTitle={t('home.menu.title')}
            mainLinks={translatedMainLinks}
            asideTopLinks={translatedAsideTopLinks}
            asideBottomTitle={t('home.menu.otherSites')}
            asideBottomLinks={translatedAsideBottomLinks}
            languageSwitchText={language === 'is' ? 'EN' : 'IS'}
            myPagesText={t('home.menu.myPages')}
            menuButton={
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                background="blue100"
                borderRadius="large"
                borderColor="blue200"
                borderWidth="standard"
                borderStyle="solid"
                paddingX={[2, 2, 3]}
                paddingY={1}
                style={{
                  minWidth: 48,
                  minHeight: 32,
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <Text
                  fontWeight="semiBold"
                  color="blue400"
                  variant="small"
                  textAlign="center"
                >
                  Valmynd
                </Text>
                <Box paddingLeft={1} alignItems="center">
                  <Icon
                    icon="menu"
                    type="outline"
                    color="blue400"
                    size="small"
                  />
                </Box>
              </Box>
            }
          />
        </Box>
      </Box>
    </GridContainer>
  )
}

export default Header
