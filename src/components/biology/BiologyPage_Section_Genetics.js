/**
 * BiologyPage_Section_Genetics.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 18, 2020
 * Updated  : Aug 18, 2020
 */

import React, { Fragment } from 'react'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import BiologyPageSubsectionGeneticConfusion from './BiologyPage_Subsection_GeneticConfusion'
import BiologyPageSubsectionAbnormalities from './BiologyPage_Subsection_Abnormalities'

export default class BiologyPageSectionGenetics extends React.Component {

  static _SECTION_NAME_ = "section_Genetics";

  constructor(props) {
    super(props);
    this.state = {
      sectionConfig: props.config.contentPageSections[BiologyPageSectionGenetics._SECTION_NAME_]
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
        <BiologyPageSubsectionGeneticConfusion
          sectionConfig={this.state.sectionConfig}
        />

        <BiologyPageSubsectionAbnormalities
          sectionConfig={this.state.sectionConfig}
        />
      </Fragment>
    );
  }
}
