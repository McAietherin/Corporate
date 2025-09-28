import React from 'react'
import { Link } from 'react-router-dom'
import bluebanner from '../assets/bluebanner.png'
import waves2 from '../assets/waves2.png'

function Contactus() {
    return (
        <>
            <div className='eight maflex'>
                <main className='animl dissapear'>
                    <h1>Report any problems or give suggestions</h1>
                    <p>Let us know how we can assist you. Whether you found bugs, had queries, suggestions, or partnership offers.</p>
                    <div className="imgm">
                        <img src={bluebanner} alt="img" /></div>
                </main>
                <aside className='animr'>
                    <h2>Contact us</h2>
                    <form className="logger">
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea name="message" id="message" placeholder='Message'></textarea>
                        <input type="file" name="juan" id="file" />
                        <input type="submit" placeholder='Log In' className='submit' />
                    </form>
                </aside>
            </div>
            <div className="waves">
                <img src={waves2} alt="banner" />
            </div>
        </>
    )
}

export default Contactus
