import * as React from "react"
import { Seo } from "../components/Seo"

const PolitiqueConfidentialite = () => {
  return (
    <h1 className="head-text">Politique de <span className="text-secondary-color">confidentialité</span></h1>
  )
}

export default PolitiqueConfidentialite

export const Head = () => (
  <Seo title="Politique de confidentialité" />
)