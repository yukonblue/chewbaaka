/**
 * LandingPageGateway.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import {  Button, Container, Header, Segment } from 'semantic-ui-react'

import './LandingPageGateway.css';

const __TEST__ = ( process.env.NODE_ENV === "test" );

class LandingPageGateway extends React.Component {
  render() {
    return (
      <Segment vertical textAlign="center" className={this.centerSegmentStyleClassName()} data-testid="LandingPageGateway">
        <Container className="content">
          <Header inverted as="h1">
            Run cheetah run
          </Header>
          <p className="subtitle" data-testid="subtitle">
            Visit and explore CCF's <b>Cheetah Museum</b> at the
            comfort of your home.
          </p>
          <a href="#Explore">
            <Button basic inverted size="huge">Explore</Button>
          </a>
        </Container>
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

    let idx = 0;

    if ( __TEST__ ) {
      // We want determinate behavior in test mode
      // because of snapshot testing.
      idx = 0;
    } else {
      idx = Math.floor(Math.random() * centerSegmentStyleClassNames.length);
    }

    return centerSegmentStyleClassNames[idx];
  }
}

export default LandingPageGateway;
