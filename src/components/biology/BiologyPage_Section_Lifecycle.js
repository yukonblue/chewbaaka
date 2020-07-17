/**
 * BiologyPage_Section_Lifecycle.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 17, 2020
 */

import React from 'react';

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate';

import BiologyPageLifecycleDiagram from './BiologyPageLifecycleDiagram'
import BiologyPageSubsectionLifecycleStage1 from './BiologyPage_Subsection_Lifecycle_Stage_1'
import BiologyPageSubsectionLifecycleStage2 from './BiologyPage_Subsection_Lifecycle_Stage_2'
import BiologyPageSubsectionLifecycleStage3 from './BiologyPage_Subsection_Lifecycle_Stage_3'
import BiologyPageSubsectionLifecycleStage4 from './BiologyPage_Subsection_Lifecycle_Stage_4'
import BiologyPageSubsectionFindingMate from './BiologyPage_Subsection_FindingMate'
import BiologyPageSubsectionLivingFastDyingYoung from './BiologyPage_Subsection_LivingFastDyingYoung'

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
        <BiologyPageLifecycleDiagram />

        <BiologyPageSubsectionLifecycleStage1
          sectionConfig={this.state.sectionConfig}
        />

        <BiologyPageSubsectionLifecycleStage2
          sectionConfig={this.state.sectionConfig}
        />

        <BiologyPageSubsectionLifecycleStage3
          sectionConfig={this.state.sectionConfig}
        />

        <BiologyPageSubsectionLifecycleStage4
          sectionConfig={this.state.sectionConfig}
        />

        <BiologyPageSubsectionFindingMate
          sectionConfig={this.state.sectionConfig}
        />

        <BiologyPageSubsectionLivingFastDyingYoung
          sectionConfig={this.state.sectionConfig}
        />
      </div>
    );
  }
}
