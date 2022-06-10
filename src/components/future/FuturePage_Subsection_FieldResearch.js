/**
 * FuturePage_Subsection_FieldResearch.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import MediaLinkButton from '../shared/MediaLinkButton'

export default class FuturePageSubsectionFieldResearch extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_FieldResearch";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionFieldResearch._SUBSECTION_NAME_],
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
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderPartContent(this.state.subsectionConfig.content["part_VeterinaryClinic"])}}
          rhsColumn={{content: this.renderPartContent(this.state.subsectionConfig.content["part_EcologicalStudies"])}}
        />

        <div className="VerticalCushionPadding">
          <MediaLinkButton
            title="Learn more about CCF's research work"
            href="https://cheetah.org/about/what-we-do/research/"
            icon="file alternate outline"
          />
        </div>
      </div>
    );
  }

  renderPartContent(part) {
    return (
      <div>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }
}
