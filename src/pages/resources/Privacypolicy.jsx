import React from 'react'
import { Link } from 'react-router-dom'

function Privacypolicy() {
    return (
        <>
            <div className="hund3"></div>
            <h1 className='eight betn bigh1'>Privacy policy</h1>
            <div className="hund3"></div>
            <p className="mbody">
                At Corporato, we are committed to protecting the privacy of our clients, partners, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you interact with our website, services, and communications. By using our site or engaging with our consulting services, you consent to the practices outlined below.
                <br />
                <br />
                We collect personal information in several ways: when you visit our website, fill out a contact form, subscribe to updates, schedule a consultation, or engage in a formal advisory relationship. The types of information we may collect include your name, company affiliation, email address, phone number, job title, and any business-related data you voluntarily provide. We may also collect technical data such as IP address, browser type, device information, and usage patterns through cookies and analytics tools.
                <br />
                <br />
                Corporato uses this information to deliver tailored consulting services, respond to inquiries, improve our website experience, and communicate relevant updates. We may also use aggregated, anonymized data to analyze trends and enhance our strategic offerings. Your information helps us understand your business needs and deliver more effective solutions.
                We do not sell, rent, or trade your personal information to third parties. However, we may share data with trusted service providers who assist us in operating our website, managing communications, or delivering client services — provided they agree to maintain confidentiality and comply with applicable data protection laws. In rare cases, we may disclose information if required by law, regulation, or legal process.
                <br />
                <br />
                Corporato takes data security seriously. We implement industry-standard safeguards to protect your information from unauthorized access, alteration, or destruction. This includes secure servers, encrypted communications, and restricted access protocols. While no system is entirely immune to risk, we continuously monitor and update our security practices to stay ahead of emerging threats.
                <br />
                <br />
                Our website may contain links to external sites. We are not responsible for the privacy practices or content of those third-party websites. We encourage you to review their policies before sharing any personal data.
                If you are a client, your engagement may involve sensitive business information. Corporato treats all client data with strict confidentiality and adheres to non-disclosure agreements as outlined in your consulting contract. We do not use client data for marketing purposes without explicit consent.
                You have the right to access, correct, or delete your personal information. If you wish to update your data or opt out of future communications, please contact us using the details below. We will respond promptly and in accordance with applicable privacy regulations.
                Corporato may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date. Continued use of our website or services after updates implies acceptance of the revised policy.
            </p>
            <div className='eight betn randomman'>
                <h2>Transform your corporate vision</h2>
                <p id='jusidk'>Partner with Corporato in Dubai to unlock strategic insights and enhance your corporate strategies with our expert consultation services. Discover new growth avenues today.</p>
                <div className="boutons" id='blacks'>
                    <Link to={'/login'}><div className="button inv">Schedule consultation</div></Link>
                </div>
            </div>
        </>
    )
}

export default Privacypolicy
