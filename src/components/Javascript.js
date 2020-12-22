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

function Javascript() {
  return (
    <div>
      <EuiSpacer size="xxl" />
      <EuiText>
        <h1>My Projects</h1>
      </EuiText>
      <EuiSpacer size="xxl" />
      <EuiFlexGroup style={{ marginLeft: 100, marginRight: 100 }}>
        <EuiFlexItem>
          <Link to="https://github.com/brittanyjoiner15/react-currency-converter">
            <EuiCard
              image="https://trello-attachments.s3.amazonaws.com/5ed979e77bb1106caad412b8/5fe27dc8615aa81cf65d1785/67d9970bac2d61bead77202f94f8b99f/Screen_Shot_2020-12-22_at_6.50.48_PM.png"
              title={<p>Currency Converter</p>}
              description="Created a currency converter with EUI Design Library. Using APIs, React, and hosted on Heroku."
              display="panel"
              padding="l"
            />
          </Link>
        </EuiFlexItem>

        <EuiFlexItem>
          <Link to="https://scavenger-hunt-knoxville.com/">
            <EuiCard
              image="https://trello-attachments.s3.amazonaws.com/5ed979e77bb1106caad412b8/5fe27dc8615aa81cf65d1785/402b46c8ab401fc7f78d635e2db0d50f/Screen_Shot_2020-12-22_at_6.46.56_PM.png"
              title={<p>Scavenger Hunt App</p>}
              description="Created a scavenger hunt app for mom's birthday. Using React, hosted on Netlify."
              display="panel"
              padding="l"
            />
          </Link>
        </EuiFlexItem>
        <EuiFlexItem>
          <Link to="https://github.com/elastic/dream-machine">
            <EuiCard
              image="https://trello-attachments.s3.amazonaws.com/5ed979e77bb1106caad412b8/5fe27dc8615aa81cf65d1785/410235c14c95c665ca8b3a4dfebe4445/Screen_Shot_2020-12-22_at_6.38.47_PM.png"
              title={<p>Elastic Dream Machine</p>}
              description="Front end work on support portal for managing customer cases. Using APIs, React, Typescript"
              display="panel"
              padding="l"
            />
          </Link>
        </EuiFlexItem>
      </EuiFlexGroup>
            <EuiFlexGroup style={{ marginLeft: 100, marginRight: 100 }}>
        <EuiFlexItem>
          <Link to="https://github.com/elastic/kibana/pulls/brittanyjoiner15">
            <EuiCard
              image="https://trello-attachments.s3.amazonaws.com/5c3174bfd2f31c356736c742/5eadcb13c82db90ac430e6ba/8b0b0744f448fb88bc5ddb8d0b32834b/image.png"
              title={<p>Elastic APM / Kibana UI</p>}
              description="Front end improvements and some refactoring of APM features in Kibana. Using React and Typescript."
              display="panel"
              padding="l"
            />
          </Link>
        </EuiFlexItem>

        <EuiFlexItem>
          <Link to="https://github.com/brittanyjoiner15/pern-todo">
            <EuiCard
              image="https://brittanyjoiner.netlify.app/images/todo.gif"
              title={<p>To Do App</p>}
              description="Basic to do application. Using Postgres, React, and Node."
              display="panel"
              padding="l"
            />
          </Link>
        </EuiFlexItem>
        <EuiFlexItem>
          <Link to="https://britt-drinks.netlify.app/">
            <EuiCard
              image="https://trello-attachments.s3.amazonaws.com/5c3174bfd2f31c356736c742/5eadcb13c82db90ac430e6ba/18ec271da922cfe1e632de2b3aa3ce4f/Screen_Shot_2020-06-02_at_7.47.02_AM.png"
              title={<p>Drink Recipe Generator</p>}
              description="Choose a liquor and see drink recipes. Using React and hosted on Netlify."
              display="panel"
              padding="l"
            />
          </Link>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}

export default Javascript;