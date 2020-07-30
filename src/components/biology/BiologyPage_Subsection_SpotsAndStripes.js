/**
 * BiologyPage_Subsection_SpotsAndStripes.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import ImageView from '../shared/ImageView'

import BigCatSpotsIllustration from './BigCatSpotsIllustration'

import image_cheetah_mantle from './assets/Cheetah_Mantle.jpg'
import image_cheetah_and_honey_badger from './assets/cheetah_and_honey_badger.jpg'

import image_What_is_Camouflage from './assets/What_is_Camouflage.png'

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
        {this.renderPart3()}
      </div>
    );
  }

  renderPart1() {
    return (
      <ContentPageSubsectionPart>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}

        <div className="FactBannerMediumDimension Centered">
          <img
            className="FactBannerMediumDimension"
            src={image_What_is_Camouflage}
            alt="What is camouflage?"
          />
        </div>
      </ContentPageSubsectionPart>
    );
  }

  renderPart2() {
    return (
      <ContentPageSubsectionPart>
        <CenteredFullWidthContainer maxWidth={360}>
          <ImageView
            image={image_cheetah_mantle}
            caption="Mantle on cheetah cub's back provides a form of camouflage that's critical to its survival."
            width={360}
            height={360}
          />
        </CenteredFullWidthContainer>

        <CenteredFullWidthContainer maxWidth={720}>
          <ImageView
            image={image_cheetah_and_honey_badger}
            caption="The cheetah's mantle also provides a form of “mimicry” that it can use to deter predators."
            width={720}
            height={360}
          />
        </CenteredFullWidthContainer>
      </ContentPageSubsectionPart>
    );
  }

  renderPart3() {
    return (
      <ContentPageSubsectionPart>
        <BigCatSpotsIllustration />
      </ContentPageSubsectionPart>
    );
  }
}
