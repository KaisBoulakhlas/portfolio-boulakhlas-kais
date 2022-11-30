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
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}



export default AppWrap