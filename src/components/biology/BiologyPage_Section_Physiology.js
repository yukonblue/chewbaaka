/**
 * BiologyPage_Section_Physiology.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 16, 2020
 */

import React from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import BiologyPageSubsectionAnatomy from './BiologyPage_Subsection_Anatomy'
import BiologyPageSubsectionSkull from './BiologyPage_Subsection_Skull'
import BiologyPageSubsectionFeetAndClaws from './BiologyPage_Subsection_FeetAndClaws'
import BiologyPageSubsectionHearAndLung from './BiologyPage_Subsection_HeartAndLung'
import BiologyPageSubsectionBodyAndBone from './BiologyPage_Subsection_BodyAndBone'

export default class BiologyPageSectionPhysiology extends React.Component {

  static _SECTION_NAME_ = "section_Physiology";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[BiologyPageSectionPhysiology._SECTION_NAME_]
    };
  }

  render() {
    return (
      <div>
        <ContentPageSectionTemplate
          sectionConfig={this.state.sectionConfig}
          sectionContent={this.renderContent()}
        />
      </div>
    );
  }

  renderContent() {
    return (
      <div>
        <BiologyPageSubsectionAnatomy
          sectionConfig={this.state.sectionConfig}
        />

        <BiologyPageSubsectionSkull
          sectionConfig={this.state.sectionConfig}
        />

        <BiologyPageSubsectionFeetAndClaws
          sectionConfig={this.state.sectionConfig}
        />

        <BiologyPageSubsectionHearAndLung
          sectionConfig={this.state.sectionConfig}
        />

        <BiologyPageSubsectionBodyAndBone
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}