/**
 * BiologyPage_Subsection_GeneticConfusion.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 18, 2020
 * Updated  : Jul 18, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

export default class BiologyPageSubsectionGeneticConfusion extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Genetic_Confusion";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionGeneticConfusion._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className="">
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        TBD ... something about Genetic Confusion
      </div>
    );
  }
}
