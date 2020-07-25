/**
 * BiologyPage_Subsection_Abnormalities.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 18, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageParagraph from '../shared/ContentPageParagraph';

import {
  ContentPageSubsectionColumnDataBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import ImageView from '../shared/ImageView'

import image_cheetah_kinked_tail from './assets/cheetah_kinked_tail.jpg'

export default class BiologyPageSubsectionAbnormalities extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Abnormalities";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionAbnormalities._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className="">
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
        {this.renderIntroSectionContent()}
        {this.renderSection1Content()}
        {this.renderSection2Content()}
        {this.renderSection3Content()}
      </div>
    );
  }

  renderIntroSectionContent() {
    return (
      <ContentPageParagraph>
        {this.state.subsectionConfig.contents["part_Intro"].content}
      </ContentPageParagraph>
    );
  }

  renderSection1Content() {
    return (
      <div className="VerticalCushionPadding">
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={
            ContentPageSubsectionColumnDataBinder(
              this.state.subsectionConfig.contents["part_Crowded_Lower_Incisors"],
              this.renderSingleParagraphContent
            )
          }
          rhsColumn={
            ContentPageSubsectionColumnDataBinder(
              this.state.subsectionConfig.contents["part_Birth_Defects"],
              this.renderSingleParagraphContent
            )
          }
        />
      </div>
    );
  }

  renderSection2Content() {
    return (
      <div className="VerticalCushionPadding">
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={
            ContentPageSubsectionColumnDataBinder(
              this.state.subsectionConfig.contents["part_Focal_Palatine_Erosion"],
              this.renderSingleParagraphContent
            )
          }
          rhsColumn={
            ContentPageSubsectionColumnDataBinder(
              this.state.subsectionConfig.contents["part_Abnormal_Sperm"],
              this.renderSingleParagraphContent
            )
          }
        />
      </div>
    );
  }

  renderSection3Content() {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <div className="FloatRight">
          <ImageView
            image={image_cheetah_kinked_tail}
            caption="Kinked tail."
            credit={kStringConstantCheetahConservationFund}
            width={640}
            height={427}
          />
        </div>

        <h2 className="ContentPageSubsectionColumnContentTitle">
          {this.state.subsectionConfig.contents["part_Kinked_Tails"].title}
        </h2>
        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["part_Kinked_Tails"].content}
        </ContentPageParagraph>
      </div>
    );
  }

  renderSingleParagraphContent(content) {
    return (
      <ContentPageParagraph>
        {content}
      </ContentPageParagraph>
    );
  }
}
