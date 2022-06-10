/**
 * BiologyPage_Subsection_BodyAndBone.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jun 10, 2022
 */

import React, { Suspense } from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsJoin
} from '../shared/ContentPageSubsectionContentBinder'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

// import CheetahAccelerationIllustration from './CheetahAccelerationIllustration'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import TextBubble from '../shared/TextBubble'

import ImageView from '../shared/ImageView'

import image_cheetah_body_measurements from './assets/Cheetah_Body_Measurements_480x320-min.jpg'
import image_cheetah_tail from './assets/cheetah_tail_480x343-min.jpg'
import image_cheetah_running_animated from './assets/cheetah_running_animated-min.gif'

const CheetahAccelerationIllustration = React.lazy(() => import('./CheetahAccelerationIllustration'));

export default class BiologyPageSubsectionBodyAndBone extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_BodyAndBone";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionBodyAndBone._SUBSECTION_NAME_],
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
      <div>
        {this.renderPartBodyContent(this.state.subsectionConfig.contents["part_Body"])}

        {this.renderPartTailContent(this.state.subsectionConfig.contents["part_Tail"])}

        {this.renderPartBoneContent(this.state.subsectionConfig.contents["part_Bone"])}

        {this.renderCheetahAccelerationIllustrationPartConditionally()}
      </div>
    );
  }

  renderPartBodyContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <FluidImageWrapper
              src={image_cheetah_body_measurements}
              alt="Cheetah body measurements"
              // Aspect ratio
              width={480}
              height={320}
            />
          }
          fixedPart={
            <TextBubble
              diameter={520}
              title={part.title}
              content={part.contents["paragraph_01"]}
            />
          }
          floatFixedSide={true}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPartTailContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <TextBubble
              diameter={520}
              title={part.title}
              content={ContentPageSubsectionParagraphsJoin(part.contents)}
            /> 
          }
          fixedPart={
            <FluidImageWrapper
              src={image_cheetah_tail}
              alt="The cheetah's tail is responsible for controlling balance during a high speed run."
              // Aspect ratio
              width={480}
              height={343}
            />
          }
          floatFixedSide={true}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPartBoneContent(part) {
    return (
      <ContentPageSubsectionPart>
        <TextBubble
          diameter={760}
          title={part.title}
          content={ContentPageSubsectionParagraphsJoin(part.contents)}
        />

        <div className="Centered VerticalCushionPaddingTopLarge" style={{maxWidth: 500}}>
          <ImageView
            image={image_cheetah_running_animated}
            caption="The cheetah's flexible spine is a major contributing factor to its body dexterity, long strides, and speed."
            width={500}
            height={282}
          />
        </div>
      </ContentPageSubsectionPart>
    );
  }

  renderCheetahAccelerationIllustrationPartConditionally() {
    return (
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width >= 720)}
        renderContentHandler={this.renderCheetahAccelerationIllustrationPart}
      />
    );
  }

  renderCheetahAccelerationIllustrationPart() {
    return (
      <ContentPageSubsectionPart>
        <Suspense fallback={<div></div>}>
          <CheetahAccelerationIllustration />
        </Suspense>
      </ContentPageSubsectionPart>
    );
  }
}
