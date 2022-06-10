/**
 * HistoryPage_Subsection_CheetahsInSports.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageSlidingGallery from '../shared/ImageSlidingGallery'

import image_cheetah_with_two_indian_servants from './assets/cheetah_with_two_indian_servants-min.jpg'
import image_cheetah_painting_02 from './assets/cheetah_painting_02-min.jpg'

export default class HistoryPageSubsectionCheetahsInSports extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahsInSports";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionCheetahsInSports._SUBSECTION_NAME_],
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
    );
  }

  renderContent() {
    return (
      <ContentPageSubsectionTwoColumnContentTemplate
        lhsColumn={{content: this.renderLhsContent()}}
        rhsColumn={{content: this.renderRhsContent()}}
      />
    );
  }

  renderLhsContent() {
    return (
      <ImageSlidingGallery
        slides={[
          {
            image: image_cheetah_with_two_indian_servants,
            caption: "A painting depicting a cheetah gifted to the English King George III by the Tippoo Sultan in 1799.",
            aspectRatio: {
              width: 485,
              height: 317
            }
          },
          {
            image: image_cheetah_painting_02,
            caption: "This 1878 painting from Marianne North’s book shows cheetahs and lynxes chained to charpais by their keepers in Alwar.",
            aspectRatio: {
              width: 480,
              height: 314
            }
          }
        ]}
        width={540}
      />
    );
  }

  renderRhsContent() {
    return (
      ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)
    );
  }
}
