/**
 * HistoryPage_Section_CheetahAndMan.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate';

import HistoryPageSubsectionCheetahAndManImage from './HistoryPage_Subsection_CheetahAndManImage'
import HistoryPageSubsectionCheetahsInSports from './HistoryPage_Subsection_CheetahsInSports'
import HistoryPageSubsectionCheetahsInArt from './HistoryPage_Subsection_CheetahsInArt'

export default class HistoryPageSectionCheetahAndMan extends React.Component {

  static _SECTION_NAME_ = "section_CheetahAndMan";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[HistoryPageSectionCheetahAndMan._SECTION_NAME_]
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
        <HistoryPageSubsectionCheetahAndManImage
          sectionConfig={this.state.sectionConfig}
        />

        <HistoryPageSubsectionCheetahsInSports
          sectionConfig={this.state.sectionConfig}
        />

        <HistoryPageSubsectionCheetahsInArt
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
