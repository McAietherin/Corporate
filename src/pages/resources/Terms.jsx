import React from 'react'
import { Link } from 'react-router-dom'

function Terms() {
    return (
        <>
            <div className="hund3"></div>
            <h1 className='eight betn bigh1'>Terms of service</h1>
            <div className="hund3"></div>
            <p className="mbody">
                Welcome to Corporato. By accessing or using our website and services, you agree to the following Terms of Service. These terms govern your use of our site, content, and consulting offerings. If you do not agree, please refrain from using our services.
                <br />
                <br />
                Corporato provides strategic consulting services to corporate clients. Use of our website is intended for lawful, professional purposes only. You agree not to misuse the site, attempt unauthorized access, or interfere with its functionality. All content, including text, images, branding, and downloadable materials, is the intellectual property of Corporato or its partners and may not be reproduced or redistributed without written permission.
                <br />
                <br />
                Engagements with our consulting team are governed by separate service agreements. These Terms do not constitute a binding contract for consulting services. Any proposals, deliverables, or strategic recommendations are subject to mutual agreement and scope definition.
                <br />
                <br />
                We respect your privacy. Our Privacy Policy outlines how we collect, use, and protect your data. By using our site, you consent to the practices described therein. Occasionally, our site may link to third-party resources. Corporato is not responsible for the content or reliability of these external sites.
                All services and content are provided “as is” without warranties of any kind. Corporato does not guarantee uninterrupted access, accuracy of information, or suitability for specific business outcomes. We are not liable for any indirect or consequential damages arising from your use of the site or services.
                <br />
                <br />
                You agree to indemnify and hold harmless Corporato and its affiliates from any claims or liabilities resulting from your breach of these terms or misuse of our services. We reserve the right to update these Terms at any time. Changes will be posted on this page, and continued use of the site implies acceptance of the revised terms.
                <br />
                <br />
                These Terms are governed by the laws of Nepal. Any disputes shall be resolved exclusively in the courts of Kathmandu.
            </p>
            <div className='eight betn randomman'>
                <h2>Drive business excellence today</h2>
                <p id='jusidk'>Partner with our expert consultants to unlock new opportunities and elevate your business strategies in the dynamic Dubai market. Book your consultation now.</p>
                <div className="boutons" id='blacks'>
                    <Link to={'/login'}><div className="button inv">Schedule consultation</div></Link>
                </div>
            </div>
        </>
    )
}

export default Terms
