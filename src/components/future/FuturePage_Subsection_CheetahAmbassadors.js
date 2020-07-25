/**
 * FuturePage_Subsection_CheetahAmbassadors.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import { getElementStyleClassName } from '../../styling/styling'
import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import ContentPageParagraph from '../shared/ContentPageParagraph'

import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import CircularImage from '../shared/CircularImage'

import MediaLinkButton from '../shared/MediaLinkButton'

import './FuturePage_Subsection_CheetahAmbassadors.css'

import image_Chewbaaka from './assets/Chewbaaka.jpg'
import image_Mekondyo from './assets/Mekondyo.jpg'

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
        <div>
          <ContentPageSubsectionSubtitle>
            Chewbaaka
          </ContentPageSubsectionSubtitle>

          <ContentPageSubsectionTwoColumnContentTemplate
            lhsColumn={{content: this.renderLhsContentChewbaaka()}}
            rhsColumn={{content: this.renderRhsContentChewbaaka()}}
          />
        </div>
        <div>
          <ContentPageSubsectionSubtitle>
            Mekondyo
          </ContentPageSubsectionSubtitle>
          <ContentPageSubsectionTwoColumnContentTemplate
            lhsColumn={{content: this.renderLhsContentMekondyo()}}
            rhsColumn={{content: this.renderRhsContentMekondyo()}}
          />
        </div>
      </div>
    );
  }

  renderLhsContentChewbaaka() {
    return (
      <div className="FuturePageCheetahAndManImageSubsectionContentTextContainer">
        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["paragraph_Chewbaaka"]}
        </ContentPageParagraph>
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

  renderRhsContentMekondyo() {
    return (
      <ContentPageParagraph>
        {this.state.subsectionConfig.contents["paragraph_Mekondyo"]}
      </ContentPageParagraph>
    );
  }
}
