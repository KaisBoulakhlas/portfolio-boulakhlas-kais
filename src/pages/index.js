import * as React from "react"
import { Navbar } from "../components"
import { About, Footer, Skills, Header, Project, Experiences } from '../container' 
import { Seo } from "../components/Seo"

const IndexPage = () => {
  return (
    <div className="app">
        <Navbar/>
        <Header />
        <About />
        <Experiences />
        <Skills />
        <Project />
        <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Portfolio - Kaïs Boulakhlas" />
)