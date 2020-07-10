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

export default class HistoryPageSubsectionRoadToExtinction extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_RoadToExtinction";

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
                Cheetahs were found in 31 populations in 23 African countries.
              </Statistic.Label>
            </Statistic>
          </Segment>
        </div>

        <div className="DisplayInlineBlock">
          <Segment inverted>
            <Statistic inverted size="huge" color="red">
              <Statistic.Value>&lt;50</Statistic.Value>
              <Statistic.Label>
                Asian cheetahs left in Iran.
              </Statistic.Label>
            </Statistic>
          </Segment>
        </div>

        <ContentPageSubsectionThreeColumnContentTemplate
          lhsColumn={{
            title: "The Road to Extinction?",
            content: this.renderRhsColumnContent()
          }}
          middleColumn={{
            content: "middle"
          }}
          rhsColumn={{
            title: "Where Did the Cheetah Go?",
            content: this.renderRhsColumnContent()
          }}
        />
      </div>
    );
  }

  renderLhsColumnContent() {
    return this.renderSideColumnContent(this.state.subsectionConfig.contents["paragraph_The_Road_To_Extinction"]);
  }

  renderRhsColumnContent() {
    return this.renderSideColumnContent(this.state.subsectionConfig.contents["paragraph_Where_Did_The_Cheetah_Go"]);
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
