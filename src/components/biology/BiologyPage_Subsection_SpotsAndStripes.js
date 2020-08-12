/**
 * BiologyPage_Subsection_SpotsAndStripes.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Aug 11, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

import FactBannerImage from '../shared/FactBannerImage'

import ImageView from '../shared/ImageView'

import BigCatSpotsIllustration from './BigCatSpotsIllustration'

import image_cheetah_mantle from './assets/Cheetah_Mantle-min.jpg'
import image_cheetah_and_honey_badger from './assets/cheetah_and_honey_badger-min.jpg'

import image_What_is_Camouflage from './assets/What_is_Camouflage-min.png'

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

        <FactBannerImage
          src={image_What_is_Camouflage}
          alt="What is camouflage?"
          large
        />
      </ContentPageSubsectionPart>
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
            <ImageView
              image={image_cheetah_and_honey_badger}
              caption="The cheetah's mantle also provides a form of “mimicry” that it can use to deter predators."
              width={720}
              height={360}
            />
          </CenteredFullWidthContainer>
        </div>
      </ContentPageSubsectionPart>
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
      <ContentPageSubsectionPart>
        <BigCatSpotsIllustration />
      </ContentPageSubsectionPart>
    );
  }
}
