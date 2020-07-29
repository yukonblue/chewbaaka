/**
 * ExploreGatewayIntro.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 28, 2020
 */

import React from 'react'

import {
  Button,
  Container,
  Header,
  Grid,
  Segment
} from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css"

import '../shared/ContentPageSharedStyles.css'
import './ExploreGatewayIntro.css'

import image_CCF_Cheetah_Museum from './assets/CCF_Cheetah_Museum.jpg'

export default function ExploreGatewayIntro() {
  return (
    <div className="ExploreGatewayIntro" data-testid="ExploreGatewayIntroTestId">
      <div className="VerticalCushionPadding">
        <img
          className="ExploreGatewayIntroCCFCheetahMuseumImage"
          src={image_CCF_Cheetah_Museum}
          alt="CCF Cheetah Museum"
        />
      </div>

      <div className="VerticalCushionPadding">
        <Container width={8}>
          <Header size="huge" textAlign="center">
            Explore CCF’s Cheetah Museum in Namibia and learn about the cheetahs, all at the comfort of your home.
          </Header>
        </Container>
      </div>

      <div className="ExploreGatewayIntroCenterGrid VerticalCushionPadding">
        <Grid container columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="ExploreGatewayIntroCenterGridLeftColumnStyle">
                <p className="CCFMissionStatementQuote">
                  “CCF is Changing the World to Save the Cheetah” - Dr. Laurie Marker
                </p>
              </div>
            </Grid.Column>
            <Grid.Column width={7}>
              <Segment inverted>
                <p className="JoinTheRace">
                  Join the race to <a href="https://twitter.com/search?q=%23SaveTheCheetah" target="_blank" rel="noopener noreferrer">
                    <span className="SafeTheCheetah">
                      #SafeTheCheetah
                    </span>
                  </a>
                </p>
                <p>Cheetahs can't win without us.</p>
                <Button basic inverted href="https://cheetah.org/get-involved/ways-to-give/">
                  Get Involved
                </Button>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}
