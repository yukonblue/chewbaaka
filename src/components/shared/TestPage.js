/**
 * TestPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 04, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import ImageSlide from './ImageSlide'

import image01 from './assets/cheetah-conservation-fund-logo.jpg'
import image02 from './assets/cheetah-conservation-fund-30-logo.svg'

class TestPage extends React.Component {
  render() {
    return (
      <ImageSlide images={[image01, image01, image02]} labels={["150 mya", "100 mya", "50 mya"]} percentages={[0, 20,100]} title="Cheetah evolution" decrementButtonLabel="backward" incrementButtonLabel="forward"/>
    )
  }
}

export default TestPage;
