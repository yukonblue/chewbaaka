/**
 * HomePage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import TopNavBar from '../shared/TopNavBar'
import LandingPageGateway from './LandingPageGateway'
import ExploreGateway from './ExploreGateway'
import Footer from '../shared/Footer'

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage" data-testid="HomePageTestId">
        <TopNavBar fixedOnTop={true}/>
        <LandingPageGateway/>
        <ExploreGateway/>
        <Footer/>
      </div>
    )
  }
}
