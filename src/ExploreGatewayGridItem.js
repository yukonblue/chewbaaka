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

function ExploreGatewayGridItem(props) {
  return (
    <Grid.Column>
      <Image
        centered
        size="medium"
        src={props.imageUrl}
      />
      <Header as="h2" textAlign="left">{props.title}</Header>
      {/* <p>
        {props.content}
        
      </p> */}
      {/* <Button basic>View details &raquo;</Button> */}
    </Grid.Column>
  )
}

export default ExploreGatewayGridItem;
