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
          <li>random</li>
          <li>random</li>
          <li>random</li>
          <li>random<i class="bi bi-chevron-down"></i></li>
          <li className='button'>random</li>
          <li className='button inv'>random</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
