/**
 * HistoryPageCheetahEvolutionMap.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import ImageSlide from '../shared/ImageSlide'

import backgroundImage from './assets/Cheetah_Evolution_Map/Cheetah_Evolution_Map_Background_Only.png'
import bodyImage_01 from './assets/Cheetah_Evolution_Map/Cheetah_Evolution_Map_Step_01.png'
import bodyImage_02 from './assets/Cheetah_Evolution_Map/Cheetah_Evolution_Map_Step_02.png'
import bodyImage_03 from './assets/Cheetah_Evolution_Map/Cheetah_Evolution_Map_Step_03.png'
import bodyImage_04 from './assets/Cheetah_Evolution_Map/Cheetah_Evolution_Map_Step_04.png'
import bodyImage_05 from './assets/Cheetah_Evolution_Map/Cheetah_Evolution_Map_Step_05.png'
import bodyImage_06 from './assets/Cheetah_Evolution_Map/Cheetah_Evolution_Map_Step_06.png'
import bodyImage_07 from './assets/Cheetah_Evolution_Map/Cheetah_Evolution_Map_Step_07.png'

export default class HistoryPageCheetahEvolutionMap extends React.Component {

  static _TITLE_ = "Map of Cheetah Evolution"

  render() {
    return (
      <ImageSlide
        title={HistoryPageCheetahEvolutionMap._TITLE_}
        caption="Slide the timeline to see how the cheetah evolved and migrated."
        sliderNameLabel="Timeline"
        sliderUnitLabel="million years ago / years ago"
        backgroundImage={backgroundImage}
        imageWidth={1200}
        marks={[
          {
            value: 5,
            label: '26 mya',
            image: bodyImage_01,
          },
          {
            value: 10,
            label: '6.7 mya',
            image: bodyImage_02,
          },
          {
            value: 30,
            label: '100,000 ya',
            image: bodyImage_03,
          },
          {
            value: 40,
            label: '100,000 ya',
            image: bodyImage_04,
          },
          {
            value: 60,
            label: '12,000 ya',
            image: bodyImage_05,
          },
          {
            value: 70,
            label: '10,000 ya',
            image: bodyImage_06,
          },
          {
            value: 90,
            label: 'contemporary',
            image: bodyImage_07,
          },
        ]}
      />
    );
  }
}
