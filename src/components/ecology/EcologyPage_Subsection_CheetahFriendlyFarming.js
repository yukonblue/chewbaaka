/**
 * EcologyPage_Subsection_CheetahFriendlyFarming.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 21, 2020
 * Updated  : Jul 21, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

export default class EcologyPageSubsectionCheetahFriendlyFarming extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahFriendlyFarming";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionCheetahFriendlyFarming._SUBSECTION_NAME_]
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
        {this.renderBodyPartContent(this.state.subsectionConfig.contents["part_FarmPractices"])}
      </div>
    );
  }

  renderIntroPartContent(part) {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }

  renderBodyPartContent(part) {
    return (
      <ContentPageSubsectionThreeColumnContentTemplate
        lhsColumn={this.bodyPartColumnData(part.content["part_SmallstockPractices"])}

        middleColumn={this.bodyPartColumnData(part.content["part_SharedPractices"])}

        rhsColumn={this.bodyPartColumnData(part.content["part_CattlePractices"])}

        showTitleInMiddleColumn={true}
      />
    );
  }

  bodyPartColumnData(part) {
    return {
      title: part.title,
      content: this.renderBodyPartColumnContent(part),
      backgroundColorRGB: part.backgroundColorRGB
    };
  }

  renderBodyPartColumnContent(part) {
    return (
      <div>
        {
          Object.keys(part.content).map(
            (key, idx) => (
              this.renderSubPartContent(part.content[key], idx)
            )
          )
        }
      </div>
    );
  }

  renderSubPartContent(subpart, key) {
    return (
      <div key={key} className="VerticalCushionPadding">
        <h3 className="ContentPageSubsectionColumnContentSubtitle">
          {subpart.title}
        </h3>
        {ContentPageSubsectionParagraphsContentBinder(subpart.content)}
      </div>
    );
  }
}