/**
 * EcologyPage_Subsection_CheetahFriendlyFarming.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 21, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSubsectionSubtitleSecondary from '../shared/ContentPageSubsectionSubtitleSecondary'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import image_goat_clipart from './assets/goat_clipart.png'
import image_cattle_clipart from './assets/cattle_clipart.png'

import './EcologyPage_Subsection_CheetahFriendlyFarming.css'

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
        {this.renderBodyPartContent(this.state.subsectionConfig.contents["part_FarmPractices"])}
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
          lhsColumn={this.bodyPartColumnData(part.content["part_SmallstockPractices"])}

          middleColumn={this.bodyPartMiddleColumnData(part.content["part_SharedPractices"])}

          rhsColumn={this.bodyPartColumnData(part.content["part_CattlePractices"])}

          showTitleInMiddleColumn={true}
        />
      </ContentPageSubsectionPart>
    );
  }

  bodyPartMiddleColumnData(part) {
    return {
      title: part.title,
      content: (
        <div>
          <img className="FlexClipartSheep" src={image_goat_clipart} alt="sheep" width={160} />
          <img className="FlexClipartCattle" src={image_cattle_clipart} alt="cattle" width={160} />
          {this.renderBodyPartColumnContent(part)}
        </div>
      ),
      backgroundColorRGB: part.backgroundColorRGB
    };
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
        <ContentPageSubsectionSubtitleSecondary>
          {subpart.title}
        </ContentPageSubsectionSubtitleSecondary>
        {ContentPageSubsectionParagraphsContentBinder(subpart.content)}
      </div>
    );
  }
}
