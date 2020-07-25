/**
 * FuturePage_Subsection_StoppingIllegalWildlifeTrades.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import MediaLinkButton from '../shared/MediaLinkButton'

import ImageView from '../shared/ImageView'

import ImageSlidingGalleryDiscrete from '../shared/ImageSlidingGalleryDiscrete'

import image_cheetah_rescue_01 from './assets/cheetah_rescue_01.jpg'
import image_cheetah_rescue_02 from './assets/cheetah_rescue_02.jpg'
import image_cheetah_rescue_03 from './assets/cheetah_rescue_03.jpg'
import image_cheetah_rescue_04 from './assets/cheetah_rescue_04.jpg'

import image_cheetah_trafficking_map from './assets/cheetah_trafficking_map.png'

import image_CITES_CoP17 from './assets/CITES_CoP17.jpg'

import image_What_is_CITES from './assets/What_is_CITES.png'

export default class FuturePageSubsectionStoppingIllegalWildlifeTrades extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_StoppingIllegalWildlifeTrades";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionStoppingIllegalWildlifeTrades._SUBSECTION_NAME_]
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
        {this.renderSubsectionSubtitle()}
        {this.renderCCFInvolvementPart1Content(this.state.subsectionConfig.contents["part_CCFInvolvementPart1"])}
        {this.renderImageGallery()}
        {this.renderPartCITESCoP17Content(this.state.subsectionConfig.contents["part_CITESCoP17"])}
      </div>
    );
  }

  renderSubsectionSubtitle() {
    return (
      <h4 className="TextCentered Centered ContentPageSubsectionAlarmBannerSubtitle VerticalCushionPadding">
        {this.state.subsectionConfig.subtitle}
      </h4>
    );
  }

  renderCCFInvolvementPart1Content(part) {
    return (
      <div>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderCCFInvolvementPart1LhsColumnContent(part)}}
          rhsColumn={{content: this.renderCCFInvolvementPart1RhsColumnContent(part)}}
        />
      </div>
    );
  }

  renderCCFInvolvementPart1LhsColumnContent(part) {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}

        <MediaLinkButton
          title="Read on CCF's collaboration with the Somaliland government on intercepting trafficked cheetahs"
          href="https://cheetah.org/press-releases/cheetah-conservation-fund-receives-emaciated-cubs-intercepted-from-wildlife-traffickers-by-somaliland-government-in-record-breaking-seizure/"
          icon="file alternate outline"
        />
      </div>
    );
  }

  renderCCFInvolvementPart1RhsColumnContent(part) {
    return (
      <div>
        <ImageView
          image={image_cheetah_trafficking_map}
          caption="The heaviest trafficking of cheetahs have been observed from Central and Southern Africa into the Middle East."
          credit="BBC"
          width={640}
          height={360}
        />
      </div>
    );
  }

  renderImageGallery() {
    return (
      <div className="Centered" style={{width: 960}}>
        <ImageSlidingGalleryDiscrete
          width={960}
          height={640}
          slides={[
            {
              image: image_cheetah_rescue_01,
              caption: "Most cheetah cubs trafficked and sold end up as the buyer's pets. The cubs consequently suffer from shock, malnurishment, and unsuitable living conditions."
            },
            {
              image: image_cheetah_rescue_02,
              caption: "Cheetah cubs trafficked often are in extremely poor physical health and conditions. Many perish within weeks even with the best care after confistication. (Image credit: Cheetah Conservation Fund)"
            },
            {
              image: image_cheetah_rescue_03,
              caption: "CCF's cheetah sanctuary of rescue, rehab and care of confiscated cheetahs in Hargeisa, Somaliland."
            },
            {
              image: image_cheetah_rescue_04,
              caption: "One of the cubs in Somaliland broke his back leg. Fortunately CCF's team in Somaliland was able to examine the cub and perform the necessary surgery. (Image credit: Cheetah Conservation Fund)"
            }
          ]}
        />
      </div>
    );
  }

  renderPartCITESCoP17Content(part) {
    return (
      <div className="VerticalCushionPadding">
        <div className="OverflowHidden VerticalCushionPadding">
          <div className="FloatLeft HorizontalCusionPadding">
            <img
              src={image_CITES_CoP17}
              alt="CITES (Convention on International Trade in Endangered Species of Wild Fauna and Flora) Conference of the Parties 17"
            />
          </div>

          {ContentPageSubsectionParagraphsContentBinder(part.content)}
        </div>

        <div className="VerticalCushionPadding Centered FactBannerMediumDimension">
          <img
            className="FactBannerMediumDimension"
            src={image_What_is_CITES}
            alt="What is CITES?"
          />
        </div>
      </div>
    );
  }
}
