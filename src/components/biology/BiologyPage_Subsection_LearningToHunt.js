/**
 * BiologyPage_Subsection_LearningToHunt.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 18, 2020
 * Updated  : Jul 19, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

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
      <div className="OverflowHidden VerticalCushionPadding">
        <div className="FloatRight">
          <ImageView
            image={image_cheetah_cubs_learning_hunting}
            caption="Cheetah cubs learning how to hunt."
            width={720}
            height={480}
          />
        </div>

        <div className="LeftMargin50px">
          <TextBubble
            diameter={520}
            title={this.state.subsectionConfig.title}
            content={ContentPageSubsectionParagraphsJoin(this.state.subsectionConfig.contents)}
          />
        </div>
      </div>
    );
  }
}
