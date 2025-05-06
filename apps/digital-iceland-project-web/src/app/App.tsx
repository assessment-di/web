'use client'
import { BrowserRouter, Routes } from 'react-router-dom'
import { renderRoutes } from './routes'

const App = () => {
  return <Routes>{renderRoutes()}</Routes>
}

export default App
