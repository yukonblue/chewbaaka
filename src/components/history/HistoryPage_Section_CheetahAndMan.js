/**
 * HistoryPage_Section_CheetahAndMan.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate';

import HistoryPageCheetahAndManImageSubsection from './HistoryPage_Subsection_CheetahAndManImage'

const _SECTION_NAME_ = "section_CheetahAndMan";

export default class HistoryPageSectionCheetahAndMan extends React.Component {

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
        <HistoryPageCheetahAndManImageSubsection
          subsectionConfig={this.state.sectionConfig.subsections["subsection_RelationshipsWithMan"]}
        />
      </div>
    );
  }
}
