import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Services() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const isMobile = window.innerWidth <= 1250

      const animateCards = (containerSelector, baseThreshold, offsetStep) => {
        const container = document.querySelector(containerSelector)
        if (!container) return

        const items = container.querySelectorAll('.cardcont')
        items.forEach((card, index) => {
          const threshold = isMobile
            ? baseThreshold + index * offsetStep
            : baseThreshold

          if (scrollY >= threshold) {
            const hasAnim = card.classList.contains('animl') ||
              card.classList.contains('animu') ||
              card.classList.contains('animr')
            if (!hasAnim) {
              if (isMobile) {
                const animClass = index % 2 === 0 ? 'animl' : 'animr'
                card.classList.add(animClass)
              } else {
                if (index === 0) card.classList.add('animl')
                else if (index === 1) card.classList.add('animu')
                else if (index === 2) card.classList.add('animr')
              }
            }
          }
        })
      }

      const card1Offset = isMobile ? 400 : 0
      const card2Offset = isMobile ? 700 : 0


      const card1Base = isMobile ? 100 : 500
      const card2Base = isMobile ? 1750 : 1800

      animateCards('.card1', card1Base, card1Offset)
      animateCards('.card2', card2Base, card2Offset)

      const picsThresholds = [1500, 2300, 3100, 3900]
      const pics = document.querySelectorAll('.pics')

      pics.forEach((section, index) => {
        if (scrollY >= picsThresholds[index]) {
          const pictext = section.querySelector('.pictext')
          const picpic = section.querySelector('.picpic')

          if (!pictext.classList.contains('animl') &&
            !pictext.classList.contains('animr')) {
            if (index % 2 === 0) {
              pictext.classList.add('animl')
              picpic.classList.add('animr')
            } else {
              pictext.classList.add('animr')
              picpic.classList.add('animl')
            }
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
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
      <div className="card1 eight">
        <div className="cardcont">
          <div className="cardcimg">
            <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          </div>
          <div className="cardctext">
            <h3>Strategic business advisory</h3>
            <p>Expert consultancy to align your business goals with market opportunities.</p>
          </div>
        </div>
        <div className="cardcont">
          <div className="cardcimg">
            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          </div>
          <div className="cardctext">
            <h3>Financial risk management</h3>
            <p>Comprehensive solutions to identify, assess, and mitigate financial risks effectively.</p>
          </div>
        </div>
        <div className="cardcont">
          <div className="cardcimg">
            <img src="https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          </div>
          <div className="cardctext">
            <h3>Operational efficiency enhancement</h3>
            <p>Optimize processes to boost productivity and drive sustainable growth.</p>
          </div>
        </div>
      </div>
      <div className="eight banner ban2">
        <img src="https://images.unsplash.com/photo-1704655295066-681e61ecca6b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
      </div>
      <section className='card2black'>
        <div className="card2 eight">
          <div className="cardcont">
            <div className="cardcimg">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
            </div>
            <div className="cardctext">
              <h3>Comprehensive corporate consulting</h3>
              <p>We developed a detailed services page for a major consultancy firm in Dubai. The page clearly outlines their diverse consulting services tailored for corporate clients, including strategic planning, financial analysis, and operational enhancements. Our approach emphasized clarity and professionalism, ensuring potential clients quickly understood the firm's value propositions and expertise areas.</p>
            </div>
          </div>
          <div className="cardcont">
            <div className="cardcimg">
              <img src="https://images.unsplash.com/photo-1713173642147-30cbbdb176d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
            </div>
            <div className="cardctext">
              <h3>Dynamic service offerings showcase</h3>
              <p>For a leading corporate advisor in Dubai, we crafted a services page that dynamically presents their offerings. The page uses interactive elements to engage visitors, with sections dedicated to each service type, such as market entry strategies, risk management, and leadership training. This layout not only informs but also guides users towards deeper engagement with specific consultations suited to their needs.</p>
            </div>
          </div>
          <div className="cardcont">
            <div className="cardcimg">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
            </div>
            <div className="cardctext">
              <h3>Engaging client solutions presentation</h3>
              <p>Tasked with enhancing the online presence of a consultancy agency, we designed a services page focused on client solutions and success stories. Featuring innovative design elements and compelling content, the page highlights the consultancy’s bespoke service packages for sectors like finance and technology. The integration of customer testimonials and case studies serves to build trust and showcase real-world impacts.</p>
            </div>
          </div>
        </div>
      </section>
      <div className='eight betn randomman'>
        <h2>Enhance your corporate strategy</h2>
        <p id='jusidk'>Leverage expert consultation to optimize your business operations and drive success in Dubai's dynamic market. Connect with our seasoned professionals today.</p>
        <div className="boutons" id='blacks'>
          <Link to={'/login'}><div className="button inv">Schedule consultation</div></Link>
        </div>
      </div>
    </>
  )
}

export default Services
