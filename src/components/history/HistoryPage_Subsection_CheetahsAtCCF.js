/**
 * HistoryPage_Subsection_CheetahsAtCCF.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_CheetahsAtCCF.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import CircularImage from '../shared/CircularImage'

import MediaLinkButton from '../shared/MediaLinkButton'

export default class HistoryPageCheetahsAtCCFSubsection extends React.Component {

  render() {
    return (
      <div className="HistoryPageCheetahsAtCCFSubsection">
        <ContentPageSubsectionTemplate content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="HistoryPageCheetahsAtCCFSubsectionInnerContainer">
        <div>
          <h3 className="ContentPageSubsectionTitle">Cheetahs at CCF</h3>
        </div>
        <div>
          <h4 className="ContentPageSubsectionSubtitle">Chewbaaka</h4>
          <ContentPageSubsectionTwoColumnContentTemplate
            lhsColumn={{content: this.renderLhsContentChewbaaka()}}
            rhsColumn={{content: this.renderRhsContentChewbaaka()}}
          />
        </div>
        <div>
          <h4 className="ContentPageSubsectionSubtitle">Mekondyo</h4>
          <ContentPageSubsectionTwoColumnContentTemplate
            lhsColumn={{content: this.renderLhsContentMekondyo()}}
            rhsColumn={{content: this.renderRhsContentMekondyo()}}
          />
        </div>
      </div>
    );
  }

  renderLhsContentChewbaaka() {
    return (
      <div className="HistoryPageCheetahAndManImageSubsectionContentTextContainer">
        <p>
          Hi there, my name is Chewbaaka. I was named after an animal
          in a movie. I have lived at CCF since I was 3 weeks old.
          I am there cheetah ambassador and I get to meet many people.
          The staff at CCF tell everyone about me and all the wild
          cheetah. I have a special place where I can run like the wind.
        </p>
        <div>
          <MediaLinkButton href="https://www.youtube.com/watch?v=WYjeEG06cjc" title='Watch "Walking with Chewbaaka" on YouTube' />
        </div>
      </div>
    );
  }

  renderRhsContentChewbaaka() {
    return (
      <div className="HistoryPageCheetahsAtCCFSubsectionImageContainer">
        <CircularImage image="https://sotinpc.files.wordpress.com/2013/04/day-of-rememberance.jpg" title="Chewbaaka" />
      </div>
    );
  }

  renderLhsContentMekondyo() {
    return (
      <div className="HistoryPageCheetahsAtCCFSubsectionImageContainer">
        <CircularImage image="https://globalgaz.com/wp-content/uploads/2018/07/DSC03746.jpg" title="Mekondyo" />
      </div>
    );
  }

  renderRhsContentMekondyo() {
    return (
      <div className="HistoryPageCheetahAndManImageSubsectionContentTextContainer">
        <p>
          Hello, my name is Mekondyo. Mekondyo means "struggle" in the
          Oshiwambo language. I was born on a farm northof Otjiwarango
          but I now live on farmland west of Otjiwarango. It is very
          beautiful. I can see the Waterberg Plateau far away.
          I am 5 years old now and I will tell you my story as you
          explore this museum.
        </p>
      </div>
    );
  }
}
