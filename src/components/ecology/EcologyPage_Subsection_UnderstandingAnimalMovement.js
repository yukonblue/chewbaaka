/**
 * EcologyPage_Subsection_UnderstandingAnimalMovement.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

export default class EcologyPageSubsectionUnderstandingAnimalMovement extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_UnderstandingAnimalMovement";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionUnderstandingAnimalMovement._SUBSECTION_NAME_]
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
        TBD something about understanding animal movement ...
      </div>
    );
  }
}
