/**
 * FuturePage_Subsection_MissionPossible.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 24, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'

import {
  ContentPageSubsectionColumnDataBinder,
  ContentPageSubsectionParagraphsContentBinder,
  ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import image_Sustainable_Development from './assets/Sustainable_Development.png'

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
        {this.renderBodyPartContent(this.state.subsectionConfig.contents["part_Body"])}
      </div>
    );
  }

  renderIntroPartContent(part) {
    return (
      ContentPageSubsectionParagraphsContentBinder(part.content)
    );
  }

  renderBodyPartContent(part) {
    return (
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
