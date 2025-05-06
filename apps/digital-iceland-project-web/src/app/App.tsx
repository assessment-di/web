'use client'
import { Routes, Route, Link } from 'react-router-dom'
import Details from './Details'
import Home from './Home'
import Members from './Members'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/members" element={<Members />} />
    </Routes>
  )
}

export default App
