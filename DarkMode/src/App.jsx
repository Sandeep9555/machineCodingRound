import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Navbar from './pages/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>} /> 
     <Route path='/about' element={<About/>} /> 
     <Route path='/blog' element={<Blog/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
