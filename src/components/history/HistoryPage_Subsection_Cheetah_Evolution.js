/**
 * HistoryPage_Subsection_Cheetah_Evolution.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jun 09, 2022
 */

import React, { Suspense } from 'react'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

// import HistoryPageCheetahEvolutionMap from './HistoryPageCheetahEvolutionMap'

import MediaLinkButton from '../shared/MediaLinkButton'

import LineBreak from '../shared/LineBreak'

import '../shared/ContentPageSharedStyles.css'

const HistoryPageCheetahEvolutionMap = React.lazy(() => import('./HistoryPageCheetahEvolutionMap'));

export default class HistoryPageSubsectionCheetahEvolution extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahEvolution";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionCheetahEvolution._SUBSECTION_NAME_],
      bgColor: props.sectionConfig.bgColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        bgColor={this.state.bgColor}
        content={this.renderContent()}
      />
    );
  }

  renderContent() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          Learn about the evolution and migration of the cheetah.
        </ContentPageSubsectionSubtitle>

        {this.renderCheetahEvolutionMapConditionally()}

        <LineBreak lines={2} />

        <MediaLinkButton
          href="https://www.sciencedaily.com/releases/2015/12/151208204222.htm"
          title='Cheetahs migrated from North America | ScienceDaily'
          icon="file alternate outline"
        />
      </ContentPageSubsectionPart>
    );
  }

  renderCheetahEvolutionMapConditionally() {
    return (
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width >= 720)}
        renderContentHandler={
          () => (
            this.renderCheetahEvolutionMapConditionallyCore()
          )
        }
      />
    );
  }

  renderCheetahEvolutionMapConditionallyCore() {
    return (
      <Suspense fallback={<div></div>}>
        <HistoryPageCheetahEvolutionMap />
      </Suspense>
    );
  }
}
