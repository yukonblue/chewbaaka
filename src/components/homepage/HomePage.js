/**
 * HomePage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 03, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import './HomePage.css';

import TopNavBar from '../shared/TopNavBar'
import LandingPageGateway from './LandingPageGateway'
import ExploreGateway from './ExploreGateway'
import Footer from '../shared/Footer'

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
