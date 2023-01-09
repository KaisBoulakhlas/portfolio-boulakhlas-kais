import { Link } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react'
import { Link as LinkScroll } from "react-scroll"
import { NavContext } from '../context/NavContext';

const Navbar = () => {
    const [scrolled, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { activeLinkId } = useContext(NavContext);
    const menu = ['accueil', 'services', 'expériences','compétences', 'projets', 'contact'];

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
        <nav onClick={() => setToggle(!toggle)} className={ scrolled ? "app__navbar scrolled" : "app__navbar" }>
            <button onClick={() => window.scrollTo(0,0)} className="app__navbar-logo app__flex">
                K
            </button>
            <ul className="app__navbar-links">
                {
                    menu?.map((item) => (
                        <li className="app__flex p-text" key={`link-${item}`}>
                            {/* <LinkScroll activeClass="active" spy={true}  to={item} href={`#${item}`} offset={-30}>{item}<div/></LinkScroll> */}
                            <Link to={`#${item}`} className={activeLinkId === item ? "active" : ""}>{item}<div/></Link>
                        </li>   
                    ))
                }
            </ul>

            <button className="app__navbar-menu app__flex" onClick={handleClick}>
                    <span className={ toggle ? "app__navbar-icon app__flex rotated" : "app__navbar-icon app__flex"} />
            </button>
            <div
                className={ toggle ? "app__navbar-side open" : "app__navbar-side"}
            >
                <ul>
                    {
                        menu?.map((item) => (
                            <li key={item}>
                                <Link to={`#${item}`} className={activeLinkId === item ? "active" : ""} onClick={() => setToggle(false)}>{item}</Link>
                                {/* <LinkScroll activeClass="active" spy={true} to={item} offset={-30} onClick={() => setToggle(false)}>{item}</LinkScroll> */}
                            </li>   
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar