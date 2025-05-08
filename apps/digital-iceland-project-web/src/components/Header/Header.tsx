import React from 'react'
import {
  Logo,
  Box,
  Button,
  Input,
  Text,
  GridContainer,
  Menu,
} from '@island.is/island-ui/core'

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
  { href: '#', text: 'Stofнанir' },
  { href: '#', text: 'Stafrænt Ísland' },
  {
    href: '#',
    text: 'Þróун',
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
    sub: [
      { href: '#', text: 'linkur á eitthvað' },
    ],
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
        paddingY={3}
      >
        {/* Логотип */}
        <Logo width={180} />

        <Box display="flex" alignItems="center" columnGap={2}>
          <Box
            display="flex"
            alignItems="center"
            background="blue100"
            borderRadius="large"
            borderColor="blue200"
            borderWidth="standard"
            borderStyle="solid"
            paddingLeft={4}
            paddingRight={2}
            paddingY={2}
          >
            <Input
              name="search"
              placeholder="Search"
              size="sm"
              backgroundColor="blue"
              icon={{ name: 'search', type: 'outline' }}
            />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            background="blue100"
            borderRadius="large"
            borderColor="blue200"
            borderWidth="standard"
            borderStyle="solid"
            paddingX={4}
            paddingY={2}
          >
            <Button
              variant="text"
              icon="person"
              iconType="outline"
              size="small"
            >
              <Text fontWeight="semiBold" color="blue400">Login</Text>
            </Button>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            background="blue100"
            borderRadius="large"
            borderColor="blue200"
            borderWidth="standard"
            borderStyle="solid"
            paddingX={4}
            paddingY={2}
          >
            <Text fontWeight="semiBold" color="blue400">IS</Text>
          </Box>

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
                alignItems="center"
                background="blue100"
                borderRadius="large"
                borderColor="blue200"
                borderWidth="standard"
                borderStyle="solid"
                paddingX={4}
                paddingY={2}
                style={{ cursor: 'pointer' }}
              >
                <Button
                  variant="text"
                  icon="menu"
                  iconType="outline"
                  size="small"
                >
                  <Text fontWeight="semiBold" color="blue400">Menu</Text>
                </Button>
              </Box>
            }
          />
        </Box>
      </Box>
    </GridContainer>
  )
}

export default Header 