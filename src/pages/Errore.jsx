import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Errore() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div id="beige">
            <h1>404</h1>
            <h2>Something unexpected happened</h2>
            <Link to={'/'}>Return home</Link>
        </div>
    )
}

export default Errore
