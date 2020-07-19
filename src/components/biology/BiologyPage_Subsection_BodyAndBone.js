/**
 * BiologyPage_Subsection_BodyAndBone.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 19, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsJoin
} from '../shared/ContentPageSubsectionContentBinder'

import CheetahAccelerationIllustration from './CheetahAccelerationIllustration'

import TextBubble from '../shared/TextBubble'

import ImageView from '../shared/ImageView'

import './BiologyPage_Subsection_BodyAndBone.css'

import image_cheetah_body_measurements from './assets/Cheetah_Body_Measurements_720x480.jpg'
import image_cheetah_tail from './assets/cheetah_tail.jpg'
import image_cheetah_running_animated from './assets/cheetah_running_animated.gif'

export default class BiologyPageSubsectionBodyAndBone extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_BodyAndBone";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionBodyAndBone._SUBSECTION_NAME_]
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
        {this.renderPartBodyContent(this.state.subsectionConfig.contents["part_Body"])}

        {this.renderPartTailContent(this.state.subsectionConfig.contents["part_Tail"])}

        {this.renderPartBoneContent(this.state.subsectionConfig.contents["part_Bone"])}

        <div className="BiologyPageSubsectionBodyAndBoneCheetahAccelerationIllustrationContainer Centered VerticalCushionPadding">
          <CheetahAccelerationIllustration />
        </div>
      </div>
    );
  }

  renderPartBodyContent(part) {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <div className="FloatRight">
          <img src={image_cheetah_body_measurements} alt="" />
        </div>

        <div className="LeftMargin50px">
          <TextBubble
            diameter={520}
            title={part.title}
            content={part.contents["paragraph_01"]}
          />
        </div>
      </div>
    );
  }

  renderPartTailContent(part) {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <div className="FloatRight RightMargin50px">
          <TextBubble
            diameter={540}
            title={part.title}
            content={ContentPageSubsectionParagraphsJoin(part.contents)}
          />  
        </div>

        <img src={image_cheetah_tail} alt="" />
      </div>
    );
  }

  renderPartBoneContent(part) {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <div className="FloatRight">
          <div className="BiologyPageSubsectionBodyAndBoneAnimationImageContainer">
            <ImageView
              image={image_cheetah_running_animated}
              caption="The cheetah's flexible spine is a major contributing factor to its body dexterity, long strides, and speed."
              width={500}
              height={282}
            />
          </div>
        </div>

        <TextBubble
          diameter={760}
          title={part.title}
          content={ContentPageSubsectionParagraphsJoin(part.contents)}
        />
      </div>
    );
  }
}
