import React, { useState } from 'react'

function Faqitem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`faqitem ${isOpen ? 'open' : ''}`}>
            <div className="faqheader" onClick={() => setIsOpen(!isOpen)}>
                <h3>{question}</h3>
                <span className="toggle">
                    {isOpen ? (
                        <i className="bi bi-chevron-up"></i>
                    ) : (
                        <i className="bi bi-chevron-down"></i>
                    )}
                </span>
            </div>
            {isOpen && (
                <div className="faqbody">
                    <p>{answer}</p>
                </div>
            )}
            <br />
            <hr />
        </div>

    )
}

export default Faqitem
