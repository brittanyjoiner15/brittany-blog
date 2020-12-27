import React from "react"
import { Link, graphql } from "gatsby"
import '@elastic/eui/dist/eui_theme_light.css';
import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
} from "@elastic/eui";
 


const Nav = () => {
  return (
    <div>
     <EuiHeader>
         <EuiHeaderSectionItem border="right">
            <Link to="/">
              <EuiHeaderLogo iconType="logoElastic">
                Brittany Joiner | Front End Developer
              </EuiHeaderLogo>
            </Link>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiHeaderLinks aria-label="App navigation links">
              <Link to="/blog">
                <EuiHeaderLink>My Blog</EuiHeaderLink>
              </Link>

              <a href="mailto:brittanyjoiner15@gmail.com" target="_blank">
                <EuiHeaderLink>Contact Me</EuiHeaderLink>
              </a>
              <a
                target="_blank"
                href="https://github.com/brittanyjoiner15/"
              >
                <EuiHeaderLink iconType="logoGithub"></EuiHeaderLink>
              </a>
            </EuiHeaderLinks>
          </EuiHeaderSectionItem>
     </EuiHeader>
    </div>
  )
}

export default Nav