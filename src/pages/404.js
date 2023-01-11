import * as React from "react"
import { Link } from "gatsby"
import { Seo } from "../components/Seo"

const NotFoundPage = () => {
  return (
    <main className="app__flex page-not-found">
      <h1 className="head-text">Page <span className="text-secondary-color">introuvable!</span></h1>
        <Link to="/" className="button">Retour</Link>.
    </main>
  )
}

export default NotFoundPage

export const Head = () => (
  <Seo title="Page introuvable !" />
)
