import { Link } from "gatsby"
import * as React from "react"
import { Seo } from "../components/Seo"

const MentionsLegales = () => {
  return (
    <main className="app__flex app__flex--column full-height gap-20">
      <h1 className="head-text">Mentions <span className="text-secondary-color">légales</span></h1>
      <Link to="/" className="button">Retour</Link>.
    </main>
    )
}

export default MentionsLegales

export const Head = () => (
  <Seo title="Mentions légales" />
)