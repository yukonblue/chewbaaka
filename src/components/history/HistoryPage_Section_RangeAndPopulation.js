/**
 * HistoryPage_Section_RangeAndPopulation.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate';

import HistoryPageNamibiaSubsection from './HistoryPage_Subsection_Namibia'

export default class HistoryPageSectionRangeAndPopulation extends React.Component {

  static _SECTION_NAME_ = "section_PopulationAndRange";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[HistoryPageSectionRangeAndPopulation._SECTION_NAME_]
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
        <HistoryPageNamibiaSubsection
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
