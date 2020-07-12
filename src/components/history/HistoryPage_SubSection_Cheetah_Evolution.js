/**
 * HistoryPage_SubSection_Cheetah_Evolution.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jul 11, 2020
 */

import React from 'react';

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import HistoryPageCheetahEvolutionMap from './HistoryPageCheetahEvolutionMap'

import './HistoryPage_SubSection_Cheetah_Evolution.css'

export default class HistoryPageSubsectionCheetahEvolution extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahEvolution";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionCheetahEvolution._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionCheetahEvolutionOuterContainer")}>
        <ContentPageSubsectionTemplate title={this.state.subsectionConfig.title} content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionCheetahEvolutionInnerContainer")}>
        <div>
          Learn about the evolution and migration of the cheetah.
          <HistoryPageCheetahEvolutionMap />
        </div>
      </div>
    );
  }
}
