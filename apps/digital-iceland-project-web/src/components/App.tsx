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
              <Route path="/" element={<Home />} />
              <Route path="/members" element={<Members />} />
              <Route path="/members/:id" element={<Details />} />
              <Route path="/legislation" element={<Legislation />} />
              <Route path="/legislation/:id" element={<LawDetails />} />
              <Route path="/parliament-manuals" element={<ParliamentManuals />} />
              <Route path="/annual-reports" element={<AnnualReports />} />
            </Routes>
          </GridColumn>
        </GridRow>
      </GridContainer>
      <Footer />
    </LanguageProvider>
  )
}

export default App
