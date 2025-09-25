import React from 'react'
import { Link } from 'react-router-dom'
import personbanner from '../assets/personbanner.png'
import waves from '../assets/waves.png'

function Login() {
    return (
        <>
            <div className='eight maflex'>
                <main className='animl'>
                    <h1>Welcome back to our corporate community</h1>
                    <p>Log in to reconnect with professionals and utilize exclusive business insights and resources.</p>
                    <div className="imgm">
                        <img src={personbanner} alt="img" /></div>
                </main>
                <aside className='animr'>
                    <h2>Log In</h2>
                    <form className="logger">
                        <input type="email" placeholder='Account Email' />
                        <input type="password" placeholder='Password' />
                        <p id='forgot'>Forgot password?</p>
                        <input type="submit" placeholder='Log In' className='submit' />
                        <p>Or,</p>
                        <div className="button" id='google'>
                            <i class="bi bi-google"></i>
                            <p>Log in with google</p>
                        </div>
                    </form>
                    <div>
                        <p>Don't have an account?</p>
                        <Link to={'/sign-up'}>Sign up</Link></div>
                </aside>
            </div>
            <div className="waves">
                <img src={waves} alt="banner" />
            </div>
        </>
    )
}

export default Login
