'use client'
import { Routes, Route } from 'react-router-dom'
import { Box, Header } from '@island.is/island-ui/core'
import Home from '../pages'
import Members from '../pages/members'
import Details from '../pages/members/[id]'

const App = () => {
  return (
    <>
      <Box paddingX={6}>
        <Header />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
