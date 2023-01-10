import * as React from "react"
import { Navbar } from "../components"
import { Seo } from "../components/Seo"
import Layout from "../components/Layout"
import { Suspense } from "react"

const Header = React.lazy(() => import("../container/Header"));
const About = React.lazy(() => import("../container/About"));
const Experiences = React.lazy(() => import("../container/Experiences"));
const Skills = React.lazy(() => import("../container/Skills"));
const Project = React.lazy(() => import("../container/Project"));
const Footer = React.lazy(() => import("../container/Footer"));
const MiniFooter = React.lazy(() => import("../container/MiniFooter"));


const IndexPage = () => {
  return (
      <Layout>
        <div className="app">
          <Navbar />
          <Suspense fallback="Chargement...">
            <Header />
            <About />
            <Experiences />
            <Skills />
            <Project />
            <Footer />
            <MiniFooter />
          </Suspense>
        </div>
      </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Portfolio - Kaïs Boulakhlas" />
)