/**
 * ExploreGateway.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 28, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import ExploreGatewayIntro from './ExploreGatewayIntro'
import ExploreGatewayGrid from './ExploreGatewayGrid'

export default function ExploreGateway() {
  return (
    <div id="Explore" data-testid="ExploreGatewayComponentTestId">
      <ExploreGatewayIntro/>
      <ExploreGatewayGrid/>
      <br/>
    </div>
  );
}
