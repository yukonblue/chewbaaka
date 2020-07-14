/**
 * HistoryPage_Subsection_FelidaeFamilyTree.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 12, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_FelidaeFamilyTree.css'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import HintSignpost from '../shared/HintSignpost'

import FelidaeFamilyTree from './FelidaeFamilyTree'

export default class HistoryPageSubsectionFelidaeFamilyTree extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_EvolutionOfCats";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionFelidaeFamilyTree._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionFelidaeFamilyTreeOuterContainer")}>
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionFelidaeFamilyTreeInnerContainer")}>
        <HintSignpost
          hintText="Hover over images below to reveal the genera in the Felidae family"
          iconName="arrow circle down"
        />
        <div className={getElementStyleClassName("HistoryPageSubsectionFelidaeFamilyTreeCore")}>
          <FelidaeFamilyTree />
        </div>
      </div>
    );
  }
}
