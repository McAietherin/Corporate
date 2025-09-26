import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
      <section>
        <div className='field' id='field2'>
          <img src='https://images.unsplash.com/photo-1667646639495-ab1b362e1523?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='background' />
          <div className="overlay">
            <h1 className='animl'>Services</h1>
            <div className="boutons animl">
              <Link to={'/sign-up'}><div className="button">Sign up</div></Link>
              <Link to={'/login'}><div className="button inv">Log in</div></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
