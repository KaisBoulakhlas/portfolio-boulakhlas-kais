import { Link } from 'gatsby'
import React, { useState } from 'react'
import './navbar.scss'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo app__flex">
                K
            </div>
            <ul className="app__navbar-links">
                {['accueil', 'services', 'compétences', 'projets', 'contact' ].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <Link to={`#${item}`}>{item}<div/></Link>
                    </li>   
                ))}
            </ul>

            <div role="button" tabIndex={0} className="app__navbar-menu app__flex" onClick={handleClick}>
                    <div className={ toggle ? "app__navbar-icon app__flex rotated" : "app__navbar-icon app__flex"} ></div>
            </div>
            <div
                className={ toggle ? "app__navbar-side open" : "app__navbar-side"}
            >
                <ul>
                    {['accueil', 'services', 'compétences', 'projets', 'contact' ].map((item) => (
                        <li key={item}>
                            <Link to={`#${item}`} onClick={() => setToggle(false)}>{item}</Link>
                        </li>   
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar