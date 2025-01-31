
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import ConnectWallet from './components/connectWallet'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/connectwallet' element={<ConnectWallet/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
