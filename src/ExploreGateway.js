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

import { Container, Segment } from 'semantic-ui-react'

import ExploreGatewayGrid from './ExploreGatewayGrid'

function ExploreGateway() {
  return (
    <Container>
      <Segment>
        <ExploreGatewayGrid/>
      </Segment>
    </Container>
  )
}

export default ExploreGateway;
