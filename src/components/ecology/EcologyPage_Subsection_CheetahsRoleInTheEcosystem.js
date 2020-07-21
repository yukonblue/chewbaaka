/**
 * EcologyPage_Subsection_CheetahsRoleInTheEcosystem.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

export default class EcologyPageSubsectionCheetahsRoleInTheEcosystem extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahsRoleInTheEcosystem";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionCheetahsRoleInTheEcosystem._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div>
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        TBD something about where cheetah's role in the ecosystem ...
      </div>
    );
  }
}
