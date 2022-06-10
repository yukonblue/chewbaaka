/**
 * BiologyPage_Subsection_LearningToHunt.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 18, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsJoin
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import TextBubble from '../shared/TextBubble'

import image_cheetah_cubs_learning_hunting from './assets/cheetah_cubs_learning_hunting-min.jpg'

export default class BiologyPageSubsectionLearningToHunt extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_LearningToHunt";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLearningToHunt._SUBSECTION_NAME_],
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
      <ContentPageSideFloatFluidContainer
        floatPart={
          <ImageView
            image={image_cheetah_cubs_learning_hunting}
            caption="Cheetah cubs learning how to hunt."
            width={480}
            height={320}
          />
        }
        fixedPart={
          <TextBubble
            diameter={520}
            title={this.state.subsectionConfig.title}
            content={ContentPageSubsectionParagraphsJoin(this.state.subsectionConfig.contents)}
          />
        }
        floatFixedSide={true}
      />
    );
  }
}
