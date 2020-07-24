/**
 * FuturePage_Subsection_WhatIsConservation.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 23, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder,
  ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import image_earth_environment from './assets/earth_environment.png'
import image_earth_biodiversity from './assets/earth_biodiversity_640x590.png'

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
      <div>
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
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
      <div className="OverflowHidden">
        <div className="FloatRight">
          <img
            src={image_earth_environment}
            alt="Conservation is taking care of the environment in which we live."
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }

  renderSecondaryPartContent() {
    return (
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
    );
  }

  renderMiddleColumnContent() {
    return (
      <img src={image_earth_biodiversity} alt="" />
    );
  }
}
