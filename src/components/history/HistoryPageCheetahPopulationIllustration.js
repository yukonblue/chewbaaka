/**
 * HistoryPageCheetahPopulationIllustration.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jul 11, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import './HistoryPageCheetahPopulationIllustration.css'

import ImageSlide from '../shared/ImageSlide'

import { getElementStyleClassName } from '../../styling/styling'

import backgroundImage from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_Outline.png'
import bodyImage_01 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorOnly_v1.png'
import bodyImage_02 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorOnly_v2.png'
import bodyImage_03 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorOnly_v3.png'

export default class HistoryPageCheetahPopulationIllustration extends React.Component {

  static _TITLE_ = "Cheetah Population from 1975 to 2000s"

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>
          <h2>Title</h2>

          <div>
          <ImageSlide
            title={HistoryPageCheetahPopulationIllustration._TITLE_}
            caption="Slide to timeline to see how the cheetah population changes."
            sliderNameLabel="Timeline"
            sliderUnitLabel="Years"
            imageWidth={326}
            imageHeight={326}
            backgroundImage={backgroundImage}
            marks={[
              {
                value: 0,
                label: '1975',
                image: bodyImage_01
              },
              {
                value: 50,
                label: '1990',
                image: bodyImage_02
              },
              {
                value: 100,
                label: '2000',
                image: bodyImage_03
              },
            ]}
            onChange={(mark) =>{
              console.log(mark);
            }}
          />
          </div>
        </div>
      </div>
    );
  }
}
