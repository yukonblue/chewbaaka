/**
 * HistoryPage_Subsection_CheetahAndManImage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jun 09, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageSlidingGallery from '../shared/ImageSlidingGallery'

import image_Mafdet from './assets/image_Mafdet-min.jpg'
import image_Egyptian_chariot from './assets/image_Egyptian_chariot-min.jpg'

export default class HistoryPageSubsectionCheetahAndManImage extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_RelationshipsWithMan";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionCheetahAndManImage._SUBSECTION_NAME_],
      bgColor: props.sectionConfig.bgColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        bgColor={this.state.bgColor}
        content={this.renderContent()}
      />
    )
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
      ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)
    );
  }

  renderRhsContent() {
    return (
      <ImageSlidingGallery
        slides={[
          {
            image: image_Mafdet,
            caption: "Mafdet’s head on the bed where the mummy is placed.",
            aspectRatio: {
              width: 480,
              height: 320
            }
          },
          {
            image: image_Egyptian_chariot,
            caption: "Egyptian chariot, accompanied by a cheetah and slave.",
            aspectRatio: {
              width: 480,
              height: 320
            }
          }
        ]}
      />
    );
  }
}
