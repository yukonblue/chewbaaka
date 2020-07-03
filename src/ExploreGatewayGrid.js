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
    // TODO: Update `dstUrl` attribute for grid items.
    <Grid container stackable textAlign="center" columns={4}>
      <ExploreGatewayGridItem imageUrl="https://cheetah.org/wp-content/uploads/2019/05/iwt_ancientindiancheetahhunt_1000-600-scaled.jpg" title="History" dstUrl="#" />
      <ExploreGatewayGridItem imageUrl="https://cheetah.org/wp-content/uploads/2019/05/Learn_AboutCheetahs_9_1000-600.jpg" title="Biology" dstUrl="#" />
      <ExploreGatewayGridItem imageUrl="https://cheetah.org/wp-content/uploads/2019/03/cheetah-conservation-fund-conservancies.jpg" title="Ecology" dstUrl="#" />
      <ExploreGatewayGridItem imageUrl="https://cheetah.org/wp-content/uploads/2019/05/Learn_AboutCheetahs_11_1000-600.jpg" title="Future" dstUrl="#" />
    </Grid>
  )
}

export default ExploreGatewayGrid;
