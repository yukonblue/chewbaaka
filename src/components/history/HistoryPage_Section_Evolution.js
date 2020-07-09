/**
 * HistoryPage_Section_Evolution.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate';

import HistoryPageFelidaeFamilyTreeSubsection from './HistoryPage_Subsection_FelidaeFamilyTree'

const _SECTION_NAME_ = "section_Evolution";

export default class HistoryPageSectionEvolution extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[_SECTION_NAME_]
    };
  }

  render() {
    return (
      <div>
        <ContentPageSectionTemplate sectionConfig={this.state.sectionConfig} sectionContent={this.renderContent()} />
      </div>
    );
  }

  renderContent() {
    return (
      <div>
        <HistoryPageFelidaeFamilyTreeSubsection />
      </div>
    );
  }
}
