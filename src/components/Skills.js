import { Link, graphql } from "gatsby"
import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import React from "react";  

function Skills() {
  return (
    <div>
        <EuiSpacer size="xxl" />
      <EuiFlexGroup justifyContent="center">
        <EuiText>
          <h1>Languages and Frameworks</h1>
        </EuiText>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />
      <EuiFlexGroup style={{ marginLeft: 100, marginRight: 100 }}>
          <EuiFlexItem>
              <img src="https://brittanyjoiner.netlify.app/images/html5.png" width="30%" />
          </EuiFlexItem>
          <EuiFlexItem>
              <img src="https://trello-attachments.s3.amazonaws.com/5ed979e77bb1106caad412b8/5fe27dc8615aa81cf65d1785/b425dec4d364bfc4b9b71c26b9b598cd/image.png" width="30%"/>
          </EuiFlexItem>
          <EuiFlexItem>
              <img src="https://brittanyjoiner.netlify.app/images/bootstrap.png" width="30%"/>
          </EuiFlexItem>
          <EuiFlexItem>
              <img src="https://brittanyjoiner.netlify.app/images/react.png" width="30%"/>
          </EuiFlexItem>
          <EuiFlexItem>
              <img src="https://trello-attachments.s3.amazonaws.com/5ed979e77bb1106caad412b8/5fe27dc8615aa81cf65d1785/c56558e7f9d715982a41cfd489abff01/ts-logo-round-128.png" width="30%"/>
          </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}

export default Skills;