/**
 * HomePage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 20, 2020
 */

import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import LandingPageGateway from './LandingPageGateway'
import ExploreGateway from './ExploreGateway'
import Footer from '../shared/Footer'

import HtmlComment from '../shared/HtmlComment'

import { config } from './config'

const __TEST__ = ( process.env.NODE_ENV === "test" );

export default class HomePage extends React.Component {

  render() {
    return (
      <Fragment>
        {this.renderHTMLHead()}
        {this.renderHTMLBody()}
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
        {this.renderVersionInDebug()}
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

  renderVersionInDebug() {
    return (!__TEST__) ? (
      <HtmlComment
        text={`Version: ${this.props.appConfig.version}`}
      />
    ) : null;
  }
}
