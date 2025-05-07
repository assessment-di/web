'use client'
import { Routes, Route } from 'react-router-dom'
import {
  Box,
  Header,
  GridContainer,
  GridRow,
  GridColumn,
} from '@island.is/island-ui/core'
import Home from '../pages'
import Members from '../pages/members'
import Details from '../pages/members/[id]'
import BreadCrumbs from './BreadCrumbs'
import SidebarMenu from './SidebarMenu'
import { mainMenu, extraMenu } from '../mockData/menu'
import Legislation from '../pages/Legislation'

const App = () => {
  return (
    <>
      <Box paddingX={6}>
        <Header />
      </Box>
      <BreadCrumbs />
      <GridContainer>
        <GridRow>
          <GridColumn span="3/12">
            <SidebarMenu mainMenu={mainMenu} extraMenu={extraMenu} />
          </GridColumn>
          <GridColumn span="9/12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/members" element={<Members />} />
              <Route path="/members/:id" element={<Details />} />
              <Route path="/legislation" element={<Legislation />} />
            </Routes>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </>
  )
}

export default App
