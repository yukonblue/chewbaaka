/**
 * FuturePage_Subsection_CheetahsAtCCF.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'
import './FuturePage_Subsection_CheetahsAtCCF.css'

import { getElementStyleClassName } from '../../styling/styling'
import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import CircularImage from '../shared/CircularImage'

import MediaLinkButton from '../shared/MediaLinkButton'

export default class FuturePageSubsectionCheetahsAtCCF extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahsAtCCF";

  constructor(props) {
    console.log(props.sectionConfig);
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionCheetahsAtCCF._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className="FuturePageSubsectionCheetahsAtCCF">
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="FuturePageSubsectionCheetahsAtCCFInnerContainer">
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
      <div className="FuturePageCheetahAndManImageSubsectionContentTextContainer">
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
      <div className={getElementStyleClassName("FuturePageSubsectionCheetahsAtCCFImageContainer")}>
        <CircularImage image="https://sotinpc.files.wordpress.com/2013/04/day-of-rememberance.jpg" title="Chewbaaka" />
      </div>
    );
  }

  renderLhsContentMekondyo() {
    return (
      <div className={getElementStyleClassName("FuturePageSubsectionCheetahsAtCCFImageContainer")}>
        <CircularImage image="https://globalgaz.com/wp-content/uploads/2018/07/DSC03746.jpg" title="Mekondyo" />
      </div>
    );
  }

  renderRhsContentMekondyo() {
    return (
      <div className="FuturePageCheetahAndManImageSubsectionContentTextContainer">
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
