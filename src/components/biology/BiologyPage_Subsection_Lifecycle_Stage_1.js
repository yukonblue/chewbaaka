/**
 * BiologyPage_Subsection_Lifecycle_Stage_1.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import ImageView from '../shared/ImageView'

import image_cheetah_mom_carry_cub from './assets/cheetah_mom_carry_cub-min.jpg'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

export default class BiologyPageSubsectionLifecycleStage1 extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Lifecycle_Stage_1";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLifecycleStage1._SUBSECTION_NAME_],
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
            image={image_cheetah_mom_carry_cub}
            caption="Cheetah cubs are born blind, so they need their mother's care."
            width={320}
            height={480}
          />
        }
        fixedPart={ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
      />
    );
  }
}
