/**
 * FuturePage_Subsection_StoppingIllegalWildlifeTrades.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

export default class FuturePageSubsectionStoppingIllegalWildlifeTrades extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_StoppingIllegalWildlifeTrades";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionStoppingIllegalWildlifeTrades._SUBSECTION_NAME_]
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
