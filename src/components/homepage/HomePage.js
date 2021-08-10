/**
 * HomePage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 10, 2021
 */

import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LandingPageGateway from './LandingPageGateway'
import ExploreGateway from './ExploreGateway'
import Footer from '../shared/Footer'

import RenderVersionString from '../shared/Debug'

import { config } from './config'

export default class HomePage extends React.Component {

  render() {
    return (
      <Fragment>
        {this.renderHTMLHead()}
        {this.renderHTMLBody()}
        {this.renderVersionString()}
      </Fragment>
    );
  }

  renderHTMLBody() {
    return (
      <div className="HomePage" data-testid="HomePageTestId">
        <LandingPageGateway
          config={config}
        />
        <ExploreGateway/>
        <Footer
          appConfig={this.props.appConfig}
        />
      </div>
    )
  }

  renderHTMLHead() {
    const headMeta = this.props.appConfig.headMeta;

    return (
      <Helmet>
        <title>{headMeta.title}</title>
        <meta name="description" content={headMeta.description} />
        <meta name="keywords" content={headMeta.keywords.join(", ")} />
      </Helmet>
    );
  }

  renderVersionString() {
    return RenderVersionString(this.props.appConfig.version);
  }
}
