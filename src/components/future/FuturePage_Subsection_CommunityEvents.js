/**
 * FuturePage_Subsection_CommunityEvents.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Aug 21, 2021
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
      imagesContext: __TEST__ ? (base) => (requireContext(__dirname, base)) : (base) => (require.context(base))
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
    const images = this.state.imagesContext("./assets/");

    return (
      <ImageView
        image={images(GetImagePath("./CCF_Livelihood_Development", ".jpg", matches))}
        caption="CCF helps Namibian artists and artisans to market and sell their work with the Livelihood Development Program."
        credit={kStringConstantCheetahConservationFund}
        width={960}
      />
    );
  }
}
