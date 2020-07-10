/**
 * HistoryPage_Section_Evolution.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate';

import HistoryPageSubsectionFelidaeFamilyTree from './HistoryPage_Subsection_FelidaeFamilyTree'

export default class HistoryPageSectionEvolution extends React.Component {

  static _SECTION_NAME_ = "section_Evolution";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[HistoryPageSectionEvolution._SECTION_NAME_]
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
        <HistoryPageSubsectionFelidaeFamilyTree
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
