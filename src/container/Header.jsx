import { Link } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'
import Banner from '../assets/videos/Banner.mp4'
import { useMetaData } from '../hooks/use-meta-data'
import { AppWrap } from '../wrapper'
import TypeWriterEffect from 'react-typewriter-effect';

const Header = () => {
  const siteMetaData = useMetaData();
  
  const refTitle = useRef(null);
  const refDesc = useRef(null);

  useEffect(() => {
    if (typeof window !== `undefined` && typeof document !== `undefined`) { 
      const timerTitle = setTimeout(() => {
        const pointerTitle = refTitle.current.childNodes[0].childNodes[0].childNodes[1];
        if(pointerTitle){
          pointerTitle.style.display = "none";
          pointerTitle.classList.remove("add-cursor-animate");
        }
      }, 2250);
      return () => clearTimeout(timerTitle);
    }
  }, [])

  useEffect(() => {
    if (typeof window !== `undefined` && typeof document !== `undefined`) { 
      const timerDesc = setTimeout(() => {
        const pointerDesc = refDesc.current.childNodes[0].childNodes[0].childNodes[1];
          if(pointerDesc) {
            pointerDesc.style.display = "none";
            pointerDesc.classList.remove("add-cursor-animate");
          }
        }, 17000);
        return () => clearTimeout(timerDesc);
    }
  }, [])
  
  return (
    <div id="accueil"  className='app__hero'>
      <div className='app__hero-background'>
        <video src={Banner} type="video/mp4" autoPlay loop muted playsInline className='app__hero-video'></video>
      </div>
      <div className='app__hero-content'>
        <div className='app__hero-items'>
              <div className='app__hero-title' ref={refTitle}>
                <TypeWriterEffect
                  startDelay={100}
                  cursorColor="white"
                  text={siteMetaData.title}
                  typeSpeed={100}
                />
                </div>

              <span className='app__hero-paragraph' ref={refDesc}>
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