/**
 * FuturePage_Subsection_StoppingIllegalWildlifeTrades.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageAlarmBanner from '../shared/ContentPageAlarmBanner'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import FactBannerImage from '../shared/FactBannerImage'

import MediaLinkButton from '../shared/MediaLinkButton'

import ImageView from '../shared/ImageView'

import ImageSlidingGalleryDiscrete from '../shared/ImageSlidingGalleryDiscrete'

import image_cheetah_rescue_01 from './assets/cheetah_rescue_01-min.jpg'
import image_cheetah_rescue_02 from './assets/cheetah_rescue_02-min.jpg'
import image_cheetah_rescue_03 from './assets/cheetah_rescue_03-min.jpg'
import image_cheetah_rescue_04 from './assets/cheetah_rescue_04-min.jpg'

import image_cheetah_trafficking_map from './assets/cheetah_trafficking_map-min.png'

import image_CITES_CoP17 from './assets/CITES_CoP17-min.jpg'

import image_What_is_CITES from './assets/What_is_CITES-min.png'

export default class FuturePageSubsectionStoppingIllegalWildlifeTrades extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_StoppingIllegalWildlifeTrades";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionStoppingIllegalWildlifeTrades._SUBSECTION_NAME_],
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
        {this.renderSubsectionSubtitle()}
        {this.renderCCFInvolvementPart1Content(this.state.subsectionConfig.contents["part_CCFInvolvementPart1"])}
        {this.renderImageGallery()}
        {this.renderPartCITESCoP17Content(this.state.subsectionConfig.contents["part_CITESCoP17"])}
      </div>
    );
  }

  renderSubsectionSubtitle() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageAlarmBanner>
          {this.state.subsectionConfig.subtitle}
        </ContentPageAlarmBanner>
      </ContentPageSubsectionPart>
    );
  }

  renderCCFInvolvementPart1Content(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderCCFInvolvementPart1LhsColumnContent(part)}}
          rhsColumn={{content: this.renderCCFInvolvementPart1RhsColumnContent(part)}}
        />

        <div className="VerticalCushionPadding">
          <MediaLinkButton    
            title="Read on CCF’s collaboration with the Somaliland government on intercepting cheetah trafficking"
            href="https://cheetah.org/press-releases/cheetah-conservation-fund-receives-emaciated-cubs-intercepted-from-wildlife-traffickers-by-somaliland-government-in-record-breaking-seizure/"
            icon="file alternate outline"
          />
        </div>
      </ContentPageSubsectionPart>
    );
  }

  renderCCFInvolvementPart1LhsColumnContent(part) {
    return (
      ContentPageSubsectionParagraphsContentBinder(part.content)
    );
  }

  renderCCFInvolvementPart1RhsColumnContent(part) {
    return (
      <ImageView
        image={image_cheetah_trafficking_map}
        caption="The heaviest trafficking of cheetahs have been observed from Central and Southern Africa into the Middle East."
        credit="BBC"
        width={640}
        height={360}
      />
    );
  }

  renderImageGallery() {
    return (
      <ContentPageSubsectionPart>
        <CenteredFullWidthContainer width={960}>
          <ImageSlidingGalleryDiscrete
            width={960}
            height={576}
            slides={[
              {
                image: image_cheetah_rescue_01,
                caption: "Most cheetah cubs trafficked and sold end up as buyers' pets. The cubs consequently suffer from shock, malnourishment, and unsuitable living conditions."
              },
              {
                image: image_cheetah_rescue_02,
                caption: "Cheetah cubs trafficked are often in extremely poor physical health and conditions. Many perish within weeks even with the best care after confiscation.",
                credit: kStringConstantCheetahConservationFund
              },
              {
                image: image_cheetah_rescue_03,
                caption: "CCF’s cheetah sanctuary of rescue, rehab and care of confiscated cheetahs in Hargeisa, Somaliland."
              },
              {
                image: image_cheetah_rescue_04,
                caption: "One of the cubs in Somaliland broke his back leg. Fortunately CCF’s team in Somaliland was able to examine the cub and perform the necessary surgery.",
                credit: kStringConstantCheetahConservationFund
              }
            ]}
          />
        </CenteredFullWidthContainer>
      </ContentPageSubsectionPart>
    );
  }

  renderPartCITESCoP17Content(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <FluidImageWrapper
              src={image_CITES_CoP17}
              alt="CITES (Convention on International Trade in Endangered Species of Wild Fauna and Flora) Conference of the Parties 17"
              // Specify the aspect ratio.
              width={480}
              height={289}
            />
          }
          fixedPart={
            ContentPageSubsectionParagraphsContentBinder(part.content)
          }
        />

        <FactBannerImage
          src={image_What_is_CITES}
          alt="What is CITES?"
          large
          centered
          // Specify the aspect ratio.
          width={960}
          height={373}
        />
      </ContentPageSubsectionPart>
    );
  }
}
