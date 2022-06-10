/**
 * HistoryPage_Subsection_CheetahsInArt.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jun 09, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_cheetah_painting_Renaissance from './assets/cheetah_painting_Renaissance-min.jpg'

export default class HistoryPageSubsectionCheetahsInArt extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahsInArt";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionCheetahsInArt._SUBSECTION_NAME_],
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
      ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)
    );
  }

  renderRhsContent() {
    return (
      <ImageView
        image={image_cheetah_painting_Renaissance}
        caption="Giuliano de’ Medici depicted with a cheetah behind him on horseback. Painting by Benozzo Gozzoli."
        width={451}
        height={600}
      />
    );
  }
}
