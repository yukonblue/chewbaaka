/**
 * HistoryPage_Subsection_RoadToExtinction.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Aug 12, 2020
 */

import React from 'react'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import HistoryPageCheetahPopulationIllustration from './HistoryPageCheetahPopulationIllustration'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import ImageSlideModal from '../shared/ImageSlideModal'

import LineBreak from '../shared/LineBreak'

import MediaLinkButton from '../shared/MediaLinkButton'

import StatsLabel from '../shared/StatsLabel'

import image_Cheetah_Evolution_and_Extinction_Scale from './assets/Cheetah_Evolution_and_Extinction_Scale-min.png'

import cheetah_range_map_01 from './assets/cheetah-range-map-01-min.png'
import cheetah_range_map_02 from './assets/cheetah-range-map-02-min.png'

import '../shared/ContentPageSharedStyles.css'

export default class HistoryPageSubsectionRoadToExtinction extends React.Component {

  static _SUBSECTION_NAME_        =   "subsection_RoadToExtinction";
  static _COLUMN_DATA_NAME_LHS_   =   "The_Road_To_Extinction";
  static _COLUMN_DATA_NAME_RHS_   =   "Where_Did_The_Cheetah_Go";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionRoadToExtinction._SUBSECTION_NAME_]
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
        {this.renderCheetahEvolutionAndExtinctionScaleImage()}
        {this.renderThreeColumnPart()}
        {this.renderCheetahRangeMapPart()}
        {this.renderStatisticsPart()}
      </div>
    );
  }

  renderCheetahEvolutionAndExtinctionScaleImage() {
    return (
      <CenteredFullWidthContainer width={1200}>
        <FluidImageWrapper
          src={image_Cheetah_Evolution_and_Extinction_Scale}
          alt="Cheetah evolution and extinction"
        />
      </CenteredFullWidthContainer>
    );
  }

  renderCheetahRangeMapPart() {
    return (
      <CenteredFullWidthContainer width={480}>
        <ImageSlideModal
          slides={[
            {
              image: cheetah_range_map_01,
              title: "Cheetah Range by Subspecies",
              description: "Ranges with highest populations are in southern and eastern Africa. The Asiatic cheetahs are left only in the Persian Gulf."
            },
            {
              image: cheetah_range_map_02,
              title: "Cheetah Range Population Breakdown",
              description: "Cheetahs were driven out of over 90% of its historic range, and a number of parts of its current range have very small populations left."
            }
          ]}
          caption="Click on the map above see the cheetah's range."
        />
      </CenteredFullWidthContainer>
    );
  }

  renderStatsBoxHugeWithColor(value, label, color) {
    return (
      <StatsLabel
        value={value}
        label={label}
        color={color}
      />
    );
  }

  renderMiddleColumnContent() {
    return (
      <div className="VerticalCushionPadding">
        <HistoryPageCheetahPopulationIllustration />
      </div>
    );
  }

  renderThreeColumnPart() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionThreeColumnContentTemplate
          lhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(
              this.state.subsectionConfig.contents[HistoryPageSubsectionRoadToExtinction._COLUMN_DATA_NAME_LHS_]
            )
          }

          middleColumn={{
            content: this.renderMiddleColumnContent()
          }}

          rhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(
              this.state.subsectionConfig.contents[HistoryPageSubsectionRoadToExtinction._COLUMN_DATA_NAME_RHS_]
            )
          }
        />
      </ContentPageSubsectionPart>
    );
  }

  renderStatisticsPart() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{
            content: this.renderStatsBoxHugeWithColor(
                      "< 7,500",
                      "Cheetahs were found in 31 populations in 23 African countries",
                      "orange")
          }}
          rhsColumn={{
            content: this.renderStatsBoxHugeWithColor(
                      "< 50",
                      "Asiatic cheetahs left in Iran",
                      "red")
          }}
        />

        <LineBreak lines={2} />

        <MediaLinkButton
          href="https://www.nationalgeographic.com/news/2016/12/cheetahs-extinction-endangered-africa-iucn-animals-science/"
          title='Cheetahs Are Dangerously Close to Extinction | National Geographic'
          icon="file alternate outline"
        />
      </ContentPageSubsectionPart>
    );
  }
}
