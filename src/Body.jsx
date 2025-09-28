import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Errore from './pages/Errore'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Services from './pages/Services'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import FAQ from './pages/resources/FAQ'
import Privacypolicy from './pages/resources/Privacypolicy'
import Terms from './pages/resources/Terms'

function Body() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/privacy-policy' element={<Privacypolicy />} />
        <Route path='/terms-services' element={<Terms />} />
        <Route path='*' element={<Errore />} />
      </Routes>
    </>
  )
}

export default Body
