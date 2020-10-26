import React from "react"
import { Link, graphql } from "gatsby"
import '@elastic/eui/dist/eui_theme_light.css';
import {EuiButton} from "@elastic/eui";
 


const Home = () => {
  return (
    <div>
     <p>Hi</p>
     <EuiButton href="/blog">View my blog</EuiButton>
    </div>
  )
}

export default Home