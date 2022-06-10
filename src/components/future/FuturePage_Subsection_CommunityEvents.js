/**
 * FuturePage_Subsection_CommunityEvents.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import Media from 'react-media'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { requireContext } from '../shared/workarounds/RequireContextMock'

import { GetImagePath } from '../shared/Path'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import ImageView from '../shared/ImageView'

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class FuturePageSubsectionCommunityEvents extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CommunityEvents";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionCommunityEvents._SUBSECTION_NAME_],
      bgColor: props.sectionConfig.bgColor
    };
  }

  render() {
    return (
      <div>
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          bgColor={this.state.bgColor}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <ContentPageSideFloatFluidContainer
        floatPart={
          this.renderCCGLivelihoodDevelopmentImagePart()
        }
        fixedPart={ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.content)}
        RTL={true}
      />
    );
  }

  renderCCGLivelihoodDevelopmentImagePart() {
    if (__TEST__) {
      return this.renderCCGLivelihoodDevelopmentImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderCCGLivelihoodDevelopmentImage(matches))
        }
      </Media>
    );
  }

  renderCCGLivelihoodDevelopmentImage(matches) {
    const context = __TEST__ ? () => (requireContext(__dirname, "./assets/")) : () => (require.context("./assets/"));
    const images = context();

    return (
      <ImageView
        image={images(GetImagePath("./CCF_Livelihood_Development", ".jpg", matches))}
        caption="CCF helps Namibian artists and artisans to market and sell their work with the Livelihood Development Program."
        credit={kStringConstantCheetahConservationFund}
        // Aspect ratio
        width={960}
        height={577}
      />
    );
  }
}
