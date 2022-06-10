/**
 * FuturePage_Subsection_WhatIsConservation.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder,
  ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import image_earth_environment from './assets/earth_environment-min.png'
import image_earth_biodiversity from './assets/earth_biodiversity-min.png'

export default class FuturePageSubsectionWhatIsConservation extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_WhatIsConservation";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionWhatIsConservation._SUBSECTION_NAME_],
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
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderIntroPartContent(this.state.subsectionConfig.contents["part_Intro"])}
        {this.renderSecondaryPartContent()}
      </div>
    );
  }

  renderIntroPartContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <FluidImageWrapper
              src={image_earth_environment}
              alt="Conservation is taking care of the environment in which we live."
              // Specify the aspect ratio
              width={480}
              height={423}
            />
          }
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content)}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderSecondaryPartContent() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionThreeColumnContentTemplate
          lhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(
              this.state.subsectionConfig.contents["part_EnvironmentalEducation"],
            )
          }

          middleColumn={
            {content: this.renderMiddleColumnContent()}
          }

          rhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(
              this.state.subsectionConfig.contents["part_ConservationBiology"],
            )
          }
        />
      </ContentPageSubsectionPart>
    );
  }

  renderMiddleColumnContent() {
    return (
      <img
        className="FullWidth"
        src={image_earth_biodiversity}
        alt="Earth biodiversity"
        // Specify the aspect ratio.
        width={620}
        height={572}
      />
    );
  }
}
