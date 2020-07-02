/**
 * App.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 30, 2020
 * Updated  : Jul 01, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import {  Button, Container, Header, Segment } from 'semantic-ui-react'

import './App.css';

import TopNavBar from './TopNavBar.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavBar/>
        <Segment inverted vertical textAlign="center" className={this.centerSegmentStyleClassName()}>
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
      </div>
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

export default App;
