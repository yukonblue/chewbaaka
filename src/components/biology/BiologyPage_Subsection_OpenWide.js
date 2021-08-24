/**
 * BiologyPage_Subsection_OpenWide.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Aug 23, 2021
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import image_open_wide from './assets/open_wide-min.jpg'
import image_cheetah_grooming from './assets/cheetah_grooming-min.jpg'
import image_cheetah_tongue from './assets/cheetah_tongue-min.jpg'

export default class BiologyPageSubsectionOpenWide extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_OpenWide";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionOpenWide._SUBSECTION_NAME_]
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
      <div>
        {this.renderPart1()}
        {this.renderPart2()}
        {this.renderPart3()}
      </div>
    );
  }

  renderPart1() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <FluidImageWrapper
              src={image_open_wide}
              alt="Open wide"
              // Aspect ratio
              width={480}
              height={480}
            />
          }
          fixedPart={ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part1)}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPart2() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <FluidImageWrapper
              src={image_cheetah_tongue}
              alt="Papillae on cheetah's tongue"
              // Aspect ratio
              width={480}
              height={327}
            />
          }
          fixedPart={ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part2)}
          RTL={true}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPart3() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <FluidImageWrapper
              src={image_cheetah_grooming}
              alt="Cheetah grooming"
              // Aspect ratio
              width={481}
              height={481}
            />
          }
          fixedPart={ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part3)}
        />
      </ContentPageSubsectionPart>
    );
  }
}
