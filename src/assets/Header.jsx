import React from 'react'
import logo1 from './logo1.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <div>
        <Link to={'/'}><div className="logo">
          <img src={logo1} alt="logo" />
          <h2>Corporato</h2>
        </div></Link>
        <ul>
          <li><Link to={'/services'}>Services</Link></li>
          <li><Link to={'/solutions'}>Solutions</Link></li>
          <li><Link to={'/about-us'}>About us</Link></li>
          <li className='hover'>Resources<i class="bi bi-chevron-down"></i>
            <div className="dropdown">
              <div id="sizer"></div>
              <ul>
                <li>Random</li>
                <li>Random</li>
                <li>Random</li>
              </ul>
            </div>
          </li>
          <Link to={'/contact-us'}><li className='button'>Contact us</li></Link>
          <Link to={'/sign-up'}><li className='button inv'>Sign up</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
