import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Aboutus() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const cardsa = document.querySelectorAll('.cardsa .carde')
      const isMobile = window.innerWidth <= 900

      cardsa.forEach((carde, index) => {
        const baseThreshold = 1900
        const offset = isMobile ? index * 700 : 0
        const threshold = baseThreshold + offset

        if (scrollY >= threshold) {
          const hasAnim = carde.classList.contains('animl') ||
            carde.classList.contains('animu') ||
            carde.classList.contains('animr')

          if (!hasAnim) {
            if (isMobile) {
              const animClass = index % 2 === 0 ? 'animl' : 'animr'
              carde.classList.add(animClass)
            } else {
              if (index === 0) carde.classList.add('animl')
              else if (index === 1) carde.classList.add('animu')
              else if (index === 2) carde.classList.add('animr')
            }
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true
  }

  return (
    <>
      <section id='about'>
        <div className="hund3"></div>
        <div className="betn">
          <h1>About Us</h1>
        </div>
        <div className="flex1 space">
          <div className="flextext animl">
            <h2>The world's leading coporate consultants</h2>
            <p>Corporato, a premier consultation firm dedicated to empowering businesses with strategic insights and innovative solutions that drive sustainable success.</p><p>With a deep understanding of the corporate landscapes, our team of experienced consultants partners with organizations across all sectors to navigate complex challenges and seize new opportunities.</p><p> At Corporato, we believe in fostering long-term relationships built on trust, expertise, and a commitment to excellence, ensuring that our clients achieve their business objectives with confidence and agility.</p>
          </div>
          <div className="flexpic animr"><img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="picture" /></div>
        </div>
        <div className="largespace"></div>
        <div className='eight betn'>
          <h2>Our mission</h2>
          <p>Empowering growth through strategic corporate consultation in Dubai's dynamic market.</p>
          <p className='higher'>Unlock your business's full potential with Corporato. Specializing in strategic consulting for corporate websites, we offer tailored solutions to enhance digital presence and drive growth. Our Dubai-based experts deliver innovative strategies and seamless execution to elevate your brand's online impact in the dynamic Middle Eastern market.</p>
        </div>
      </section>
      <div className="largespace"></div>
      <section className='eight'>
        <Slider {...settings}>
          <div className="slide">
            <img src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team collaboration" />
          </div>
          <div className="slide">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern workspace" />
          </div>
          <div className="slide">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="slide">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="slide">
            <img src="https://images.unsplash.com/photo-1587089879249-87bf7d2972df?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </Slider>

      </section>
      <div className="largespace"></div>
      <section className='bgblack'>
        <div className="eight betn juan">
          <h2>Integrity and insight in consulting</h2>
        </div>
        <div className="cardsa eight betn">
          <div className="carde">
            <div className="cardimage">
              <img src="https://images.unsplash.com/photo-1548783300-70b41bc84f56?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
            </div>
            <div className="cardoverlay">
              <h3>Integrity</h3>
            </div>
          </div>
          <div className="carde">
            <div className="cardimage">
              <img src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
            </div>
            <div className="cardoverlay">
              <h3>Innovation</h3>
            </div>
          </div>
          <div className="carde">
            <div className="cardimage">
              <img src="https://plus.unsplash.com/premium_photo-1673380327485-c00f4bd44191?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
            </div>
            <div className="cardoverlay">
              <h3>Transformation</h3>
            </div>
          </div>
        </div>
      </section>
      <div className='eight betn randomman'>
        <h2>Ready to transform your workplace</h2>
        <p>Connect with our experts to explore how we can optimize your technological workspace and drive organizational performance.</p>
        <div className="boutons" id='blacks'>
          <Link to={'/login'}><div className="button inv">Schedule consultation</div></Link>
        </div>
      </div>
    </>
  )
}

export default Aboutus
