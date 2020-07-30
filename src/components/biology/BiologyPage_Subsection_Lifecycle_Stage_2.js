/**
 * BiologyPage_Subsection_Lifecycle_Stage_2.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import QnAPopUp from '../shared/QnAPopUp'

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
        {this.renderPart1()}
        {this.renderPart2()}
      </div>
    );
  }

  renderPart1() {
    return (
      <div className="OverflowHidden">
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
        <div className="FloatRight VerticalCushionPaddingTopLarge">
          <MediaLinkButton
            href="https://www.youtube.com/watch?v=Wjtb7XMZlgY"
            title="Cheetah Mom Teaches Cubs to Hunt | YouTube"
          />
        </div>
      </div>
    );
  }

  renderPart2() {
    return (
      <ContentPageSubsectionPart>
        <QnAPopUp
          className="VerticalCushionPaddingTopLarge"
          content={BiologyPageSubsectionLifecycleStage2._DID_YOU_KNOW_}
        />
      </ContentPageSubsectionPart>
    );
  }
}
