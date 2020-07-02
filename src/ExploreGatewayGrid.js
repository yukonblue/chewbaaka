/**
 * ExploreGatewayGrid.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Grid } from 'semantic-ui-react'

import ExploreGatewayGridItem from './ExploreGatewayGridItem.js'

function ExploreGatewayGrid(props) {
  return (
    <Grid container stackable textAlign="center" columns={4}>
      <ExploreGatewayGridItem imageUrl="https://calacademy.org/sites/all/themes/calacademy_zen/images/homepage/slider-aquarium.jpg" title="History" />
      <ExploreGatewayGridItem imageUrl="https://calacademy.org/sites/all/themes/calacademy_zen/images/homepage/slider-aquarium.jpg" title="Biology" />
      <ExploreGatewayGridItem imageUrl="https://calacademy.org/sites/all/themes/calacademy_zen/images/homepage/slider-aquarium.jpg" title="Ecology" />
      <ExploreGatewayGridItem imageUrl="https://calacademy.org/sites/all/themes/calacademy_zen/images/homepage/slider-aquarium.jpg" title="Future" />
    </Grid>
  )
}

export default ExploreGatewayGrid;
