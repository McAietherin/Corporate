import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Aboutus() {

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
      <section>
      </section>
    </>
  )
}

export default Aboutus
