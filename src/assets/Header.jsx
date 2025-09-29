import React, { useEffect, useRef, useState } from 'react'
import logo1 from './logo1.png'
import { Link } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const mobileRef = useRef(null)
  const dropperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileRef.current &&
        !mobileRef.current.contains(event.target) &&
        dropperRef.current &&
        !dropperRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])


  return (
    <>
      <nav>
        <div>
          <Link to={'/'}><div className="logo">
            <img src={logo1} alt="logo" />
            <h2>Corporato</h2>
          </div></Link>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/about-us'}>About us</Link></li>
            <li className='hover'>Resources<i className="bi bi-chevron-down"></i>
              <div className="dropdown">
                <div id="sizer"></div>
                <ul>
                  <li><Link to={'/terms-services'}>Terms of Service</Link></li>
                  <li><Link to={'/faq'}>FAQ</Link></li>
                  <li><Link to={'/privacy-policy'}>Privacy policy</Link></li>
                </ul>
              </div>
            </li>
            <Link to={'/contact-us'}><li className='button'>Contact us</li></Link>
            <Link to={'/sign-up'}><li className='button inv'>Sign up</li></Link>
          </ul>
          <div id="dropper" ref={dropperRef} onClick={() => setIsOpen(!isOpen)}>
            <i class="bi bi-list"></i>
          </div>
        </div>
      </nav>
      <div id="mobile" ref={mobileRef}
        style={{
          top: isOpen ? '70px' : '-100%'
        }}
      >
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/services'}>Services</Link></li>
          <li><Link to={'/about-us'}>About us</Link></li>
          <li className='hover'>Resources<i className="bi bi-chevron-down"></i>
            <div className="dropdown2">
              <div id="sizer"></div>
              <ul>
                <li><Link to={'/terms-services'}>Terms of Service</Link></li>
                <li><Link to={'/faq'}>FAQ</Link></li>
                <li><Link to={'/privacy-policy'}>Privacy policy</Link></li>
              </ul>
            </div>
          </li>
          <li><Link to={'/contact-us'}>Contact us</Link></li>
          <li className='nobor'><Link to={'/sign-up'}>Sign up</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header
