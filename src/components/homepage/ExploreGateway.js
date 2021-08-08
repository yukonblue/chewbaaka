/**
 * ExploreGateway.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 08, 2021
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import ExploreGatewayIntro from './ExploreGatewayIntro'
import ExploreGatewayGrid from './ExploreGatewayGrid'
import ExploreGatewayFooter from './ExploreGatewayFooter'

export default function ExploreGateway() {
  return (
    <div id="Explore" data-testid="ExploreGatewayComponentTestId">
      <ExploreGatewayIntro/>
      <ExploreGatewayGrid/>
      <ExploreGatewayFooter/>
    </div>
  );
}
