/**
 * BiologyPage_Subsection_Anatomy.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Aug 08, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

import CheetahSkeletalAnatomyDiagram from './CheetahSkeletalAnatomyDiagram'

import './BiologyPage_Subsection_Anatomy.css'

export default class BiologyPageSubsectionAnatomy extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Anatomy";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionAnatomy._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        content={this.renderContent()}
      />
    );
  }

  renderContent() {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
        {this.renderCheetahAnatomyDiagramConditionally()}
      </div>
    );
  }

  renderCheetahAnatomyDiagramConditionally() {
    return (
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width >= 960)}
        renderContentHandler={this.renderCheetahAnatomyDiagram}
      />
    );
  }

  renderCheetahAnatomyDiagram() {
    return (
      <div className="BiologyPageSubsectionAnatomyCheetahSkeletalAnatomyDiagramContainer">
        <CheetahSkeletalAnatomyDiagram />
      </div>
    );
  }
}
