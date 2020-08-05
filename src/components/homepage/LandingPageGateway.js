/**
 * LandingPageGateway.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 04, 2020
 */

import React from 'react'

import {
  Button,
  Container,
  Header,
  Segment
} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import './LandingPageGateway.css'

const __TEST__ = ( process.env.NODE_ENV === "test" );

export default class LandingPageGateway extends React.Component {

  static _COMPONENT_NAME_ = "landingPageGateway";

  static _TITLE_ = "landingPageGatewayTitle";

  static _SUBTITLE_ = "landingPageGatewaySubtitle";

  render() {
    const title = this.props.config.components[LandingPageGateway._COMPONENT_NAME_].constants[LandingPageGateway._TITLE_];
    const subtitle = this.props.config.components[LandingPageGateway._COMPONENT_NAME_].constants[LandingPageGateway._SUBTITLE_];
    return (
      <Segment
        className={["LandingPageGatewayOuterContainer", this.centerSegmentStyleClassName()].join(" ")}
        vertical
        textAlign="center"
        data-testid="LandingPageGatewayComponentTestId"
      >
        <Container className="LandingPageGatewayCoreContentContainer">
          <Header inverted as="h1">
            {title}
          </Header>
          <p
            className="LandingPageGatewaySubtitle"
            data-testid="LandingPageGatewayComponentSubtitlePartTestId"
          >
            {subtitle}
          </p>
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
    )
  }

  centerSegmentStyleClassName() {
    const centerSegmentStyleClassNames =
      this.props.config.components[LandingPageGateway._COMPONENT_NAME_].dynamicStyleGroups["centerSegmentStyleClassNames"];

    let idx = 0;

    if ( __TEST__ ) {
      // We want determinate behavior in test mode
      // because of snapshot testing.
      idx = 0;
    } else {
      idx = Math.floor(Math.random() * centerSegmentStyleClassNames.length);
    }

    return centerSegmentStyleClassNames[idx];
  }
}
