import { Link } from 'gatsby'
import React from 'react'
import Banner from '../../assets/videos/Banner.mp4'
import { useMetaData } from '../../hooks/use-meta-data'
import { AppWrap } from '../../wrapper'
import './header.scss'

const Header = () => {
  const siteMetaData = useMetaData();

  return (
    <div id="accueil" className='app__hero'>
      <div className='app__hero-background'>
        <video src={Banner} type="video/mp4" autoPlay loop muted playsInline className='app__hero-video'></video>
      </div>
      <div className='app__hero-content'>
        <div className='app__hero-items'>
          <h1 className='app__hero-title'>{siteMetaData.title}</h1>
          <p className='app__hero-paragraph'>
            {siteMetaData.description}
          </p>
          <Link className='app__hero-button' to="#services">A propos</Link>
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