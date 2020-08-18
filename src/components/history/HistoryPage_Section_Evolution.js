/**
 * HistoryPage_Section_Evolution.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Aug 18, 2020
 */

import React, { Fragment } from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import HistoryPageSubsectionFelidaeFamilyTree from './HistoryPage_Subsection_FelidaeFamilyTree'
import HistoryPageSubsectionCheetahEvolution from './HistoryPage_Subsection_Cheetah_Evolution'

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
      <ContentPageSectionTemplate
        sectionConfig={this.state.sectionConfig}
        sectionContent={this.renderContent()}
      />
    );
  }

  renderContent() {
    return (
      <Fragment>
        <HistoryPageSubsectionFelidaeFamilyTree
          sectionConfig={this.state.sectionConfig}
        />

        <HistoryPageSubsectionCheetahEvolution
          sectionConfig={this.state.sectionConfig}
        />
      </Fragment>
    );
  }
}
