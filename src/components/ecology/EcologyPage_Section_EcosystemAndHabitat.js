/**
 * EcologyPage_Section_EcosystemAndHabitat.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 19, 2020
 */

import React from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

export default class EcologyPageSectionEcosystemAndHabitat extends React.Component {

  static _SECTION_NAME_ = "section_EcosystemAndHabitat";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[EcologyPageSectionEcosystemAndHabitat._SECTION_NAME_]
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
      </div>
    );
  }
}
