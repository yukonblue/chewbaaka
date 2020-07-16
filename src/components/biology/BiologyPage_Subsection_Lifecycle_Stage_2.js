/**
 * BiologyPage_Subsection_Lifecycle_Stage_2.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 15, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

// import { getElementStyleClassName } from '../../styling/styling'
import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import MediaLinkButton from '../shared/MediaLinkButton'

export default class BiologyPageSubsectionLifecycleStage2 extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Lifecycle_Stage_2";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLifecycleStage2._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className="">
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="">
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}

        <MediaLinkButton
          href="https://www.youtube.com/watch?v=Wjtb7XMZlgY"
          title="Cheetah Mom Teaches Cubs to Hunt | YouTube"
        />
      </div>
    );
  }
}
