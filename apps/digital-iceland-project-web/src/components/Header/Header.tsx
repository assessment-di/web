import React from 'react'
import {
  Logo,
  Box,
  Button,
  Input,
  Text,
  GridContainer,
  Menu,
  Icon,
} from '@island.is/island-ui/core'
import { Link } from 'react-router-dom'
import './Header.css'

const mainLinks = [
  { href: '#', text: 'Akstur og bifreiðar' },
  { href: '#', text: 'Atvinnurekstur og sjálfstætt starfandi' },
  { href: '#', text: 'Dómstólar og réttarfar' },
  { href: '#', text: 'Fjármál og skattar' },
  { href: '#', text: 'Fjölskylda og velferð' },
  { href: '#', text: 'Heilbrigðismál' },
  { href: '#', text: 'Húsnæðismál' },
  { href: '#', text: 'Iðnaður' },
  { href: '#', text: 'Innflytjendamál' },
  { href: '#', text: 'Launþegi, réttindi og lífeyrir' },
  { href: '#', text: 'Málefni fatlaðs fólks' },
  { href: '#', text: 'Menntun' },
  { href: '#', text: 'Neytendamál' },
  { href: '#', text: 'Samfélag og réttindi' },
  { href: '#', text: 'Samgöngur' },
  { href: '#', text: 'Umhverfismál' },
  { href: '#', text: 'Vegabréf, ferðalög og búseta erlendis' },
  { href: '#', text: 'Vörur og þjónusta Ísland.is' },
]

const asideTopLinks = [
  { href: '#', text: 'Stofnanir' },
  { href: '#', text: 'Stafrænt Ísland' },
  {
    href: '#',
    text: 'Þróun',
    sub: [
      { href: '#', text: 'Viskuausan' },
      { href: '#', text: 'Ísland UI' },
      { href: '#', text: 'Hönnunarkerfi' },
      { href: '#', text: 'Efnisstefna' },
    ],
  },
  {
    href: '#',
    text: 'Upplýsingarsvæði',
    sub: [{ href: '#', text: 'linkur á eitthvað' }],
  },
]

const asideBottomLinks = [
  { href: '#', text: 'Heilsuvera' },
  { href: '#', text: 'Samráðsgátt' },
  { href: '#', text: 'Mannanöfn' },
  { href: '#', text: 'Undirskriftarlistar' },
  { href: '#', text: 'Opin gögn' },
  { href: '#', text: 'Opinber nýsköpun' },
  { href: '#', text: 'Tekjusagan' },
]

const Header = () => {
  return (
    <GridContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="spaceBetween"
        paddingY={[2, 2, 3]}
      >
        <Link to="/">
          <Box className="logo-container">
            <Logo width={120} />
          </Box>
        </Link>
        <Box display="flex" alignItems="center" columnGap={[2, 2, 5]}>
          <Menu
            baseId="story"
            mainTitle="Þjónustuflokkar"
            mainLinks={mainLinks}
            asideTopLinks={asideTopLinks}
            asideBottomTitle="Aðrir opinberir vefir"
            asideBottomLinks={asideBottomLinks}
            languageSwitchText="EN"
            myPagesText="Mínar síður"
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
