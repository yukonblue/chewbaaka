/**
 * EcologyPage_Section_Ecomanagement.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import EcologyPageSubsectionHuntingAndPredatorControl from './EcologyPage_Subsection_HuntingAndPredatorControl'
import EcologyPageSubsectionTheFarmingCommunity from './EcologyPage_Subsection_TheFarmingCommunity'
import EcologyPageSubsectionCheetahFriendlyFarming from './EcologyPage_Subsection_CheetahFriendlyFarming'
import EcologyPageSubsectionBushEncroachmentAndSolutions from './EcologyPage_Subsection_BushEncroachmentAndSolutions'

export default class EcologyPageSectionEcomanagement extends React.Component {

  static _SECTION_NAME_ = "section_Ecomanagement";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[EcologyPageSectionEcomanagement._SECTION_NAME_]
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
      <div>
        <EcologyPageSubsectionHuntingAndPredatorControl
          sectionConfig={this.state.sectionConfig}
        />

        <EcologyPageSubsectionTheFarmingCommunity
          sectionConfig={this.state.sectionConfig}
        />

        <EcologyPageSubsectionCheetahFriendlyFarming
          sectionConfig={this.state.sectionConfig}
        />

        <EcologyPageSubsectionBushEncroachmentAndSolutions
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
