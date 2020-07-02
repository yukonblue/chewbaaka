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
      <ExploreGatewayGridItem imageUrl="https://cheetah.org/wp-content/uploads/2019/05/iwt_ancientindiancheetahhunt_1000-600-scaled.jpg" title="History" />
      <ExploreGatewayGridItem imageUrl="https://cheetah.org/wp-content/uploads/2019/05/Learn_AboutCheetahs_9_1000-600.jpg" title="Biology" />
      <ExploreGatewayGridItem imageUrl="https://cheetah.org/wp-content/uploads/2019/03/cheetah-conservation-fund-conservancies.jpg" title="Ecology" />
      <ExploreGatewayGridItem imageUrl="https://cheetah.org/wp-content/uploads/2019/05/Learn_AboutCheetahs_11_1000-600.jpg" title="Future" />
    </Grid>
  )
}

export default ExploreGatewayGrid;
