/**
 * FuturePage_Section_CheetahAmbassadors.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react';

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate';

import FuturePageSubsectionCheetahsAtCCF from './FuturePage_Subsection_CheetahsAtCCF'

export default class FuturePageSectionCheetahAmbassadors extends React.Component {

  static _SECTION_NAME_ = "section_CheetahAmbassadors";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[FuturePageSectionCheetahAmbassadors._SECTION_NAME_]
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
        <FuturePageSubsectionCheetahsAtCCF
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
