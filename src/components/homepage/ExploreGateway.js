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

import ExploreGatewayIntro from './ExploreGatewayIntro'
import ExploreGatewayGrid from './ExploreGatewayGrid'

function ExploreGateway() {
  return (
    <div id="ExploreGateway" className="outerContainer" data-testid="ExploreGatewayComponentTestId">
      <ExploreGatewayIntro/>
      <ExploreGatewayGrid/>
      <br/>
    </div>
  )
}

export default ExploreGateway;
