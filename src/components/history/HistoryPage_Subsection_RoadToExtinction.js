/**
 * HistoryPage_Subsection_RoadToExtinction.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react';

import { Statistic, Segment } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css";

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_RoadToExtinction.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'

import HistoryPageCheetahPopulationIllustration from './HistoryPageCheetahPopulationIllustration'

import { ContentPageSubsectionColumnDataBinderWithParagraphBinder } from '../shared/ContentPageSubsectionColumnDataBinder'

import { getElementStyleClassName } from '../../styling/styling'

import ImageSlideModal from '../shared/ImageSlideModal'

import LineBreak from '../shared/LineBreak'

import MediaLinkButton from '../shared/MediaLinkButton'

import cheetah_range_map_01 from './assets/cheetah-range-map-01.png'
import cheetah_range_map_02 from './assets/cheetah-range-map-02.png'

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
      <div className="HistoryPageSubsectionRoadToExtinctionOuterContainer">
        <ContentPageSubsectionTemplate title={this.state.subsectionConfig.title} content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="HistoryPageSubsectionRoadToExtinctionInnerContainer">
        <div className="DisplayInlineBlock">
          
        </div>

        <div className="DisplayInlineBlock">
          
        </div>

        <ContentPageSubsectionThreeColumnContentTemplate
          lhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphBinder(
              this.state.subsectionConfig.contents[HistoryPageSubsectionRoadToExtinction._COLUMN_DATA_NAME_LHS_]
            )
          }

          middleColumn={{
            content: this.renderMiddleColumnContent()
          }}

          rhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphBinder(
              this.state.subsectionConfig.contents[HistoryPageSubsectionRoadToExtinction._COLUMN_DATA_NAME_RHS_]
            )
          }
        />

        {/* <MediaLinkButton
          href="https://www.thehindu.com/sci-tech/energy-and-environment/what-drove-the-charismatic-cheetah-to-extinction-in-india/article30295377.ece"
          title='What drove the charismatic cheetah to extinction in India?'
          icon="file alternate outline"
        /> */}

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
                      "Asian cheetahs left in Iran",
                      "red")
          }}
        />

        <LineBreak lines={2} />

        <MediaLinkButton
          href="https://www.nationalgeographic.com/news/2016/12/cheetahs-extinction-endangered-africa-iucn-animals-science/"
          title='Cheetahs Are Dangerously Close to Extinction | National Geographic'
          icon="file alternate outline"
        />
      </div>
    );
  }

  renderStatsBoxHugeWithColor(value, label, color) {
    return (
      <div className="CenteredBlowoutBox HistoryPageSubsectionRoadToExtinctionStatsBox">
        <Segment inverted>
          <Statistic inverted size="huge" color={color}>
            <Statistic.Value>{value}</Statistic.Value>
            <Statistic.Label>
              {label}
            </Statistic.Label>
          </Statistic>
        </Segment>
      </div>
    );
  }

  renderMiddleColumnContent() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionRoadToExtinctionMiddleColumnContentOuterContainer")}>
        <div className={getElementStyleClassName("HistoryPageSubsectionRoadToExtinctionMiddleColumnContentImageSlideModalContainer")}>
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
                description: "Some ranges left have very small population left."
              }
            ]}
          />
          <p className={getElementStyleClassName("ContentPageCaptionTextSize")}>
            Click on the map above to learn more.
          </p>
        </div>

        <div className={getElementStyleClassName("HistoryPageSubsectionRoadToExtinctionMiddleColumnContentCheetahPopulationIllustrationContainer")}>
          <HistoryPageCheetahPopulationIllustration />
        </div>
      </div>
    )
  }

  renderSideColumnContent(content) {
    return (
      <div>
        <div>
          {content}
        </div>
      </div>
    )
  }
}
