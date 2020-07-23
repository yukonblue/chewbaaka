/**
 * FuturePage_Section_SustainableDevelopment.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import FuturePageSubsectionMissionPossible from './FuturePage_Subsection_MissionPossible'
import FuturePageSubsectionFutureFarmersOfAfrica from './FuturePage_Subsection_FutureFarmersOfAfrica'

export default class FuturePageSectionSustainableDevelopment extends React.Component {

  static _SECTION_NAME_ = "section_SustainableDevelopment";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[FuturePageSectionSustainableDevelopment._SECTION_NAME_]
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
        <FuturePageSubsectionMissionPossible
          sectionConfig={this.state.sectionConfig}
        />

        <FuturePageSubsectionFutureFarmersOfAfrica
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
