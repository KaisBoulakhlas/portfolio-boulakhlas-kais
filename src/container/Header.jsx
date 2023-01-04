import { Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import Banner from '../assets/videos/Banner.mp4'
import { useMetaData } from '../hooks/use-meta-data'
import { AppWrap } from '../wrapper'
import TypeWriterEffect from 'react-typewriter-effect';

const Header = () => {
  const siteMetaData = useMetaData();

  useEffect(() => {
    setTimeout(() => {
      const pointer = document.querySelector('.app__hero-title div h1 .react-typewriter-pointer');
      pointer.style.display = "none";
      pointer.classList.remove("add-cursor-animate");
    }, 2250)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const pointer = document.querySelector('.app__hero-paragraph div h1 .react-typewriter-pointer');
      pointer.style.display = "none";
      pointer.classList.remove("add-cursor-animate");
    }, 15000)
  }, [])
  
  return (
    <div id="accueil"  className='app__hero'>
      <div className='app__hero-background'>
        <video src={Banner} type="video/mp4" autoPlay loop muted playsInline className='app__hero-video'></video>
      </div>
      <div className='app__hero-content'>
        <div className='app__hero-items'>
          <div className='app__hero-title'>
            <TypeWriterEffect
              startDelay={100}
              cursorColor="white"
              text={siteMetaData.title}
              typeSpeed={100}
            />
          </div>
          <span className='app__hero-paragraph'>
          <TypeWriterEffect
            startDelay={2250}
            cursorColor="white"
            multiText={[
              'Portfolio montrant mes compétences/expériences,',
              'Ainsi que mes différents projets dans l\'informatique,',
              'Développement de sites web/applications web...',
              'Développeur web qui apprend tous les jours...'
            ]}
            multiTextDelay={200}
            typeSpeed={20}
          />
          </span>
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