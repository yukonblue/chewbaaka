/**
 * HistoryPageCheetahPopulationIllustration.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jul 27, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import './HistoryPageCheetahPopulationIllustration.css'

import ImageSlide from '../shared/ImageSlide'

import { getElementStyleClassName } from '../../styling/styling'

import backgroundImage from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_Outline.png'
import bodyImage_00 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorAndText_v0.png'
import bodyImage_01 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorAndText_v1.png'
import bodyImage_02 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorAndText_v2.png'
import bodyImage_03 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorAndText_v3.png'

export default class HistoryPageCheetahPopulationIllustration extends React.Component {

  static _TITLE_ = "Cheetah Population from 1900 to Present"

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageCheetahPopulationIllustrationOuterContainer")}>
        <div className={getElementStyleClassName("HistoryPageCheetahPopulationIllustrationInnerContainer")}>
          <div className={getElementStyleClassName("HistoryPageCheetahPopulationIllustrationImageSlideContainer")}>
            <ImageSlide
              title={HistoryPageCheetahPopulationIllustration._TITLE_}
              caption="Slide the timeline to see how the cheetah population changes."
              sliderNameLabel="Timeline"
              sliderUnitLabel="Years"
              imageWidth={326}
              imageHeight={326}
              backgroundImage={backgroundImage}
              marks={[
                {
                  value: 0,
                  label: 'Pre 1900',
                  image: bodyImage_00,
                  // description: "Before the 20th century, there were over 100,000 cheetahs roaming in African and Asia."
                },
                {
                  value: 50,
                  label: '1990',
                  image: bodyImage_01,
                  // description:  "Around 1990, the global population started to decline drastically. Less than 100,000 at this point."
                },
                {
                  value: 75,
                  label: '2000',
                  image: bodyImage_02,
                  // description: "At the beginning of the 21st century, the population dropped to around 12,000."
                },
                {
                  value: 100,
                  label: '2018',
                  image: bodyImage_03,
                  // description: "By 2018, only less than 7,500 left."
                },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}
