/**
 * FuturePage_Subsection_FieldResearch.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

export default class FuturePageSubsectionFieldResearch extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_FieldResearch";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionFieldResearch._SUBSECTION_NAME_]
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
        TBD ...
      </div>
    );
  }
}
