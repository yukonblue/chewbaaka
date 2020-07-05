/**
 * TestPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 05, 2020
 */

import React from 'react';

import { Redirect } from 'react-router-dom'

import "semantic-ui-css/semantic.min.css";

// import ImageSlideDiscrete from './ImageSlideDiscrete'
// import ImageSlide from './ImageSlide'
import ImageSlideModal from './ImageSlideModal'

import image01 from './assets/cheetah-conservation-fund-logo.jpg'
import image02 from './assets/cheetah-conservation-fund-30-logo.svg'

const __DEV__ = ( process.env.NODE_ENV === "development" );

class TestPage extends React.Component {
  render() {
    /**
     * Redirect to homepage in production build,
     * otherwise renders whatever component we need to test here.
     */
    if ( !__DEV__ ) {
      return <Redirect to="/" />  
    }
    return (
      <ImageSlideModal
        slides={[
          {
            image: image01,
            title: "Acinonyx jubatus",
            description: "This is the cheetah."
          },
          {
            image: image02,
            title: "Cheeeeeetah",
            description: "Fastest land animal on earth!"
          }
        ]}
      />

      // <ImageSlide
      //   images={[image01, image01, image02]}
      //   labels={["150 mya", "100 mya", "50 mya"]}
      //   title="Cheetah evolution"
      //   caption="Slide the timeline to see the migration of cheetahs."
      //   sliderBeginLabel="150 mya"
      //   sliderEndLabel="50 mya"
      // />

      // <ImageSlideDiscrete
      //   images={[image01, image01, image02]}
      //   labels={["150 mya", "100 mya", "50 mya"]}
      //   percentages={[0, 20,100]}
      //   title="Cheetah evolution"
      //   decrementButtonLabel="backward"
      //   incrementButtonLabel="forward"
      // />
    )
  }
}

export default TestPage;
