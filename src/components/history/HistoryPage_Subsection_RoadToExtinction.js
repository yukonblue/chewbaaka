/**
 * HistoryPage_Subsection_RoadToExtinction.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import { Statistic, Segment } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css";

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_RoadToExtinction.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'

import { ContentPageSubsectionColumnDataBinderWithParagraphBinder } from '../shared/ContentPageSubsectionColumnDataBinder'

import MediaLinkButton from '../shared/MediaLinkButton'

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
          <Segment inverted>
            <Statistic inverted size="huge" color="orange">
              <Statistic.Value>&lt;7,500</Statistic.Value>
              <Statistic.Label>
                Cheetahs were found in 31 populations in 23 African countries
              </Statistic.Label>
            </Statistic>
          </Segment>
        </div>

        <div className="DisplayInlineBlock">
          <Segment inverted>
            <Statistic inverted size="huge" color="red">
              <Statistic.Value>&lt;50</Statistic.Value>
              <Statistic.Label>
                Asian cheetahs left in Iran
              </Statistic.Label>
            </Statistic>
          </Segment>
        </div>

        <ContentPageSubsectionThreeColumnContentTemplate
          lhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphBinder(
              this.state.subsectionConfig.contents[HistoryPageSubsectionRoadToExtinction._COLUMN_DATA_NAME_LHS_]
            )
          }

          middleColumn={{
            content: "TODO: middle"
          }}

          rhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphBinder(
              this.state.subsectionConfig.contents[HistoryPageSubsectionRoadToExtinction._COLUMN_DATA_NAME_RHS_]
            )
          }
        />

        <MediaLinkButton
          href="https://www.thehindu.com/sci-tech/energy-and-environment/what-drove-the-charismatic-cheetah-to-extinction-in-india/article30295377.ece"
          title='What drove the charismatic cheetah to extinction in India?'
          icon="file alternate outline"
        />
      </div>
    );
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
