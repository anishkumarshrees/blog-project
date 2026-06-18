import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import SignlePage from './pages/SinglePage'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
  
  <Route path='/blog/:id' element={<SignlePage />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
