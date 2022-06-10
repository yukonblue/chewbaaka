/**
 * FuturePage_Subsection_FutureFarmersOfAfrica.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageParagraph from '../shared/ContentPageParagraph'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import ImageView from '../shared/ImageView'

import MediaLinkButton from '../shared/MediaLinkButton'

import StatsLabel from '../shared/StatsLabel'

import image_CCF_FFA_01 from './assets/CCF_FFA_01-min.jpg'

export default class FuturePageSubsectionFutureFarmersOfAfrica extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_FutureFarmersOfAfrica";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionFutureFarmersOfAfrica._SUBSECTION_NAME_],
      accentColor: props.sectionConfig.accentColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        accentColor={this.state.accentColor}
        content={this.renderContent()}
      />
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
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <div style={{width:240}}>
              <StatsLabel
                value="90%"
                label="of the cheetah population in Namibia lives on farmlands alongside 80% of the country’s wildlife species"
                color="orange"
              />
            </div>
          }
          fixedPart={
            <ContentPageParagraph>
              {this.state.subsectionConfig.contents["paragraph_FutureFarmersOfAfrica_01"]}
            </ContentPageParagraph>
          }
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPart2Content() {
    return (
      <ContentPageSubsectionPart>

        <ContentPageSideFloatFluidContainer
          floatPart={
            <ImageView
              image={image_CCF_FFA_01}
              caption="Farmers participate in FFA training courses."
              credit={kStringConstantCheetahConservationFund}
              width={742}
              height={370}
            />
          }
          fixedPart={
            <div>
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
          }
          RTL={true}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPart3Content() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["paragraph_FutureFarmersOfAfrica_05"]}
        </ContentPageParagraph>
        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["paragraph_FutureFarmersOfAfrica_06"]}
        </ContentPageParagraph>

        <div className="VerticalCushionPadding">
          <MediaLinkButton
            title="Read on CCF's blog on Future Farmers of Africa"
            href="https://cheetah.org/canada/about-us/what-we-support/future-farmers-of-africa/"
            icon="file alternate outline"
          />
        </div>
      </ContentPageSubsectionPart>
    );
  }
}
