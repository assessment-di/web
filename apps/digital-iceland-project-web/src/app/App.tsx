'use client'
import { Routes, Route, Link } from 'react-router-dom'
import Details from './Details'
import Home from './Home'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  )
}

export default App
