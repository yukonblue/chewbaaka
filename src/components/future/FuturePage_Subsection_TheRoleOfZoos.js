/**
 * FuturePage_Subsection_TheRoleOfZoos.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_cincinnati_zoo_cheetah_sarah from './assets/cincinnati_zoo_cheetah_sarah.jpg'

export default class FuturePageSubsectionTheRoleOfZoos extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_TheRoleOfZoos";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionTheRoleOfZoos._SUBSECTION_NAME_]
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
        {this.renderAmbassadorPartContent(this.state.subsectionConfig.contents["part_Ambassadors"])}
        {this.renderResearchPartContent(this.state.subsectionConfig.contents["part_Research"])}
      </div>
    );
  }

  renderIntroPartContent(part) {
    return (
      <div className="VerticalCushionPadding">
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }

  renderAmbassadorPartContent(part) {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        <div className="FloatRight">
          <ImageView
            image={image_cincinnati_zoo_cheetah_sarah}
            caption="In 2009, Cincinnati Zoo's cheetah Sarah set the record of the world's fastest cheetah, as she sprant 100m in just 6.13 seconds. The best record for 100m by humans was from Usain Bolt, finishing in 9.58 seconds."
            width={720}
            height={406}
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }

  renderResearchPartContent(part) {
    return (
      <div className="VerticalCushionPadding">
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }
}
