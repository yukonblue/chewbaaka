/**
 * BiologyPage_Subsection_BodyAndBone.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 17, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import CheetahAccelerationIllustration from './CheetahAccelerationIllustration'

import './BiologyPage_Subsection_BodyAndBone.css'

export default class BiologyPageSubsectionBodyAndBone extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_BodyAndBone";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionBodyAndBone._SUBSECTION_NAME_]
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
        TBD something about body and bone ...

        <div className="BiologyPageSubsectionBodyAndBoneCheetahAccelerationIllustrationContainer Centered">
          <CheetahAccelerationIllustration />
        </div>
      </div>
    );
  }
}
