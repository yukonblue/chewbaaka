/**
 * ExploreGatewayGridItem.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 19, 2020
 */

import React from 'react'

import { Header, Grid, Image } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import './ExploreGatewayGridItem.css'

export default function ExploreGatewayGridItem(props) {
  return (
    <Grid.Column className="ExploreGatewayGridItemColumn">
      <div className="ExploreGatewayGridItemInnerContainer">
        <Link
          to={props.dstUrl}
          title={props.title + " page"}
          className="ExploreGatewayGridItemImageAnchor"
          data-testid="ExploreGatewayGridItemImageAnchorTestId"
        >
          <Image
            size="medium"
            src={props.image}
            alt={props.title}
            className="ExploreGatewayGridItemImage"
            data-testid="ExploreGatewayGridItemImageTestId"
          />
        </Link>
        <Header
          as="h2"
          textAlign="left"
          className="ExploreGatewayGridItemHeader"
        >
          {props.title}
        </Header>
      </div>
    </Grid.Column>
  );
}
