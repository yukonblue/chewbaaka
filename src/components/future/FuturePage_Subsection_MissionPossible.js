/**
 * FuturePage_Subsection_MissionPossible.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionColumnDataBinder,
  ContentPageSubsectionParagraphsContentBinder,
  ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import image_Sustainable_Development from './assets/Sustainable_Development-min.png'

export default class FuturePageSubsectionMissionPossible extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_MissionPossible";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionMissionPossible._SUBSECTION_NAME_]
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
        {this.renderBodyPartContent(this.state.subsectionConfig.contents["part_Body"])}
      </div>
    );
  }

  renderIntroPartContent(part) {
    return (
      <ContentPageSubsectionPart>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </ContentPageSubsectionPart>
    );
  }

  renderBodyPartContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionThreeColumnContentTemplate
          lhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(
              part.content["part_LandManagement"],
            )
          }

          middleColumn={
            ContentPageSubsectionColumnDataBinder(
              part.content["part_LivestockManagement"],
              this.renderMiddleColumnContent
            )
          }

          rhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(
              part.content["part_WildlifeManagement"],
            )
          }

          showTitleInMiddleColumn={true}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderMiddleColumnContent(content) {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(content)}
        <img className="FullWidth"
          src={image_Sustainable_Development}
          alt="Sustainable development"
        />
      </div>
    );
  }
}
