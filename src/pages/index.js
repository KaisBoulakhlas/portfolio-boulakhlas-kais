import * as React from "react"
import { Navbar } from "../components"
import { About, Footer, Skills, Header, Project } from '../container' 
import './index.scss' 

const IndexPage = () => {
  return (
    <div className="app">
        <Navbar/>
        <Header />
        <About />
        <Project />
        <Skills />
        <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Portfolio</title>