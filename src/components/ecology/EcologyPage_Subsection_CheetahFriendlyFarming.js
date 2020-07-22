/**
 * EcologyPage_Subsection_CheetahFriendlyFarming.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 21, 2020
 * Updated  : Jul 21, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

export default class EcologyPageSubsectionCheetahFriendlyFarming extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahFriendlyFarming";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionCheetahFriendlyFarming._SUBSECTION_NAME_]
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
      </div>
    );
  }

  renderIntroPartContent(part) {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }
}
