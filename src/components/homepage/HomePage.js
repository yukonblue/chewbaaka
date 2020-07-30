/**
 * HomePage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import TopNavBar from '../shared/TopNavBar'
import LandingPageGateway from './LandingPageGateway'
import ExploreGateway from './ExploreGateway'
import Footer from '../shared/Footer'

import HtmlComment from '../shared/HtmlComment'

import { config } from './config'

const __TEST__ = ( process.env.NODE_ENV === "test" );

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage" data-testid="HomePageTestId">
        <TopNavBar fixedOnTop={true}/>
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

  renderVersionInDebug() {
    return (!__TEST__) ? (
      <HtmlComment
        text={`Version: ${this.props.appConfig.version}`}
      />
    ) : null;
  }
}
