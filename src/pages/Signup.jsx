import React from 'react'
import { Link } from 'react-router-dom'
import personbanner from '../assets/personbanner.png'

function Signup() {
    return (
        <div className='eight maflex'>
            <main className='animl'>
                <h1>Join our corporate community</h1>
                <p>Sign up now to connect with professionals and unlock exclusive business insights and resources.</p>
                <div className="imgm">
                    <img src={personbanner} alt="img" /></div>
            </main>
            <aside className='animr'>
                <h2>Create Account</h2>
                <div className="logger">
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='Business Email' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Confirm Password' />
                    <input type="submit" placeholder='Sign Up' className='submit' />
                </div>
                <div><p>Already have an account?</p>
                    <Link to={'/login'}>Log in</Link></div>
            </aside>
        </div>
    )
}

export default Signup
