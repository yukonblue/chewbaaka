/**
 * FuturePage_Subsection_CheetahAmbassadors.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 07, 2020
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

import { getElementStyleClassName } from '../../styling/styling'

import CircularImage from '../shared/CircularImage'

import MediaLinkButton from '../shared/MediaLinkButton'

import image_Chewbaaka from './assets/Chewbaaka-min.jpg'
import image_Mekondyo from './assets/Mekondyo-min.jpg'

import './FuturePage_Subsection_CheetahAmbassadors.css'

if ( process.env.NODE_ENV === 'development' )
  require('./FuturePage_Subsection_CheetahAmbassadors-debug.css')

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
      <div className="FuturePageSubsectionCheetahsAtCCF">
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="FuturePageSubsectionCheetahsAtCCFInnerContainer">
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
          rhsColumn={{content: this.renderRhsContentChewbaaka()}}
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
          lhsColumn={{content: this.renderLhsContentMekondyo()}}
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

  renderRhsContentChewbaaka() {
    return (
      <div className={getElementStyleClassName("FuturePageSubsectionCheetahsAtCCFImageContainer")}>
        <CircularImage
          image={image_Chewbaaka}
          title="Chewbaaka"
        />
      </div>
    );
  }

  renderLhsContentMekondyo() {
    return (
      <div className={getElementStyleClassName("FuturePageSubsectionCheetahsAtCCFImageContainer")}>
        <CircularImage
          image={image_Mekondyo}
          title="Mekondyo"
        />
      </div>
    );
  }

  renderRhsContentMekondyo(part) {
    return (
      ContentPageSubsectionParagraphsContentBinder(part.content)
    );
  }
}
