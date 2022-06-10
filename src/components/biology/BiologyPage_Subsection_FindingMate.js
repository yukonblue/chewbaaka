/**
 * BiologyPage_Subsection_FindingMate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_cheetah_scent_marking from './assets/cheetah_scent_marking-min.jpg'

export default class BiologyPageSubsectionFindingMate extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_FindingMate";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionFindingMate._SUBSECTION_NAME_],
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
    )
  }

  renderContent() {
    return (
      <ContentPageSideFloatFluidContainer
        floatPart={
          <ImageView
            image={image_cheetah_scent_marking}
            caption="Cheetahs often mark their scent on tree trunks with their urine. This behavior is common among cats."
            width={720}
            height={480}
          />
        }
        fixedPart={ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
      />
    );
  }
}
