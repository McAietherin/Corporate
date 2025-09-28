import React from 'react'
import { Link } from 'react-router-dom'
import Faqitem from '../../assets/Faqitem'

function FAQ() {
    return (
        <>
            <div className="hund3"></div>
            <h1 className='eight betn bigh1'>FAQ</h1>
            <Faqitem
                question="What types of corporate consultations does Corporato offer?"
                answer="Corporato provides strategic planning, operational efficiency, risk management, and financial advisory services tailored to meet diverse business needs."
            />
            <Faqitem
                question="Is Corporato experienced in handling international clients?"
                answer="Yes, Corporato has extensive experience working with international clients, providing customized solutions that cater to global market dynamics and challenges."
            />

            <Faqitem
                question="What industries does Corporato specialize in?"
                answer="Corporato specializes in sectors such as finance, healthcare, technology, and retail, offering expert consultancy to address specific industry challenges."
            />

            <Faqitem
                question="How can I schedule a consultation with Corporato?"
                answer="You can schedule a consultation by contacting Corporato through their website contact form or directly calling their Kathmandu office."
            />

            <Faqitem
                question="Does Corporato offer customized consulting packages?"
                answer="Yes, Corporato tailors each consulting engagement to the specific goals, scale, and industry of the client. Our packages are flexible and designed to deliver measurable impact."
            />

            <Faqitem
                question="Where is Corporato headquartered?"
                answer="Corporato is headquartered in Kathmandu, with satellite offices in Singapore and London to support our international clientele."
            />

            <Faqitem
                question="Can Corporato assist with digital transformation initiatives?"
                answer="Absolutely. Corporato provides end-to-end support for digital transformation, including process automation, technology integration, and change management strategies."
            />

            <Faqitem
                question="What makes Corporato different from other consulting firms?"
                answer="Corporato combines deep industry expertise with a client-first approach. We prioritize clarity, agility, and long-term value creation in every engagement."
            />

            <Faqitem
                question="Is there a minimum project size for consulting engagements?"
                answer="Corporato works with businesses of all sizes, but our strategic consulting services are best suited for projects with clearly defined objectives and scalable potential."
            />

            <section id='blacker'>
                <div className='eight betn randomman'>
                    <h2>Elevate your business strategy</h2>
                    <p id='jusidk'>Unlock new potential with expert consultation tailored to your corporate needs. Our Dubai-based specialists are here to guide you through every step towards excellence.</p>
                    <div className="boutons">
                        <Link to={'/login'}><div className="button ">Schedule consultation</div></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ
