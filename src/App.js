import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './components/Project/LandingPage'
import Login from './components/Login/Login'
import AboutUs from './pages/AboutUs'
import Carrers from './pages/Carrers'
import ContactUs from './pages/ContactUs'
import CMDdesk from './pages/CMDdesk'
import Help from './pages/Help'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signinsignup' element={<Login/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/carrers' element={<Carrers/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/CMDdesk' element={<CMDdesk/>}/>
      <Route path='/help' element={<Help/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
