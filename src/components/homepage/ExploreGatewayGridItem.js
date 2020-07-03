/**
 * ExploreGatewayGridItem.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Header, Grid, Image } from 'semantic-ui-react'

import './ExploreGatewayGridItem.css';

function ExploreGatewayGridItem(props) {
  return (
    <Grid.Column className="ExploreGatewayGridItemColumn">
      <div className="ExploreGatewayGridItemImageWrapper">
        <a href={props.dstUrl} className="ExploreGatewayGridItemImageAnchor" data-testid="ExploreGatewayGridItemImageAnchorTestId">
          <Image
            size="medium"
            src={props.imageUrl}
            className="ExploreGatewayGridItemImage"
            data-testid="ExploreGatewayGridItemImageTestId"
          />
        </a>
      </div>
      <Header as="h2" textAlign="left" className="ExploreGatewayGridItemHeader">{props.title}</Header>
    </Grid.Column>
  )
}

export default ExploreGatewayGridItem;