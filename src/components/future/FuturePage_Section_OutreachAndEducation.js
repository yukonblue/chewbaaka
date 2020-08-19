/**
 * FuturePage_Section_OutreachAndEducation.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Aug 18, 2020
 */

import React, { Fragment } from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import FuturePageSubsectionFieldResearch from './FuturePage_Subsection_FieldResearch'
import FuturePageSubsectionInternshipsAndVolunteering from './FuturePage_Subsection_InternshipsAndVolunteering'
import FuturePageSubsectionTheRoleOfZoos from './FuturePage_Subsection_TheRoleOfZoos'
import FuturePageSubsectionSchoolsTeachersLearners from './FuturePage_Subsection_SchoolsTeachersLearners'
import FuturePageSubsectionCommunityEvents from './FuturePage_Subsection_CommunityEvents'

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
      <ContentPageSectionTemplate
        sectionConfig={this.state.sectionConfig}
        sectionContent={this.renderContent()}
      />
    );
  }

  renderContent() {
    return (
      <Fragment>
        <FuturePageSubsectionFieldResearch
          sectionConfig={this.state.sectionConfig}
        />

        <FuturePageSubsectionInternshipsAndVolunteering
          sectionConfig={this.state.sectionConfig}
        />

        <FuturePageSubsectionTheRoleOfZoos
          sectionConfig={this.state.sectionConfig}
        />

        <FuturePageSubsectionSchoolsTeachersLearners
          sectionConfig={this.state.sectionConfig}
        />

        <FuturePageSubsectionCommunityEvents
          sectionConfig={this.state.sectionConfig}
        />
      </Fragment>
    );
  }
}
