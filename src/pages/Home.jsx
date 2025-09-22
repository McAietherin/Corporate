import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const imageRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 700
      if (window.scrollY >= scrollThreshold) {
        const perks = document.querySelectorAll('.perk')
        perks.forEach((perk, index) => {
          if (index === 0) {
            perk.classList.add('animl')
          } else if (index === 1) {
            perk.classList.add('animu')
          } else if (index === 2) {
            perk.classList.add('animr')
          }
        })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const img = imageRefs.current[activeSlide]
    if (img) {
      img.classList.remove('grow')
      void img.offsetWidth // force reflow
      img.classList.add('grow')
    }
  }, [activeSlide])

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
                  <div className="button inv">Explore</div>
                  <div className="button">Learn more</div>
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
            <div className="button">Discover</div>
            <div className="button spc">Learn more<i class="bi bi-chevron-right"></i></div>
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
                  <div className="button">Discover</div>
                  <div className="button spc">Learn more<i class="bi bi-chevron-right"></i></div>
                </div>
              </div>
              <div className="picpic">
                <img src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="eight boxed">
            <div className="numcom">
              <h3>01</h3>
              <h3>Initial Consultation</h3>
            </div>
            <div className="pics">
              <div className="picpic">
                <img src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
              </div>
              <div className='pictext pic2'>
                <h6>Discovery</h6>
                <h2>Understanding your unique workplace requirements</h2>
                <p>We begin by conducting an in-depth analysis of your current workspace, organizational goals, and technological needs. Our experts listen carefully to develop a comprehensive undertanding.</p>
                <div className="boutons">
                  <div className="button">Discover</div>
                  <div className="button spc">Learn more<i class="bi bi-chevron-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
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
                  <div className="button">Discover</div>
                  <div className="button spc">Learn more<i class="bi bi-chevron-right"></i></div>
                </div>
              </div>
              <div className="picpic">
                <img src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="eight boxed">
            <div className="numcom">
              <h3>01</h3>
              <h3>Initial Consultation</h3>
            </div>
            <div className="pics">
              <div className="picpic">
                <img src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
              </div>
              <div className='pictext pic2'>
                <h6>Discovery</h6>
                <h2>Understanding your unique workplace requirements</h2>
                <p>We begin by conducting an in-depth analysis of your current workspace, organizational goals, and technological needs. Our experts listen carefully to develop a comprehensive undertanding.</p>
                <div className="boutons">
                  <div className="button">Discover</div>
                  <div className="button spc">Learn more<i class="bi bi-chevron-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </main>
    </>
  )
}

export default Home
