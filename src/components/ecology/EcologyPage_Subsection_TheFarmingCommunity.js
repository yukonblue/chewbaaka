/**
 * EcologyPage_Subsection_TheFarmingCommunity.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Aug 20, 2021
 */

import React from 'react'

import Media from 'react-media'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageParagraph from '../shared/ContentPageParagraph'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { GetImagePath } from '../shared/Path'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import ImageView from '../shared/ImageView'

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class EcologyPageSubsectionTheFarmingCommunity extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_TheFarmingCommunity";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionTheFarmingCommunity._SUBSECTION_NAME_],
      imagesContext: () => (require.context("./assets/", true))
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        <ContentPageParagraph>
          {this.state.subsectionConfig.subtitle}
        </ContentPageParagraph>

        {
          Object.keys(this.state.subsectionConfig.contents).map(
            (key, idx) => (
              this.renderPartContent(this.state.subsectionConfig.contents[key], idx)
            )
          )
        }
      </div>
    );
  }

  renderPartContent(part, idx) {
    if (part.is_part_Conservancies) {
      return this.renderPartWithImageContent(part, idx);
    }
    return (
      <ContentPageSubsectionPart key={idx}>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </ContentPageSubsectionPart>
    );
  }

  renderPartWithImageContent(part, idx) {
    return (
      <ContentPageSubsectionPart key={idx}>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={this.renderFloatPart()}
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content)}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderFloatPart() {
    if ( __TEST__ ) {
      return this.renderConservancyImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderConservancyImage(matches))
        }
      </Media>
    );
  }

  renderConservancyImage(matches) {
    const images = this.state.imagesContext();

    return (
      <ImageView
        image={images(GetImagePath("./CCF_GWL_map", ".jpg", matches))}
        caption="Cheetah Conservation Fund works with communal farmers and people living around the Greater Waterberg Landscape Conservancy."
        credit={kStringConstantCheetahConservationFund}
        width={600}
        height={471}
      />
    );
  }
}
