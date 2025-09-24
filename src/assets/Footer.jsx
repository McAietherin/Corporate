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
          <p>Media</p>
          <div id="inpu">
            <p>Stay updated on the latest insights, trends, and innovations in workspace technology</p>
            <div id="inper">
              <input type="email"placeholder='Enter email' />
              <div className="button" id='subscribe'><p>Subscribe</p></div>
            </div>
            <p id="small">By subscribing, you agree to our privacy policy and consent to recieving updates.</p>
          </div>
          <ul>
            <li>About us</li>
            <li>Career</li>
            <li>Press</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
          <ul>
            <li>Case studies</li>
            <li>White papers</li>
            <li>Webinars</li>
            <li>Blog</li>
            <li>Follow us</li>
          </ul>
          <ul>
            <li><i class="bi bi-facebook"></i>Facebook</li>
            <li><i class="bi bi-instagram"></i>Instagram</li>
            <li><i class="bi bi-linkedin"></i>LinkedIn</li>
            <li><i class="bi bi-youtube"></i>Youtube</li>
            <li><i class="bi bi-twitter-x"></i>Twitter(X)</li>
          </ul>
          <ul><li>&copy; 2025 Tech Workspace. All rights reserved</li></ul>
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
