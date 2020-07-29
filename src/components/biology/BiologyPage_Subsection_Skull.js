/**
 * BiologyPage_Subsection_Skull.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import CheetahSkullDiagram from './CheetahSkullDiagram'

import './BiologyPage_Subsection_Skull.css'

export default class BiologyPageSubsectionSkull extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Skull";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionSkull._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}

        <div className="BiologyPageSubsectionSkullCheetahSkullDiagramContainer">
          <CheetahSkullDiagram />
        </div>
      </div>
    );
  }
}
