/**
 * LandingPageGateway.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import {  Button, Container, Header, Segment } from 'semantic-ui-react'

import './LandingPageGateway.css';

class LandingPageGateway extends React.Component {
  render() {
    return (
      <Segment vertical textAlign="center" className={this.centerSegmentStyleClassName()}>
        <Container className="content">
          <Header inverted as="h1">
            Run cheetah run
          </Header>
          <p>
            Visit and explore CCF's <b>Cheetah Museum</b> at the
            comfort of your home.
          </p>
          <Button size="huge">Explore</Button>
        </Container>
          {/* <Segment inverted vertical as="footer">
            by @Tomiko.
          </Segment> */}
      </Segment>
    )
  }

  centerSegmentStyleClassName() {
    const centerSegmentStyleClassNames = [
      "centerSegmentStyle1",
      "centerSegmentStyle2",
      "centerSegmentStyle3",
      "centerSegmentStyle4",
    ]

    const idx = Math.floor(Math.random() * centerSegmentStyleClassNames.length);

    return centerSegmentStyleClassNames[idx];
  }
}

export default LandingPageGateway;
