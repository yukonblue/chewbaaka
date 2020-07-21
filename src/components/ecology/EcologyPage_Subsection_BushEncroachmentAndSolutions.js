/**
 * EcologyPage_Subsection_BushEncroachmentAndSolutions.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

export default class EcologyPageSubsectionBushEncroachmentAndSolutions extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_BushEncroachmentAndSolutions";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionBushEncroachmentAndSolutions._SUBSECTION_NAME_]
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
        TBD something about the bush encroachment and solutions ...
      </div>
    );
  }
}
