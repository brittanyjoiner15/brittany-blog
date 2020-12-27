import { Link, graphql } from "gatsby"
import {
  EuiFieldText,
  EuiFlexGroup, 
  EuiTextArea,
  EuiSpacer,
  EuiText,
  EuiListGroup,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import React from "react";  

function Contact() {
  return (
    <div>
      <EuiSpacer size="xxl" />
      <EuiFlexGroup justifyContent="center">
        <EuiText>
            <h1>Want to work together?</h1>
            <p>Drop me a line, or send an email to <a href="mailto:brittanyjoiner15@gmail.com">brittanyjoiner15@gmail.com</a></p>
        </EuiText>
      </EuiFlexGroup>
    </div>
  );
}

export default Contact;