import React from "react"
import { Link, graphql } from "gatsby"
import '@elastic/eui/dist/eui_theme_light.css';
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Javascript from "../components/Javascript"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import "./index.css"
 
import {
  EuiButton,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
} from '@elastic/eui';


const Home = () => {
  return (
    <div>
      <Nav />
      <EuiPage>
        <EuiPageBody component="div">
          <EuiPageContent verticalPosition="center" horizontalPosition="center">
            <EuiPageContentBody>
              <Hero />
              <Javascript />
              <Skills />
              <Contact />
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </div>
  )
}

export default Home
