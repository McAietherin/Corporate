import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import logo2 from '../assets/logo2.png'
import { Link } from 'react-router-dom'

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const imageRefs = useRef([])

  useEffect(() => {
    const img = imageRefs.current[activeSlide]
    if (img) {
      img.classList.remove('grow')
      void img.offsetWidth
      img.classList.add('grow')
    }
  }, [activeSlide])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const perksThreshold = 700
      if (scrollY >= perksThreshold) {
        const perks = document.querySelectorAll('.perk')
        perks.forEach((perk, index) => {
          if (!perk.classList.contains('animl') &&
            !perk.classList.contains('animu') &&
            !perk.classList.contains('animr')) {
            if (index === 0) perk.classList.add('animl')
            else if (index === 1) perk.classList.add('animu')
            else if (index === 2) perk.classList.add('animr')
          }
        })
      }
      const perks2Threshold = 4700
      if (scrollY >= perks2Threshold) {
        const perks2 = document.querySelectorAll('.perks2 .perk')
        perks2.forEach((perk, index) => {
          if (!perk.classList.contains('animl') &&
            !perk.classList.contains('animu') &&
            !perk.classList.contains('animr')) {
            if (index === 0) perk.classList.add('animl')
            else if (index === 1) perk.classList.add('animu')
            else if (index === 2) perk.classList.add('animr')
          }
        })
      }

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

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    waitForAnimate: false,
    afterChange: (current) => setActiveSlide(current)
  }

  const images = ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1549637642-90187f64f420?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];

  return (
    <>
      <section>
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className='field'>
              <img ref={(el) => (imageRefs.current[i] = el)}
                src={src}
                alt={`Slide ${i + 1}`}
                className='grow' />
              <div className="overlay">
                <h1 className='animl'>Transforming workspaces with cutting-edge technology solutions</h1>
                <p className='animr'>We design innovative tech environments that empower teams and drive organizational performance. Out approach combines strategic design with advanced technological integration.</p>
                <div className="boutons animr">
                  <Link to={'/services'}><div className="button inv">Explore</div></Link>
                  <Link to={'/about-us'}><div className="button">Learn more</div></Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <main>
        <div className='eight betn'>
          <h6>Innovative</h6>
          <h2>Comprehensive technology solutions for modern workplaces</h2>
          <p>We provide integrated services that transform how businesses leverage technology, and design, to enhance productivity and collaboration.</p>
          <div className="perks">
            <div className="perk">
              <div className="perkimg"><img src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" /></div>
              <h3>Strategic workplace design</h3>
              <p>Custom design solutions tailored to your organizational culture and workflow requirements.</p>
            </div>
            <div className="perk">
              <div className="perkimg"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" /></div>
              <h3>Technology integration</h3>
              <p>Seamless implementation of advanced technological infrastructure and tools.</p>
            </div>
            <div className="perk">
              <div className="perkimg"><img src="https://images.unsplash.com/photo-1721333090458-a9f4461286b6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" /></div>
              <h3>Performance optimization</h3>
              <p>Data driven strategies to improve workplace efficiencty and employee engagement.</p>
            </div>
          </div>
          <div className="boutons" id='black'>
            <Link to={'/solutions'}><div className="button" id='gold'>Discover</div></Link>
            <Link to={'/about-us'}><div className="button spc">Learn more<i class="bi bi-chevron-right"></i></div></Link>
          </div>
        </div>
        <div className='dark'>
          <div className="eight boxed">
            <div className="numcom">
              <h3>01</h3>
              <h3>Initial Consultation</h3>
            </div>
            <div className="pics">
              <div className='pictext'>
                <h6>Discovery</h6>
                <h2>Understanding your unique workplace requirements</h2>
                <p>We begin by conducting an in-depth analysis of your current workspace, organizational goals, and technological needs. Our experts listen carefully to develop a comprehensive undertanding.</p>
                <div className="boutons">
                  <Link to={'/about-us'}><div className="button">Learn more</div></Link>
                  <Link to={'/sign-up'}><div className="button spc">Get started<i class="bi bi-chevron-right"></i></div></Link>
                </div>
              </div>
              <div className="picpic">
                <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="eight boxed">
            <div className="numcom">
              <h3>02</h3>
              <h3>Design strategy</h3>
            </div>
            <div className="pics">
              <div className="picpic">
                <img src="https://images.unsplash.com/photo-1743385779347-1549dabf1320?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
              </div>
              <div className='pictext pic2'>
                <h6>Planning</h6>
                <h2>Crafting a tailored technological workplace solution</h2>
                <p>Our team develops a customized strategy that aligns technological infrastructure with your organizational culture, workflow, and performance objectives.</p>
                <div className="boutons">
                  <Link to={'/about-us'}><div className="button">Learn more</div></Link>
                  <Link to={'/sign-up'}><div className="button spc">Get started<i class="bi bi-chevron-right"></i></div></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="eight boxed">
            <div className="numcom">
              <h3>03</h3>
              <h3>Implementation phase</h3>
            </div>
            <div className="pics">
              <div className='pictext'>
                <h6>Execution</h6>
                <h2>Seamless integration of design and technology</h2>
                <p>We meticulously execute the proposed strategy, ensuring minimal disruption and maximum efficiency during the transformation of your workspace.</p>
                <div className="boutons">
                  <Link to={'/about-us'}><div className="button">Learn more</div></Link>
                  <Link to={'/sign-up'}><div className="button spc">Get started<i class="bi bi-chevron-right"></i></div></Link>
                </div>
              </div>
              <div className="picpic">
                <img src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="eight boxed">
            <div className="numcom">
              <h3>04</h3>
              <h3>Continuous support</h3>
            </div>
            <div className="pics">
              <div className="picpic">
                <img src="https://images.unsplash.com/photo-1579719558505-ad4a5fee0847?q=80&w=1248&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
              </div>
              <div className='pictext pic2'>
                <h6>Optimization</h6>
                <h2>Ongoing performance monitoring and enhancement</h2>
                <p>Our commitment extends beyond implementation. We provide continuous support, performance tracking, and iterative improvements to ensure long-term success.</p>
                <div className="boutons">
                  <Link to={'/about-us'}><div className="button">Learn more</div></Link>
                  <Link to={'/sign-up'}><div className="button spc">Get started<i class="bi bi-chevron-right"></i></div></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="line" id='trans'></div>
        </div>
        <div className='eight betn hund'>
          <h2>Client success stories</h2>
          <p>Hear from organizations that have transformed their workspaces with our innovative solutions.</p>
          <div className="perks2">
            <div className="perk">
              <div className="perkimg2"><img src={logo2} alt="logo" /></div>
              <h4>Their approach to workplace design fundamentally changed how we think about productivity and collaboration.</h4>
              <div className="tcard">
                <div className="circimg">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
                </div>
                <h5>Sarah Johnson</h5>
                <p>CTO, Tech Innovations Inc</p>
              </div>
            </div>
            <div className="perk">
              <div className="perkimg2"><img src={logo2} alt="logo" /></div>
              <h4>The technology integration was seamless and dramatically improved our team's efficiency.</h4>
              <div className="tcard">
                <div className="circimg">
                  <img src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
                </div>
                <h5>Michael Chen</h5>
                <p>Operations Director, Global Solutions</p>
              </div>
            </div>
            <div className="perk">
              <div className="perkimg2"><img src={logo2} alt="logo" /></div>
              <h4>A game-changing solution that perfectly aligned with our organizational goals and culture.</h4>
              <div className="tcard">
                <div className="circimg" id='b'>
                  <img src="https://images.unsplash.com/photo-1631479501467-a46d06c900fc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person" />
                </div>
                <h5>Juan Rodriguez</h5>
                <p>HR Director, Creative Enterprises</p>
              </div>
            </div>
          </div>
        </div>
        <div className='eight betn' id='hund2'>
          <h2>Ready to transform your workplace</h2>
          <p>Connect with our experts to explore how we can optimize your technological workspace and drive organizational performance.</p>
          <div className="boutons" id='blacks'>
            <Link to={'/contact-us'}><div className="button inv">Contact us</div></Link>
            <Link to={'/login'}><div className="button">Schedule consultation</div></Link>
          </div>
        </div>
        <div className="eight banner">
          <img src="https://images.unsplash.com/photo-1637979910474-38e3ad8d5cab?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
        </div>
      </main>
    </>
  )
}

export default Home
