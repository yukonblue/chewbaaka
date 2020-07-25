/**
 * FuturePage_Subsection_FutureFarmersOfAfrica.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import ContentPageParagraph from '../shared/ContentPageParagraph'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import ImageView from '../shared/ImageView'

import MediaLinkButton from '../shared/MediaLinkButton'

import StatsLabel from '../shared/StatsLabel'

import image_CCF_FFA_01 from './assets/CCF_FFA_01.jpg'

export default class FuturePageSubsectionFutureFarmersOfAfrica extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_FutureFarmersOfAfrica";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionFutureFarmersOfAfrica._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div>
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderPart1Content()}
        {this.renderPart2Content()}
        {this.renderPart3Content()}
      </div>
    );
  }

  renderPart1Content() {
    return (
      <div className="VerticalCushionPadding" style={{height: 280}}>
        <div className="FloatRight">
          <div className="HorizontalCusionPadding" style={{width:320}}>
            <StatsLabel
              value="90%"
              label="of the cheetah population in Namibia lives on farmlands alongside 80% of the country’s wildlife species"
              color="orange"
            />
          </div>
        </div>

        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["paragraph_FutureFarmersOfAfrica_01"]}
        </ContentPageParagraph>
      </div>
    );
  }

  renderPart2Content() {
    return (
      <div className="OverflowHidden VerticalCushionPadding BottomMargin50px">
        <div className="FloatLeft">
          <div className="HorizontalCusionPadding VerticalCushionPadding">
            <ImageView
              image={image_CCF_FFA_01}
              caption="Farmers participate in FFA training courses."
              credit={kStringConstantCheetahConservationFund}
              width={742}
              height={370}
            />
          </div>
        </div>

        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["paragraph_FutureFarmersOfAfrica_02"]}
        </ContentPageParagraph>
        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["paragraph_FutureFarmersOfAfrica_03"]}
        </ContentPageParagraph>
        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["paragraph_FutureFarmersOfAfrica_04"]}
        </ContentPageParagraph>
      </div>
    );
  }

  renderPart3Content() {
    return (
      <div>
        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["paragraph_FutureFarmersOfAfrica_05"]}
        </ContentPageParagraph>
        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["paragraph_FutureFarmersOfAfrica_06"]}
        </ContentPageParagraph>

        <MediaLinkButton
          title="Read on CCF's blog on Future Farmers of Africa"
          href="https://cheetah.org/canada/about-us/what-we-support/future-farmers-of-africa/"
          icon="file alternate outline"
        />
      </div>
    );
  }
}
