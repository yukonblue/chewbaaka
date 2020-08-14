/**
 * EcologyPage_Subsection_HuntingAndPredatorControl.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Aug 13, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import TextBubble from '../shared/TextBubble'

import FactBannerImage from '../shared/FactBannerImage'

import image_What_is_a_Problem_Animal from './assets/What_is_a_Problem_Animal-min.png'

import image_What_is_Sustainable_Utilization from './assets/What_is_Sustainable_Utilization-min.png'

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
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        content={this.renderContent()}
      />
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
          <FactBannerImage
            src={image_What_is_Sustainable_Utilization}
            alt="What is sustainable utilization?"
            large
            centered
          />
        );
      }
    };
    return (
      <ContentPageSubsectionPart key={idx}>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
        {renderOptionalBannerImgOnPart()}
      </ContentPageSubsectionPart>
    );
  }

  renderPartPredatorControlContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={this.renderFloatPart(part)}
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content)}
        />

        <FactBannerImage
          src={image_What_is_a_Problem_Animal}
          alt="What is a problem animal?"
          large
          centered
        />
      </ContentPageSubsectionPart>
    );
  }

  renderFloatPart(part) {
    return (
      <TextBubble
        diameter={560}
        backgroundColorRGB={[255,155,0]}
        title={part.textBubble.title}
        content={part.textBubble.content}
      />
    );
  }
}
