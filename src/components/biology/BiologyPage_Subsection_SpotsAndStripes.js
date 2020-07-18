/**
 * BiologyPage_Subsection_SpotsAndStripes.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 18, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import BigCatSpotsIllustration from './BigCatSpotsIllustration'

import image_cheetah_mantle from './assets/Cheetah_Mantle.jpg'
import image_cheetah_and_honey_badger from './assets/cheetah_and_honey_badger.jpg'

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
      <div className="">
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="">
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}

        <div className="Centered VerticalCushionPadding" style={{width: 1080}}>
          <div className="FloatLeft">
            <ImageView
              image={image_cheetah_mantle}
              caption="Mantle on cheetah cub's back provides a form of camouflage that's critical to its survival."
              width={360}
              height={360}
            />
          </div>
          <ImageView
            image={image_cheetah_and_honey_badger}
            caption="The cheetah's mantle also provides a form of “mimicry” that it can use to deter predators."
            width={720}
            height={360}
          />
        </div>

        <BigCatSpotsIllustration />
      </div>
    );
  }
}
