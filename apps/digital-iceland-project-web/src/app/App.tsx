'use client'
import { BrowserRouter, Routes } from 'react-router-dom'
import { renderRoutes } from './routes'
import { Box, Header } from '@island.is/island-ui/core'

const App = () => {
  return (
    <>
      <Box paddingX={6}>
        <Header />
      </Box>
      <Routes>{renderRoutes()}</Routes>
    </>
  )
}

export default App
