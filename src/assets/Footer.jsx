import React from 'react'
import logo1 from './logo1.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div>
        <div id="box">
          <Link to={'/'} id='it1'><div className="logo">
            <img src={logo1} alt="logo" />
          </div></Link>
          <p>Company</p>
          <p>Resources</p>
          <p>Media</p>
          <div id="inpu">
            <p>Stay updated on the latest insights, trends, and innovations in workspace technology</p>
            <div id="inper">
              <input type="email" placeholder='Enter email' name='email' id='emailj' />
              <div className="button" id='subscribe'><p>Subscribe</p></div>
            </div>
            <p id="small">By subscribing, you agree to our privacy policy and consent to recieving updates.</p>
            <br />
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
          <div id='it9'>
            <br />
            <p>&copy; 2025 Tech Workspace. All rights reserved</p>
          </div>
        </div>
        <div id="ender">
          <p><Link to={'/privacy-policy'}>Privacy policy</Link></p>
          <ul>
            <li><Link to={'/terms-services'}>Terms of service</Link></li>
            <li className='j2'>Cookies settings</li>
            <li className='j2'>Customer service</li>
          </ul>
          <p className='j1'>Cookies settings</p>
          <p className='j1'>Customer service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
