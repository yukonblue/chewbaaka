/**
 * App.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 30, 2020
 * Updated  : Jul 01, 2020
 */

import React, { Component } from 'react';

import "semantic-ui-css/semantic.min.css";

import {  Button, Container, Header, Image, Menu, Segment } from 'semantic-ui-react'

import './App.css';

import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu fixed="top">
          <Container>
            <Menu.Item as="a" header>
              <Image
                size="small"
                src={logo}
                style={{ marginRight: "1.5em" }}
              />
            </Menu.Item>
            <Menu.Item as="a">IUCN Status</Menu.Item>
            <Menu.Item as="a">CCF</Menu.Item>
          </Container>
        </Menu>
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
      "centerSegmentStyle2"
    ]

    const idx = Math.floor(Math.random() * centerSegmentStyleClassNames.length);

    return centerSegmentStyleClassNames[idx];
  }
}

export default App;
