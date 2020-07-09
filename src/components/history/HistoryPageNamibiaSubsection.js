/**
 * HistoryPageNamibiaSubsection.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'
import './HistoryPageNamibiaSubsection.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

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
          <p>
            {this.props.subsectionConfig.contents["paragraph_01"]}
          </p>
          <p>
            21% of the world's wild cheetahs live in Namibia.
          </p>
          <p>
            90% of Namibia's cheetahs live on communal and commercial
            livestock and game farms.
          </p>

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
      </div>
    );
  }
}
