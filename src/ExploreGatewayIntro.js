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
        <Header size="huge" textAlign="center">Explore CCF's Cheetah Musuem in Namibia and learn everything you need to know about the cheetahs, all at the comfort of your home.</Header>
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
              <p className="JoinTheRace">Join the race to <a href=""><span className="SafeTheCheetah">#SafeTheCheetah</span></a></p>
              <p>Cheetahs can't be saved without us. We need</p>
              <Button basic inverted>
                Donate Now
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
