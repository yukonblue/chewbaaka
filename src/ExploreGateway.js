/**
 * ExploreGateway.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

// import { Header, Segment, Container } from 'semantic-ui-react'

import ExploreGatewayIntro from './ExploreGatewayIntro'
import ExploreGatewayGrid from './ExploreGatewayGrid'

import './ExploreGateway.css';

function ExploreGateway() {
  return (
    <div id="ExploreGateway" className="outerContainer">
      <ExploreGatewayIntro/>
      <ExploreGatewayGrid/>
    </div>
  )
}

export default ExploreGateway;
