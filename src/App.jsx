import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import SignlePage from './pages/SinglePage'
import CreateBlog from './component/CreateBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
  
  <Route path='/blog/:id' element={<SignlePage />} />
  <Route path='/create' element={<CreateBlog/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
