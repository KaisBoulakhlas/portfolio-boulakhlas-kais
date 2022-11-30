import React from 'react'
import { NavigationDots, SocialMedia} from '../components'
import { useMetaData } from '../hooks/use-meta-data';

const AppWrap = (Component, idName, classNames) => function HOC() {
    const siteMetadata = useMetaData();
    return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
            <Component />
            <div className="copyright">
                <p className="p-text">{new Date().getFullYear()} - {siteMetadata.author}</p>
                <p className="p-text">Tous droits réservés</p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}



export default AppWrap