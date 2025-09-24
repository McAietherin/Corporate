import React from 'react'
import logo1 from './logo1.png'

function Header() {
  return (
    <nav>
      <div>
        <div className="logo">
          <img src={logo1} alt="logo" />
          <h2>Corporato</h2>
        </div>
        <ul>
          <li>Services</li>
          <li>Solutions</li>
          <li>About us</li>
          <li>Resources<i class="bi bi-chevron-down"></i></li>
          <li className='button'>Contact us</li>
          <li className='button inv'>Sign up</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
