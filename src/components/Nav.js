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
              <Link to="#">
                <EuiHeaderLink>My Blog</EuiHeaderLink>
              </Link>

              <Link to="#">
                <EuiHeaderLink>Contact Me</EuiHeaderLink>
              </Link>

              <a
                target="_blank"
                href="https://github.com/brittanyjoiner15/react-currency-converter"
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