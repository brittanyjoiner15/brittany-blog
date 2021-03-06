import React from "react"
import { Link, graphql } from "gatsby"
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiFlexGroup, EuiFlexItem, EuiText, EuiImage, EuiSpacer, EuiTextAlign } from "@elastic/eui";
import "../pages/index.css"
 


const Hero = () => {
  return (
    <div>
      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem>
          <EuiText>
            <h1>Hi! My name is Britt and I'm a front end developer.</h1>
          </EuiText>
        </EuiFlexItem>
        <EuiImage alt="brittany-joiner" size="m" margin="m" hasShadow={true} url="https://trello-attachments.s3.amazonaws.com/5c3174bfd2f31c356736c742/5eadcb13c82db90ac430e6ba/5dfdd1d2b23ffeb4a3d5a8f53da60f86/Brittany3.png" />
        <EuiText color="secondary">I'm a marketer turned engineer with a passion for building cool things and solving problems. You've found the right place to learn more about me and my projects.</EuiText>
        
      </EuiFlexGroup>
    </div>
  )
}

export default Hero