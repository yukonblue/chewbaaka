/**
 * FuturePage_Section_OutreachAndEducation.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import FuturePageSubsectionInternshipsAndVolunteering from './FuturePage_Subsection_InternshipsAndVolunteering'

export default class FuturePageSectionOutreachAndEducation extends React.Component {

  static _SECTION_NAME_ = "section_OutreachAndEducation";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[FuturePageSectionOutreachAndEducation._SECTION_NAME_]
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
        <FuturePageSubsectionInternshipsAndVolunteering
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
