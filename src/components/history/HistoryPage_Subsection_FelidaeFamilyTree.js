/**
 * HistoryPage_Subsection_FelidaeFamilyTree.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_FelidaeFamilyTree.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import HintSignpost from '../shared/HintSignpost'

import FelidaeFamilyTree from './FelidaeFamilyTree'

export default class HistoryPageFelidaeFamilyTreeSubsection extends React.Component {

  render() {
    return (
      <div className="HistoryPageFelidaeFamilyTreeSubsectionOuterContainer">
        <ContentPageSubsectionTemplate content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="HistoryPageFelidaeFamilyTreeSubsectionInnerContainer">
        <div>
          <h3 className="ContentPageSubsectionTitle">Evolution Tree of Cats</h3>
        </div>
        <div className="HistoryPageFelidaeFamilyTreeSubsectionCore">
          <HintSignpost hintText="Hover over images below to reveal the genres" iconName="arrow circle down" />
          <FelidaeFamilyTree />
        </div>
      </div>
    );
  }
}