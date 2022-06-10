/**
 * BiologyPage_Subsection_Lifecycle_Stage_4.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

export default class BiologyPageSubsectionLifecycleStage4 extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Lifecycle_Stage_4";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLifecycleStage4._SUBSECTION_NAME_],
      accentColor: props.sectionConfig.accentColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        accentColor={this.state.accentColor}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
      </div>
    );
  }
}
