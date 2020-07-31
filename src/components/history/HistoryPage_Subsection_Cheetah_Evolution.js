/**
 * HistoryPage_Subsection_Cheetah_Evolution.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import HistoryPageCheetahEvolutionMap from './HistoryPageCheetahEvolutionMap'

import MediaLinkButton from '../shared/MediaLinkButton'

import LineBreak from '../shared/LineBreak'

import './HistoryPage_Subsection_Cheetah_Evolution.css'

import '../shared/ContentPageSharedStyles.css'

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
        <ContentPageSubsectionPart>
          <ContentPageSubsectionSubtitle>
            Learn about the evolution and migration of the cheetah.
          </ContentPageSubsectionSubtitle>

          <HistoryPageCheetahEvolutionMap />

          <LineBreak lines={2} />

          <MediaLinkButton
            href="https://www.sciencedaily.com/releases/2015/12/151208204222.htm"
            title='Cheetahs migrated from North America | ScienceDaily'
            icon="file alternate outline"
          />
        </ContentPageSubsectionPart>
      </div>
    );
  }
}
