/**
 * BiologyPage_Subsection_SpotsAndStripes.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Aug 23, 2021
 */

import React, { Suspense } from 'react'

import Media from 'react-media'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { requireContext } from '../shared/workarounds/RequireContextMock'

import { GetImagePath } from '../shared/Path'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

import FactBannerImage from '../shared/FactBannerImage'

import ImageView from '../shared/ImageView'

// import BigCatSpotsIllustration from './BigCatSpotsIllustration'

import image_cheetah_mantle from './assets/Cheetah_Mantle-min.jpg'

import './BiologyPage_Subsection_SpotsAndStripes.css'

const BigCatSpotsIllustration = React.lazy(() => import('./BigCatSpotsIllustration'));

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class BiologyPageSubsectionSpotsAndStripes extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_SpotsAndStripes";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionSpotsAndStripes._SUBSECTION_NAME_]
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
        {this.renderPart1()}
        {this.renderPart2()}
        {this.renderPart3Conditionally()}
      </div>
    );
  }

  renderPart1() {
    return (
      <ContentPageSubsectionPart>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}

        {this.renderWhatIsCamouflageImagePart()}
      </ContentPageSubsectionPart>
    );
  }

  renderWhatIsCamouflageImagePart() {
    if (__TEST__) {
      return this.renderWhatIsCamouflageImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderWhatIsCamouflageImage(matches))
        }
      </Media>
    );
  }

  renderWhatIsCamouflageImage(matches) {
    const context = __TEST__ ? () => (requireContext(__dirname, "./assets/")) : () => (require.context("./assets/"));
    const images = context();

    return (
      <FactBannerImage
        src={images(GetImagePath("./What_is_Camouflage", ".png", matches))}
        alt="What is camouflage?"
        large
        centered
        // Aspect ratio
        width={960}
        height={480}
      />
    );
  }

  renderPart2() {
    return (
      <ContentPageSubsectionPart>
        <CenteredFullWidthContainer width={360}>
          <ImageView
            image={image_cheetah_mantle}
            caption="Mantle on cheetah cub's back provides a form of camouflage that's critical to its survival."
            width={360}
            height={360}
          />
        </CenteredFullWidthContainer>

        <div className="VerticalCushionPaddingTopLarge">
          <CenteredFullWidthContainer width={720}>
            {this.renderCheetahAndBadgerImagePart()}
          </CenteredFullWidthContainer>
        </div>
      </ContentPageSubsectionPart>
    );
  }

  renderCheetahAndBadgerImagePart() {
    if (__TEST__) {
      return this.renderCheetahAndBadgerImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderCheetahAndBadgerImage(matches))
        }
      </Media>
    );
  }

  renderCheetahAndBadgerImage(matches) {
    const context = __TEST__ ? () => (requireContext(__dirname, "./assets/")) : () => (require.context("./assets/"));
    const images = context();

    return (
      <ImageView
        image={images(GetImagePath("./cheetah_and_honey_badger", ".jpg", matches))}
        caption="The cheetah's mantle also provides a form of “mimicry” that it can use to deter predators."
        width={720}
        height={360}
      />
    );
  }

  renderPart3Conditionally() {
    return (
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width > 900)}
        renderContentHandler={this.renderPart3}
      />
    );
  }

  renderPart3() {
    return (
      <Suspense fallback={<div></div>}>
        <div className="BigCatSpotsIllustrationPageSubsectionWrapper">
          <ContentPageSubsectionPart>  
            <BigCatSpotsIllustration />
          </ContentPageSubsectionPart>
        </div>
      </Suspense>
    );
  }
}
