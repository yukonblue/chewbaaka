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
            content: this.renderLhsColumnContent()
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
    return this.renderSideColumnContent(
      <div>
        <h3>1990</h3>
        <p>{this.state.subsectionConfig.contents["paragraph_The_Road_To_Extinction_01"]}</p>
        <p>{this.state.subsectionConfig.contents["paragraph_The_Road_To_Extinction_02"]}</p>
        <p>{this.state.subsectionConfig.contents["paragraph_The_Road_To_Extinction_03"]}</p>
        <p>{this.state.subsectionConfig.contents["paragraph_The_Road_To_Extinction_04"]}</p>
      </div>
    );
  }

  renderRhsColumnContent() {
    return this.renderSideColumnContent(
      <div>
        <h3>1975</h3>
        <p>{this.state.subsectionConfig.contents["paragraph_Where_Did_The_Cheetah_Go_01"]}</p>
        <p>{this.state.subsectionConfig.contents["paragraph_Where_Did_The_Cheetah_Go_02"]}</p>
        <p>{this.state.subsectionConfig.contents["paragraph_Where_Did_The_Cheetah_Go_03"]}</p>
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
