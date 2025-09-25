import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Errore from './pages/Errore'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'

function Body() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='*' element={<Errore />} />
      </Routes>
    </>
  )
}

export default Body
