/**
 * ExploreGatewayIntro.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Header, Container, Grid, GridColumn, Segment, Button } from 'semantic-ui-react'

import './ExploreGatewayIntro.css';

function ExploreGatewayIntro() {
  return (
    <div className="ExploreGatewayIntro">
      <br/>
      <Container width={8}>
        <Header size="huge" textAlign="center">
          Explore CCF's Cheetah Museum in Namibia and learn everything you need to know about cheetahs, all at the comfort of your home.
        </Header>
      </Container>
      <br/>
      <br/>
      <Grid container columns={2} width={8} className="centerGrid">
        <Grid.Row>
          <GridColumn width={8}>
            <div className="centerGridLeftColumnStyle">
              <p>"CCF is Changing the World to Save the Cheetah" - Dr. Laurie Marker</p>
            </div>
          </GridColumn>
          <GridColumn width={7}>
            <Segment inverted>
              <p className="JoinTheRace">Join the race to <a href="https://twitter.com/search?q=%23SaveTheCheetah" target="_blank" rel="noopener noreferrer"><span className="SafeTheCheetah">#SafeTheCheetah</span></a></p>
              <p>Cheetahs can't win without us.</p>
              <Button basic inverted href="https://cheetah.org/get-involved/ways-to-give/">
                Get Involved
              </Button>
            </Segment>
          </GridColumn>
        </Grid.Row>
      </Grid>
      <br/>
    </div>
  )
}

export default ExploreGatewayIntro;
