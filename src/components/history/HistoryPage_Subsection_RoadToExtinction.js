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

export default class HistoryPageRoadSubsectionToExtinction extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_RoadToExtinction";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageRoadSubsectionToExtinction._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className="HistoryPageRoadSubsectionToExtinctionOuterContainer">
        <ContentPageSubsectionTemplate title={this.state.subsectionConfig.title} content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="HistoryPageRoadSubsectionToExtinctionInnerContainer">
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
      </div>
    );
  }
}
