/**
 * HistoryPage_Section_Evolution.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Jul 11, 2020
 */

import React from 'react';

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate';

import HistoryPageSubsectionFelidaeFamilyTree from './HistoryPage_Subsection_FelidaeFamilyTree'
import HistoryPageSubsectionCheetahEvolution from './HistoryPage_SubSection_Cheetah_Evolution'

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

        <HistoryPageSubsectionCheetahEvolution
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
