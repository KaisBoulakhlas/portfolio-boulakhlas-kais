import * as React from "react"
import { Navbar } from "../components"
import { About, Footer, Skills, Header, Project, Experiences, MiniFooter } from '../container'
import { Seo } from "../components/Seo"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
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
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Portfolio - Kaïs Boulakhlas" />
)