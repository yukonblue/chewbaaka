/**
 * FuturePage_Subsection_CheetahAmbassadors.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jun 05, 2022
 */

import React from 'react'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import {
  ContentPageSubsectionParagraphsContentBinder,
} from '../shared/ContentPageSubsectionContentBinder'

import '../shared/ContentPageSharedStyles.css'

import AmbassadorCard from './AmbassadorCard'

import MediaLinkButton from '../shared/MediaLinkButton'

import image_Chewbaaka from './assets/Chewbaaka-min.jpg'
import image_Mekondyo from './assets/Mekondyo-min.jpg'

export default class FuturePageSubsectionCheetahAmbassadors extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahAmbassadors";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionCheetahAmbassadors._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        content={this.renderContent()}
      />
    );
  }

  renderContent() {
    return (
      <div>
        {this.renderPartIntro(this.state.subsectionConfig.contents["part_Intro"])}
        {this.renderPartChewbaaka(this.state.subsectionConfig.contents["part_Chewbaaka"])}
        {this.renderPartMekondyo(this.state.subsectionConfig.contents["part_Mekondyo"])}
      </div>
    );
  }

  renderPartIntro(part) {
    return (
      ContentPageSubsectionParagraphsContentBinder(part.content)
    );
  }

  renderPartChewbaaka(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          Chewbaaka
        </ContentPageSubsectionSubtitle>

        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderLhsContentChewbaaka(part)}}
          rhsColumn={{content: this.renderRhsContentChewbaaka(part)}}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPartMekondyo(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          Mekondyo
        </ContentPageSubsectionSubtitle>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderLhsContentMekondyo(part)}}
          rhsColumn={{content: this.renderRhsContentMekondyo(part)}}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderLhsContentChewbaaka(part) {
    return (
      <div className="FuturePageCheetahAndManImageSubsectionContentTextContainer">
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
        <div>
          <MediaLinkButton
            href="https://www.youtube.com/watch?v=WYjeEG06cjc"
            title='Watch "Walking with Chewbaaka" on YouTube'
          />
        </div>
      </div>
    );
  }

  renderRhsContentChewbaaka(part) {
    return (
      <AmbassadorCard
        image={image_Chewbaaka}
        name="Chewbaaka"
        date="1996"
        description={part.card_content}
      />
    );
  }

  renderLhsContentMekondyo(part) {
    return (
      <AmbassadorCard
        image={image_Mekondyo}
        name="Mekondyo"
        date="1998"
        description={part.card_content}
      />
    );
  }

  renderRhsContentMekondyo(part) {
    return (
      ContentPageSubsectionParagraphsContentBinder(part.content)
    );
  }
}
