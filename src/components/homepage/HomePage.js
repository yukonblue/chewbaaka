/**
 * HomePage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import './HomePage.css';

import TopNavBar from '../shared/TopNavBar.js'
import LandingPageGateway from './LandingPageGateway.js'
import ExploreGateway from './ExploreGateway.js'
import Footer from '../shared/Footer.js'

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <TopNavBar/>
        <LandingPageGateway/>
        <ExploreGateway/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
