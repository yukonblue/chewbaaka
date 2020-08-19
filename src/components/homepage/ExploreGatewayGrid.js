/**
 * ExploreGatewayGrid.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 18, 2020
 */

import React from 'react'

import { Grid } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import ExploreGatewayGridItem from './ExploreGatewayGridItem'

import explore_gateway_grid_item_img_01 from './assets/explore_gateway_grid_item_img_01-min.jpg'
import explore_gateway_grid_item_img_02 from './assets/explore_gateway_grid_item_img_02-min.jpg'
import explore_gateway_grid_item_img_03 from './assets/explore_gateway_grid_item_img_03-min.jpg'
import explore_gateway_grid_item_img_04 from './assets/explore_gateway_grid_item_img_04-min.jpg'

export default function ExploreGatewayGrid() {
  return (
    <nav>
      <Grid container stackable textAlign="center" columns={4} data-testid="ExploreGatewayGridTestId">
        <ExploreGatewayGridItem image={explore_gateway_grid_item_img_01} title="History" dstUrl="history" />
        <ExploreGatewayGridItem image={explore_gateway_grid_item_img_02} title="Biology" dstUrl="biology" />
        <ExploreGatewayGridItem image={explore_gateway_grid_item_img_03} title="Ecology" dstUrl="ecology" />
        <ExploreGatewayGridItem image={explore_gateway_grid_item_img_04} title="Future"  dstUrl="future" />
      </Grid>
    </nav>
  );
}
