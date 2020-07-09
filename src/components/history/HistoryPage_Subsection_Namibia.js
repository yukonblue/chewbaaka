/**
 * HistoryPage_Subsection_Namibia.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 09, 2020
 */

import React from 'react';

import { Statistic, Segment } from 'semantic-ui-react'

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_Namibia.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import ImageView from '../shared/ImageView'

import MediaLinkButton from '../shared/MediaLinkButton'

export default class HistoryPageNamibiaSubsection extends React.Component {

  render() {
    return (
      <div className="HistoryPageNamibiaSubsectionOuterContainer">
        <ContentPageSubsectionTemplate content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="HistoryPageNamibiaSubsectionInnerContainer">
        <div>
          <h3 className="ContentPageSubsectionTitle">Namibia - Cheetah Capital of the World</h3>
        </div>
        <div>
          <ContentPageSubsectionTwoColumnContentTemplate
            lhsColumn={{content: this.renderLhsColumnContent()}}
            rhsColumn={{content: this.renderRhsColumnContent()}}
          />
        </div>
      </div>
    );
  }

  renderLhsColumnContent() {
    return (
      <div>
        <p>
          {this.props.subsectionConfig.contents["paragraph_01"]}
        </p>

        <Segment inverted>
          <Statistic inverted size="huge" color="orange">
            <Statistic.Value>21%</Statistic.Value>
            <Statistic.Label>of the world's wild cheetahs live in Namibia.</Statistic.Label>
          </Statistic>
        </Segment>

        <Segment inverted>
          <Statistic inverted size="huge" color="yellow">
            <Statistic.Value>90%</Statistic.Value>
            <Statistic.Label>of Namibia's cheetahs live on communal and commercial livestock and game farms.</Statistic.Label>
          </Statistic>
        </Segment>
      </div>
    );
  }

  renderRhsColumnContent() {
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
}
