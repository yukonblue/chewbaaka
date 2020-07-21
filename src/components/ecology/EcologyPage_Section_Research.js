/**
 * EcologyPage_Section_Research.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import EcologyPageSubsectionUnderstandingAnimalMovement from './EcologyPage_Subsection_UnderstandingAnimalMovement'

export default class EcologyPageSectionResearch extends React.Component {

  static _SECTION_NAME_ = "section_Research";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[EcologyPageSectionResearch._SECTION_NAME_]
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
        <EcologyPageSubsectionUnderstandingAnimalMovement
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
