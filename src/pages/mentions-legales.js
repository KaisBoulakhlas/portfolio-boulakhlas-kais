import * as React from "react"
import { Seo } from "../components/Seo"

const MentionsLegales = () => {
  return (
    <h1 className="head-text">Mentions <span>légales</span></h1>
  )
}

export default MentionsLegales

export const Head = () => (
  <Seo title="Mentions légales" />
)