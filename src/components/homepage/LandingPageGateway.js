/**
 * LandingPageGateway.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 17, 2021
 */

import React from 'react'

import {
  Button,
  Container,
  Header,
  Segment
} from 'semantic-ui-react'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import 'semantic-ui-css/semantic.min.css'

import '../shared/SharedStyles.css'

import './LandingPageGateway.css'

const __TEST__ = ( process.env.NODE_ENV === "test" );

export default class LandingPageGateway extends React.Component {

  static _COMPONENT_NAME_ = "landingPageGateway";

  static _TITLE_ = "landingPageGatewayTitle";

  static _SUBTITLE_ = "landingPageGatewaySubtitle";

  render() {
    const title = this.props.config.components[LandingPageGateway._COMPONENT_NAME_].constants[LandingPageGateway._TITLE_];

    return (
      <Segment
        className={["LandingPageGatewayOuterContainer", "LandingPageGatewayBackgroundStyle"].join(" ")}
        vertical
        textAlign="center"
        data-testid="LandingPageGatewayComponentTestId"
      >
        <Container className="LandingPageGatewayCoreContentContainer">
          <Header inverted as="h1">
            {title}
          </Header>
          <Header
            inverted
            as="h2"
            data-testid="LandingPageGatewayComponentSubtitlePartTestId"
          >
            Explore the <span className="BrandColorSecondary">Cheetah Museum</span> at <span className="BrandColorPrimary">{kStringConstantCheetahConservationFund}</span>
          </Header>
          <a href="#Explore">
            <Button
              basic
              inverted
              size="huge"
            >
              Explore
            </Button>
          </a>
        </Container>
      </Segment>
    );
  }
}
