import { Link } from 'gatsby'
import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['accueil', 'services', 'expériences','compétences', 'projets', 'contact' ].map((item, index) => (
            <Link aria-label={item} title={item} to={`#${item}`} key={item + index} className="app__navigation-dot" style={active === item ? { backgroundColor: '#f68338'} : {}} />
        ))}
    </div>
  )
}

export default NavigationDots