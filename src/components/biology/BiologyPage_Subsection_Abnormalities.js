/**
 * BiologyPage_Subsection_Abnormalities.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 18, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageParagraph from '../shared/ContentPageParagraph';

import {
  ContentPageSubsectionColumnDataBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import ImageView from '../shared/ImageView'

import image_cheetah_kinked_tail from './assets/cheetah_kinked_tail-min.jpg'

export default class BiologyPageSubsectionAbnormalities extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Abnormalities";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionAbnormalities._SUBSECTION_NAME_],
      accentColor: props.sectionConfig.accentColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        accentColor={this.state.accentColor}
        content={this.renderContent()}
      />
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
      <ContentPageSubsectionPart>
        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["part_Intro"].content}
        </ContentPageParagraph>
      </ContentPageSubsectionPart>
    );
  }

  renderSection1Content() {
    return (
      <ContentPageSubsectionPart>
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
      </ContentPageSubsectionPart>
    );
  }

  renderSection2Content() {
    return (
      <ContentPageSubsectionPart>
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
      </ContentPageSubsectionPart>
    );
  }

  renderSection3Content() {
    return (
      <ContentPageSubsectionPart>

        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={
            ContentPageSubsectionColumnDataBinder(
              this.state.subsectionConfig.contents["part_Kinked_Tails"],
              this.renderSingleParagraphContent
            )
          }
          rhsColumn={{
            content: (
              <ImageView
                image={image_cheetah_kinked_tail}
                caption="Kinked tail."
                credit={kStringConstantCheetahConservationFund}
                width={640}
                height={427}
              />
            )
          }}
        />
      </ContentPageSubsectionPart>
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
