/**
 * HistoryPage_Subsection_CheetahsInArt.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import FlexibleContainer from '../shared/FlexibleContainer'

export default class HistoryPageSubsectionCheetahsInArt extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahsInArt";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionCheetahsInArt._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionCheetahsInArtOuterContainer")}>
        <ContentPageSubsectionTemplate title={this.state.subsectionConfig.title} content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        <FlexibleContainer>
          <p>{this.state.subsectionConfig.contents["paragraph_Cheetah_In_Art_01"]}</p>
          <p>{this.state.subsectionConfig.contents["paragraph_Cheetah_In_Art_02"]}</p>
          <p>{this.state.subsectionConfig.contents["paragraph_Cheetah_In_Art_03"]}</p>
          <p>{this.state.subsectionConfig.contents["paragraph_Cheetah_In_Art_04"]}</p>
        </FlexibleContainer>
      </div>
    );
  }
}
