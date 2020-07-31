/**
 * BiologyPage_Subsection_LearningToHunt.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 18, 2020
 * Updated  : Jul 26, 2020
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

import image_cheetah_cubs_learning_hunting from './assets/cheetah_cubs_learning_hunting.jpg'

export default class BiologyPageSubsectionLearningToHunt extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_LearningToHunt";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLearningToHunt._SUBSECTION_NAME_]
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
      <ContentPageSideFloatFluidContainer
        floatPart={
          <ImageView
            image={image_cheetah_cubs_learning_hunting}
            caption="Cheetah cubs learning how to hunt."
            width={720}
            height={480}
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
