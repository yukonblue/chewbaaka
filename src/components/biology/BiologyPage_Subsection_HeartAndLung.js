/**
 * BiologyPage_Subsection_HeartAndLung.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jun 10, 2022
 */

import React, { Suspense } from 'react'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

import FluidImageWrapper from '../shared/FluidImageWrapper'

// import CheetahOlympics from './CheetahOlympics'

import image_Cheetah_Travel from './assets/Cheetah_Travel_480x480-min.png'

import './BiologyPage_Subsection_HeartAndLung.css'

const CheetahOlympics = React.lazy(() => import('./CheetahOlympics'));

export default class BiologyPageSubsectionHearAndLung extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_HearAndLung";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionHearAndLung._SUBSECTION_NAME_],
      bgColor: props.sectionConfig.bgColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        bgColor={this.state.bgColor}
        content={this.renderContent()}
      />
    );
  }

  renderContent() {
    return (
      <div>
        {this.renderPart1()}
        {this.renderCheetahOlympicsPartConditionally()}
      </div>
    );
  }

  renderPart1() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderLhsContent()}}
          rhsColumn={{content: this.renderRhsContent()}}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderCheetahOlympicsPartConditionally() {
    return (
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width > 720)}
        renderContentHandler={this.renderCheetahOlympicsPart}
      />
    );
  }

  renderCheetahOlympicsPart() {
    return (
      <div className="CheetahOlympicsSubsectionWrapper">
        <ContentPageSubsectionPart>
          <Suspense fallback={<div></div>}>
            <CheetahOlympics />
          </Suspense>
        </ContentPageSubsectionPart>
      </div>
    );
  }

  renderLhsContent() {
    return (
      ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part1.content)
    );
  }

  renderRhsContent() {
    return (
      <div>
        <FluidImageWrapper
          src={image_Cheetah_Travel}
          alt="Cheetah run illustration"
          centered
          // Aspect ratio
          width={480}
          height={480}
        />
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part2.content)}
      </div>
    );
  }
}
