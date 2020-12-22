import React from "react"
import { Link, graphql } from "gatsby"
import '@elastic/eui/dist/eui_theme_light.css';
import {EuiButton} from "@elastic/eui";
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Javascript from "../components/Javascript"
import Skills from "../components/Skills"
 


const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Javascript />
      <Skills />
    </div>
  )
}

export default Home
