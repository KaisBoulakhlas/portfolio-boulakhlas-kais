import * as React from "react"
import { Spinner } from "../components"
import { Seo } from "../components/Seo"
import Layout from "../components/Layout"
import { Suspense } from "react"

const Navbar = React.lazy(() => import("../components/Navbar"));
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
          <Suspense fallback={<Spinner />}>
            <Navbar />
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