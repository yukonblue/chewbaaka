/**
 * BiologyPage_Subsection_Skull.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jun 10, 2022
 */

import React, { Suspense } from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

// import CheetahSkullDiagram from './CheetahSkullDiagram'

import './BiologyPage_Subsection_Skull.css'

const CheetahSkullDiagram = React.lazy(() => import('./CheetahSkullDiagram'));

export default class BiologyPageSubsectionSkull extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Skull";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionSkull._SUBSECTION_NAME_],
      accentColor: props.sectionConfig.accentColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        accentColor={this.state.accentColor}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
        {this.renderCheetahSkulDiagramConditionally()}
      </div>
    );
  }

  renderCheetahSkulDiagramConditionally() {
    return (
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width >= 900)}
        renderContentHandler={this.renderCheetahSkulDiagram}
      />
    );
  }

  renderCheetahSkulDiagram() {
    return (
      <Suspense fallback={<div></div>}>
        <div className="BiologyPageSubsectionSkullCheetahSkullDiagramContainer">
          <CheetahSkullDiagram />
        </div>
      </Suspense>
    );
  }
}
