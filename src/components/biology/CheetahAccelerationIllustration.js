/**
 * CheetahAccelerationIllustration.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 17, 2020
 */

import React from 'react'

import ImageSlide from '../shared/ImageSlide'

import image_backdrop from './assets/cheetah_acceleration_illustration/Cheetah_Acceleration_Illustration_Backdrop.png'
import image_00 from './assets/cheetah_acceleration_illustration/Cheetah_Acceleration_Illustration_00.png'
import image_01 from './assets/cheetah_acceleration_illustration/Cheetah_Acceleration_Illustration_01.png'
import image_02 from './assets/cheetah_acceleration_illustration/Cheetah_Acceleration_Illustration_02.png'
import image_03 from './assets/cheetah_acceleration_illustration/Cheetah_Acceleration_Illustration_03.png'

export default class CheetahAccelerationIllustration extends React.Component {

  static _TITLE_ = "How Fast Can a Cheetah Run"

  static _MARKS_ = [
    {
      value: 0,
      label: "at 0 second",
      image: image_00
    },
    {
      value: 33,
      label: "at 1 second",
      image: image_01
    },
    {
      value: 66,
      label: "at 2 seconds",
      image: image_02
    },
    {
      value: 100,
      label: "at 3 seconds",
      image: image_03
    }
  ]

  render() {
    return (
      <div>
        <ImageSlide
          title={CheetahAccelerationIllustration._TITLE_}
          caption="Slide to timeline to see how far the cheetah runs compared to a car and a human athlete sprinter."
          sliderNameLabel="Time"
          sliderUnitLabel="seconds"
          backgroundImage={image_backdrop}
          marks={CheetahAccelerationIllustration._MARKS_}
        />
      </div>
    );
  }
}
