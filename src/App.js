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

import { Button, Container, Header, Menu, Segment } from 'semantic-ui-react'

import './App.css';

function App() {
  return (
    <div className="App">
      <Segment inverted vertical textAlign="center" className="mainSegment">
        <Container as="nav">
          <Header inverted as="h1">
            Chewbaaka
          </Header>
          <Menu borderless compact inverted>
            {/* <Menu.Item active>Home</Menu.Item> */}
            <Menu.Item>IUCN status</Menu.Item>
            <Menu.Item>CCF</Menu.Item>
          </Menu>
        </Container>
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
  );
}

export default App;
