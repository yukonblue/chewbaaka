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

// import { Container, Segment } from 'semantic-ui-react'

import './App.css';

import TopNavBar from './TopNavBar.js'
import LandingPageGateway from './LandingPageGateway.js'
import ExploreGateway from './ExploreGateway.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavBar/>
        <LandingPageGateway/>
        <ExploreGateway/>
      </div>
    )
  }
}

export default App;
