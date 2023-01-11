import { Link } from "gatsby"
import * as React from "react"
import { Seo } from "../components/Seo"

const PolitiqueConfidentialite = () => {
  return (
    <main className="app__flex app__flex--column full-height gap-20">
      <h1 className="head-text">Politique de <span className="text-secondary-color">confidentialité</span></h1>
      <Link to="/" className="button">Retour</Link>.
    </main>
  )
}

export default PolitiqueConfidentialite

export const Head = () => (
  <Seo title="Politique de confidentialité" />
)