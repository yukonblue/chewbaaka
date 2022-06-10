/**
 * EcologyPage_Subsection_CheetahFriendlyFarming.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 21, 2020
 * Updated  : Jun 09, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSubsectionSubtitleSecondary from '../shared/ContentPageSubsectionSubtitleSecondary'

import FuidSingleRowGrid from '../shared/FluidSingleRowGrid'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import image_goat_clipart from './assets/goat_clipart-min.png'
import image_cattle_clipart from './assets/cattle_clipart-min.png'

export default class EcologyPageSubsectionCheetahFriendlyFarming extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahFriendlyFarming";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionCheetahFriendlyFarming._SUBSECTION_NAME_],
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
          <FuidSingleRowGrid>
            <img className="FlexClipartSheep" src={image_goat_clipart} alt="sheep" width={160} height={157} />
            <img className="FlexClipartCattle" src={image_cattle_clipart} alt="cattle" width={160} height={131} />
          </FuidSingleRowGrid>
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
