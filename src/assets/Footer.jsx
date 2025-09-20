import React from 'react'
import logo1 from './logo1.png'

function Footer() {
  return (
    <footer>
      <div>
        <div id="box">
          <div className="logo">
            <img src={logo1} alt="logo" />
          </div>
          <p>Company</p>
          <p>Resources</p>
          <p>Facebook</p>
          <div id="inpu"></div>
          <ul>
            <li>random</li>
            <li>random</li>
            <li>random</li>
            <li>random</li>
            <li>random</li>
          </ul>
          <ul>
            <li>random</li>
            <li>random</li>
            <li>random</li>
            <li>random</li>
            <li>random</li>
          </ul>
          <ul>
            <li>random</li>
            <li>random</li>
            <li>random</li>
            <li>random</li>
            <li>random</li>
          </ul>
        </div>
        <div id="ender">
          <p>Privacy policy</p>
          <ul>
            <li>Terms of service</li>
            <li>Cookies settings</li>
            <li>Customer service</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
