/**
 * EcologyPage_Subsection_HuntingAndPredatorControl.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import TextBubble from '../shared/TextBubble'

import image_What_is_a_Problem_Animal from './assets/What_is_a_Problem_Animal.png'

import image_What_is_Sustainable_Utilization from './assets/What_is_Sustainable_Utilization.png'

export default class EcologyPageSubsectionHuntingAndPredatorControl extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_HuntingAndPredatorControl";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionHuntingAndPredatorControl._SUBSECTION_NAME_]
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
        {this.renderPartHuntingContent(this.state.subsectionConfig.contents["part_Hunting"])}
        {this.renderPartPredatorControlContent(this.state.subsectionConfig.contents["part_Predator_Control"])}
      </div>
    );
  }

  renderPartHuntingContent(part) {
    return (
      <div>
        {
          Object.keys(part.content).map(
            (key, idx) => (
              this.renderPartContent(part.content[key], idx)
            )
          )
        }
      </div>
    );
  }

  renderPartContent(part, idx) {
    const renderOptionalBannerImgOnPart = () => {
      if (part.is_part_What_is_Sustainable_Utilization) {
        return (
          <div className="Centered FactBannerMediumDimension">
            <img
              className="FactBannerMediumDimension"
              src={image_What_is_Sustainable_Utilization}
              alt="What is sustainable utilization?"
            />
          </div>
        );
      }
    };
    return (
      <div key={idx} className="VerticalCushionPadding">
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
        {renderOptionalBannerImgOnPart()}
      </div>
    );
  }

  renderPartPredatorControlContent(part) {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        <div className="FloatRight">
          <TextBubble
            diameter={560}
            backgroundColorRGB={[255,155,0]}
            title={part.textBubble.title}
            content={part.textBubble.content}
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(part.content)}

        <img
          className="FactBannerMediumDimension"
          src={image_What_is_a_Problem_Animal}
          alt="What is a problem animal?"
        />
      </div>
    );
  }
}
