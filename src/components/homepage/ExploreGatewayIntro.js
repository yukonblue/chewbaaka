/**
 * ExploreGatewayIntro.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 22, 2021
 */

import React from 'react'

import {
  Container,
  Header,
  Icon,
} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import '../shared/GlobalStyles.css'

import '../shared/ContentPageSharedStyles.css'

import './ExploreGatewaySharedStyles.css'

import './ExploreGatewayIntro.css'

import image_CCF_Cheetah_Museum from './assets/CCF_Cheetah_Museum-min.jpg'

export default function ExploreGatewayIntro() {
  return (
    <div className="ExploreGatewayIntro ExploreGatewayBackground" data-testid="ExploreGatewayIntroTestId">
      <div className="VerticalCushionPadding">
        <img
          width="1000"
          height="600"
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
          <div className="ExploreGatewayMenuIconLinkOuterContainer">
            <p className="ExploreGatewayMenuIconLinkText">
              <a href="#ExploreGatewayMenu" className="ExploreGatewayMenuIconLink">
                <Icon name='angle double down' size='huge' color='yellow'/>
              </a>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
