/**
 * BiologyPage_Subsection_GeneticConfusion.js
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
  ContentPageSubsectionParagraphsContentBinder,
} from '../shared/ContentPageSubsectionContentBinder'

import TextBubble from '../shared/TextBubble'

export default class BiologyPageSubsectionGeneticConfusion extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Genetic_Confusion";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionGeneticConfusion._SUBSECTION_NAME_],
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
      this.renderSection1Content()
    );
  }

  renderSection1Content() {
    return (
      <ContentPageSideFloatFluidContainer
        floatPart={this.renderHighlightedSectionContent()}
        fixedPart={ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents["part_Main_Content"].content)}
      />
    );
  }

  renderHighlightedSectionContent() {
    const part = this.state.subsectionConfig.contents["part_How_This_Related_to_Cheetah"];
    return (
      <TextBubble
        diameter={520}
        backgroundColorRGB={[254,182,40]}
        title={part.title}
        content={part.content}
      />
    );
  }
}
