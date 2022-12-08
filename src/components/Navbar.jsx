import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from "react-scroll"

const Navbar = () => {
    const [scrolled, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);
    const menu = ['accueil', 'services', 'expériences','compétences', 'projets', 'contact' ];

    const handleClick = () => {
        setToggle(!toggle);
    }

    const handleChange = () => {
        if(window.scrollY >= 80){
          setScroll(true)
        } else {
          setScroll(false)
        }
      }
    
      useEffect(() => {
          window.addEventListener('scroll', handleChange)
          return () => {
            setScroll({})
        }
      }, [])

    return (
        <nav className={ scrolled ? "app__navbar scrolled" : "app__navbar" }>
            <div onClick={() => window.scrollTo(0,0)} className="app__navbar-logo app__flex">
                K
            </div>
            <ul className="app__navbar-links">
                {
                    menu?.map((item) => (
                        <li className="app__flex p-text" key={`link-${item}`}>
                            <LinkScroll activeClass="active" spy={true}  to={item} offset={-70}>{item}<div/></LinkScroll>
                        </li>   
                    ))
                }
            </ul>

            <div role="button" tabIndex={0} className="app__navbar-menu app__flex" onClick={handleClick}>
                    <div className={ toggle ? "app__navbar-icon app__flex rotated" : "app__navbar-icon app__flex"} ></div>
            </div>
            <div
                className={ toggle ? "app__navbar-side open" : "app__navbar-side"}
            >
                <ul>
                    {
                        menu?.map((item) => (
                            <li key={item}>
                                <LinkScroll activeClass="active" spy={true} to={item} offset={-30} onClick={() => setToggle(false)}>{item}</LinkScroll>
                            </li>   
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar