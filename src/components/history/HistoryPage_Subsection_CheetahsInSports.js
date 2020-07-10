/**
 * HistoryPage_Subsection_CheetahsInSports.js
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

export default class HistoryPageSubsectionCheetahsInSports extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahsInSports";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionCheetahsInSports._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionCheetahsInSportsOuterContainer")}>
        <ContentPageSubsectionTemplate title={this.state.subsectionConfig.title} content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        <FlexibleContainer>
          <p>{this.state.subsectionConfig.contents["paragraph_The_Hunting_Leopard_01"]}</p>
          <p>{this.state.subsectionConfig.contents["paragraph_The_Hunting_Leopard_02"]}</p>
          <p>{this.state.subsectionConfig.contents["paragraph_The_Hunting_Leopard_03"]}</p>
          <p>{this.state.subsectionConfig.contents["paragraph_The_Hunting_Leopard_04"]}</p>
          <p>{this.state.subsectionConfig.contents["paragraph_The_Hunting_Leopard_05"]}</p>
        </FlexibleContainer>
      </div>
    );
  }
}
