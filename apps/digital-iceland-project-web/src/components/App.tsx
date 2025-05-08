'use client'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Box,
  GridContainer,
  GridRow,
  GridColumn,
  Footer,
} from '@island.is/island-ui/core'
import Home from '../pages'
import Members from '../pages/members'
import Details from '../pages/members/[id]'
import BreadCrumbs from './BreadCrumbs'
import SidebarMenu from './menu/SidebarMenu'
import { mainMenu, extraMenu } from '../mockData/menu'
import AlthingiLogo from './AlthingiLogo'
import Legislation from '../pages/legislation'
import LawDetails from '../pages/legislation/[id]'
import Header from './Header/Header'
import { LanguageProvider } from '../contexts/language/LanguageContext'
import ParliamentManuals from '../pages/ParliamentManuals'
import AnnualReports from './annual-reports/AnnualReports'
import SuggestionsPage from '../pages/members/suggestions'

const App = () => {
  return (
    <LanguageProvider>
      <Box paddingX={6}>
        <Header />
      </Box>
      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '3/12']}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="full"
              flexDirection="column"
              marginBottom={[4, 4, 0]}
              marginY={4}
            >
              <AlthingiLogo />
              <SidebarMenu mainMenu={mainMenu} extraMenu={extraMenu} />
            </Box>
          </GridColumn>
          <GridColumn span={['12/12', '12/12', '9/12']}>
            <BreadCrumbs />
            <Routes>
              <Route path="/:language" element={<Home />} />
              <Route path="/:language/members" element={<Members />} />
              <Route path="/:language/members/:id" element={<Details />} />
              <Route
                path="/:language/members/:id/suggestions"
                element={<SuggestionsPage />}
              />
              <Route path="/:language/legislation" element={<Legislation />} />
              <Route
                path="/:language/legislation/:id"
                element={<LawDetails />}
              />
              <Route
                path="/:language/parliament-manuals"
                element={<ParliamentManuals />}
              />
              <Route
                path="/:language/annual-reports"
                element={<AnnualReports />}
              />
            </Routes>
          </GridColumn>
        </GridRow>
      </GridContainer>
      <Footer />
    </LanguageProvider>
  )
}

export default App
