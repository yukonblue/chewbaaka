/**
 * BiologyPage_Section_Lifecycle.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 15, 2020
 */

import React from 'react';

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate';

// import FuturePageSubsectionCheetahsAtCCF from './FuturePage_Subsection_CheetahsAtCCF'

export default class BiologyPageSectionLifecyle extends React.Component {

  static _SECTION_NAME_ = "section_Lifecycle";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[BiologyPageSectionLifecyle._SECTION_NAME_]
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
