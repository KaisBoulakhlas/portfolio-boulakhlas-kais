import * as React from "react"
import CookieConsent from "react-cookie-consent"
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <main>
          {children}
      </main>
      <CookieConsent
        enableDeclineButton
        onAccept={() => {
            initializeAndTrack(location)
        }}
        location="bottom"
        style={{ background: "rgb(15, 21, 21)" }}
        buttonStyle={{ textTransform:"uppercase", background:"limegreen" }}
        declineButtonStyle={{ textTransform:"uppercase" }}
        buttonText="Accepter"
        declineButtonText="Refuser"
        cookieName="gatsby-gdpr-google-analytics"> 
            Ce site web utilise des cookies pour améliorer l'expérience utilisateur. En acceptant,
            vous acceptez l'utilisation de cookies à des fins statistiques.
       </CookieConsent>
    </>
  )
}
export default Layout