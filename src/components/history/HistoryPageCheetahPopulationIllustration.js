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
import bodyImage_00 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorOnly_v0.png'
import bodyImage_01 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorOnly_v1.png'
import bodyImage_02 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorOnly_v2.png'
import bodyImage_03 from './assets/Cheetah_Population_Color_Illustration/Cheetah_Population_Color_Illustration_ColorOnly_v3.png'

export default class HistoryPageCheetahPopulationIllustration extends React.Component {

  static _TITLE_ = "Cheetah Population from 1975 to 2000s"

  static _DESCRIPTIONS_BY_MARKS_ = {
    0: "Before the 20th century, there were over 20,000 cheetahs roaming in African and Asia.",
    50: "Around 1975, the global population start to decline drastically. Less than 20,000 at this point",
    75: "Starting in 1990, the population got to around 12,000.",
    100: "2010 and onward, only less than 7,500 left."
  }

  constructor(props) {
    super(props);
    this.state = {
      activeMark: 0,
    }
  }

  handleSliderOnChange(value) {
    this.setState({
      activeMark: Number(value),
    });
  }

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageCheetahPopulationIllustrationOuterContainer")}>
        <div>
          <h2>Title</h2>

          <div className={getElementStyleClassName("HistoryPageCheetahPopulationIllustrationDescriptionContainer")}>
            <p>{HistoryPageCheetahPopulationIllustration._DESCRIPTIONS_BY_MARKS_[this.state.activeMark]}</p>
          </div>

          <div className={getElementStyleClassName("HistoryPageCheetahPopulationIllustrationImageSlideContainer")}>
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
                  label: 'Pre 1900',
                  image: bodyImage_00
                },
                {
                  value: 50,
                  label: '1975',
                  image: bodyImage_01
                },
                {
                  value: 75,
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
