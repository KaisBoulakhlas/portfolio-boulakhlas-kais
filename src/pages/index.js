import * as React from "react"
import { Navbar } from "../components"
import { About, Footer, Skills, Header, Project, Experiences, MiniFooter } from '../container'
import { Seo } from "../components/Seo"
import Layout from "../components/Layout"
import NavProvider from "../context/NavContext"

const IndexPage = () => {
  return (
    <NavProvider>
      <Layout>
        <div className="app">
          <Navbar />
          <Header />
          <About />
          <Experiences />
          <Skills />
          <Project />
          <Footer />
          <MiniFooter />
        </div>
      </Layout>
    </NavProvider>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Portfolio - Kaïs Boulakhlas" />
)