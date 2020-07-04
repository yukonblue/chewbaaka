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

import ExploreGatewayGridItem from './ExploreGatewayGridItem'

import explore_gateway_grid_item_img_01 from './assets/explore_gateway_grid_item_img_01.jpg'
import explore_gateway_grid_item_img_02 from './assets/explore_gateway_grid_item_img_02.jpg'
import explore_gateway_grid_item_img_03 from './assets/explore_gateway_grid_item_img_03.jpg'
import explore_gateway_grid_item_img_04 from './assets/explore_gateway_grid_item_img_04.jpg'

function ExploreGatewayGrid(props) {
  return (
    // TODO: Update `dstUrl` attribute for grid items.
    <Grid container stackable textAlign="center" columns={4} data-testid="ExploreGatewayGridTestId">
      <ExploreGatewayGridItem imageUrl={explore_gateway_grid_item_img_01} title="History" dstUrl="#" />
      <ExploreGatewayGridItem imageUrl={explore_gateway_grid_item_img_02} title="Biology" dstUrl="#" />
      <ExploreGatewayGridItem imageUrl={explore_gateway_grid_item_img_03} title="Ecology" dstUrl="#" />
      <ExploreGatewayGridItem imageUrl={explore_gateway_grid_item_img_04} title="Future"  dstUrl="#" />
    </Grid>
  )
}

export default ExploreGatewayGrid;
