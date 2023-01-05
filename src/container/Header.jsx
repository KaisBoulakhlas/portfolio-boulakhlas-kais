import { Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import Banner from '../assets/videos/Banner.mp4'
import { useMetaData } from '../hooks/use-meta-data'
import { AppWrap } from '../wrapper'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  const siteMetaData = useMetaData();
  const refDesc = useRef(null);

  const handleDone = () => {
    const pointer = refDesc.current.childNodes[1];
    pointer.style.display = "none";
    pointer.style.animation = "none";
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDone();
    }, 29000)
  
    return () => {
      clearTimeout(timer);
    }
  }, [])
  
    
  return (
    <div id="accueil"  className='app__hero'>
      <div className='app__hero-background'>
        <video src={Banner} type="video/mp4" autoPlay loop muted playsInline className='app__hero-video'></video>
      </div>
      <div className='app__hero-content'>
        <div className='app__hero-items'>
            <h1 className='app__hero-title'>{siteMetaData.title}</h1>
            <p className='app__hero-paragraph' ref={refDesc}>
              <Typewriter
                words={[
                  'Portfolio montrant mes compétences/expériences,',
                  'Ainsi que mes différents projets dans l\'informatique,',
                  'Développement de sites web/applications web et plus...',
                  'Développeur web qui apprend tous les jours...'
                ]}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={20}
                delaySpeed={500}
              />
            </p>
            <Link className='button' to="#services">A propos</Link>
        </div>
      </div>
      <div className="copyright">
                <p className="p-text">{new Date().getFullYear()} - {siteMetaData.author}</p>
                <p className="p-text">Tous droits réservés</p>
      </div>
    </div>
  )
}

export default AppWrap(Header, 'accueil')