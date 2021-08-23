/**
 * BiologyPage_Subsection_Lifecycle_Stage_2.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Aug 23, 2021
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import FluidTwoColumnContainer from '../shared/FluidTwoColumnContainer'

// import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

// import QnAPopUp from '../shared/QnAPopUp'

// import MediaEmbed from '../shared/MediaEmbed'

import MediaLinkButton from '../shared/MediaLinkButton'

export default class BiologyPageSubsectionLifecycleStage2 extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Lifecycle_Stage_2";

  static _DID_YOU_KNOW_ = "Young cheetahs rely on their mother on learning how to hunt. " +
                          "Cubs rescued and rehabilitated are difficult to be re-wilded because " +
                          "most of them have not acquired sufficient hunting skills needed to survive.";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLifecycleStage2._SUBSECTION_NAME_]
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
        <FluidTwoColumnContainer
          lhsColumn={this.renderPart1()}
          rhsColumn={this.renderPart2()}
        />
      </div>
    );
  }

  renderPart1() {
    return (
      <ContentPageSubsectionPart>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
        {/** TODO: Enable this text bubble */}
        {/* <div className="VerticalCushionPaddingTopLarge">
          <QnAPopUp
            className="VerticalCushionPaddingTopLarge"
            content={BiologyPageSubsectionLifecycleStage2._DID_YOU_KNOW_}
          />
        </div> */}
      </ContentPageSubsectionPart>
    );
  }

  renderPart2() {
    return (
      <ContentPageSubsectionPart>
        <MediaLinkButton
          href="https://www.youtube.com/embed/Wjtb7XMZlgY"
          title="Cheetah Mom Teaches Cubs to Hunt "
          icon="youtube"
        />
      </ContentPageSubsectionPart>
    );
  }
}
