/**
 * FuturePage_Subsection_WhatIsConservation.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Aug 12, 2020
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

import image_earth_environment from './assets/earth_environment-min.png'
import image_earth_biodiversity from './assets/earth_biodiversity-min.png'

export default class FuturePageSubsectionWhatIsConservation extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_WhatIsConservation";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionWhatIsConservation._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
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
            <img
              src={image_earth_environment}
              alt="Conservation is taking care of the environment in which we live."
              className="FullWidth"
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
        alt=""
      />
    );
  }
}
