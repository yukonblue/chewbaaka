/**
 * HistoryPage_Subsection_Namibia.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import { Statistic, Segment } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css";

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_Namibia.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'

import ImageView from '../shared/ImageView'

import MediaLinkButton from '../shared/MediaLinkButton'

export default class HistoryPageSubsectionNamibia extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Namibia";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionNamibia._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className="HistoryPageSubsectionNamibiaOuterContainer">
        <ContentPageSubsectionTemplate title={this.state.subsectionConfig.title} content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="HistoryPageSubsectionNamibiaInnerContainer">
        <div>
          <ContentPageSubsectionThreeColumnContentTemplate
            lhsColumn={{
              title: this.state.subsectionConfig.contents["paragraph_Cheetah_Capital_Of_The_World"].title,
              subtitle: this.state.subsectionConfig.contents["paragraph_Cheetah_Capital_Of_The_World"].subtitle,
              content: this.renderLhsColumnContent()
            }}
            middleColumn={{content: this.renderMiddleColumnContent()}}
            rhsColumn={{
              title: this.state.subsectionConfig.contents["paragraph_Namibia_Home_For_The_Future"].title,
              subtitle: this.state.subsectionConfig.contents["paragraph_Namibia_Home_For_The_Future"].subtitle,
              content: this.renderRhsColumnContent()
            }}
          />
        </div>
      </div>
    );
  }

  renderLhsColumnContent() {
    return (
      <div>
        <p>
          {this.state.subsectionConfig.contents["paragraph_Cheetah_Capital_Of_The_World"].content}
        </p>

        <div className="DisplayInlineBlock">
          <Segment inverted>
            <Statistic inverted size="huge" color="orange">
              <Statistic.Value>21%</Statistic.Value>
              <Statistic.Label>
                of the world's wild cheetahs live in Namibia.
              </Statistic.Label>
            </Statistic>
          </Segment>
        </div>
      </div>
    );
  }

  renderMiddleColumnContent() {
    return (
      <div>
        <ImageView
          width={640}
          height={640}
          image="https://dfzljdn9uc3pi.cloudfront.net/2015/1346/1/Suppl_Inf_5_cheetah_occurrence_and_suitable_PA.png"
          caption="Cheetah ranges in Namibia (Cheetahs (Acinonyx jubatus) running the gauntlet: an evaluation of translocations into free-range environments in Namibia)"
        />

        <MediaLinkButton
          href="https://peerj.com/articles/1346/"
          title='Cheetahs (Acinonyx jubatus) running the gauntlet: an evaluation of translocations into free-range environments in Namibia'
          icon="file alternate outline"
        />
      </div>
    );
  }

  renderRhsColumnContent() {
    return (
      <div>
        <p>
          {this.state.subsectionConfig.contents["paragraph_Namibia_Home_For_The_Future"].content}
        </p>

        <div className="DisplayInlineBlock">
          <Segment inverted>
            <Statistic inverted size="huge" color="yellow">
              <Statistic.Value>90%</Statistic.Value>
              <Statistic.Label>
                of Namibia's cheetahs live on communal and commercial livestock and game farms.
              </Statistic.Label>
            </Statistic>
          </Segment>
        </div>
      </div>
    );
  }
}
