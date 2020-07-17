/**
 * BiologyPage_Subsection_Anatomy.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 16, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import CheetahSkeletalAnatomyDiagram from './CheetahSkeletalAnatomyDiagram'

export default class BiologyPageSubsectionAnatomy extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Anatomy";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionAnatomy._SUBSECTION_NAME_]
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
        <CheetahSkeletalAnatomyDiagram />
      </div>
    );
  }
}
