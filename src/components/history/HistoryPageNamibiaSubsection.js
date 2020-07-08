/**
 * HistoryPageNamibiaSubsection.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'
import './HistoryPageNamibiaSubsection.css'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import ImageView from '../shared/ImageView'

import MediaLinkButton from '../shared/MediaLinkButton'

export default class HistoryPageNamibiaSubsection extends React.Component {

  render() {
    return (
      <div className="HistoryPageNamibiaSubsectionOuterContainer">
        <ContentPageSectionTemplate content={this.renderContent()} />
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
            Namibia has the world's largest cheetah population.
            Approximately 3000 cheetahs share the land with humans,
            livestock, and wildlife.

            Today, the status of the Namibian cheetah is stabilizing.
            During the 1980s, the population of Namibina cheetahs
            declined by half. In the 10-year period, nearly
            7,000 cheetahs were removed from the wild.

            In most countries where cheetahs live, their numbers
            have been reduced to critical levels. The cheetah's
            survival worldwide is in human hands.
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
