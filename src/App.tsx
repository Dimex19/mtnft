import { useState } from 'react'
import Logo from './assets/images/logo.png'
import Header from './components/Header'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Marquee from './components/Marquee'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
