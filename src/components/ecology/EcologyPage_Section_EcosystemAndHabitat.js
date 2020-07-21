/**
 * EcologyPage_Section_EcosystemAndHabitat.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import EcologyPageSubsectionWhereCheetahsLive from './EcologyPage_Subsection_WhereCheetahsLive'
import EcologyPageSubsectionTheCheetahsPrey from './EcologyPage_Subsection_TheCheetahsPrey'
import EcologyPageSubsectionCheetahsRoleInTheEcosystem from './EcologyPage_Subsection_CheetahsRoleInTheEcosystem'

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
        <EcologyPageSubsectionWhereCheetahsLive
          sectionConfig={this.state.sectionConfig}
        />

        <EcologyPageSubsectionTheCheetahsPrey
          sectionConfig={this.state.sectionConfig}
        />

        <EcologyPageSubsectionCheetahsRoleInTheEcosystem
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
