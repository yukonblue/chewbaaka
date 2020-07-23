/**
 * FuturePage_Section_Conservation.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import FuturePageSubsectionWhatIsConservation from './FuturePage_Subsection_WhatIsConservation'
import FuturePageSubsectionCheetahAmbassadors from './FuturePage_Subsection_CheetahAmbassadors'

export default class FuturePageSectionConservation extends React.Component {

  static _SECTION_NAME_ = "section_Conservation";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[FuturePageSectionConservation._SECTION_NAME_]
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
        <FuturePageSubsectionWhatIsConservation
          sectionConfig={this.state.sectionConfig}
        />

        <FuturePageSubsectionCheetahAmbassadors
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
