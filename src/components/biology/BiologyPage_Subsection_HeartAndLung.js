/**
 * BiologyPage_Subsection_HeartAndLung.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import CheetahOlympics from './CheetahOlympics'

import image_Cheetah_Travel from './assets/Cheetah_Travel_480x480-min.png'

export default class BiologyPageSubsectionHearAndLung extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_HearAndLung";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionHearAndLung._SUBSECTION_NAME_]
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
      <div className="BiologyPageSubsectionHearAndLungInnerContainer">
        {this.renderPart1()}
        {this.renderPart2()}
      </div>
    );
  }

  renderPart1() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderLhsContent()}}
          rhsColumn={{content: this.renderRhsContent()}}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPart2() {
    return (
      <ContentPageSubsectionPart>
        <CheetahOlympics />
      </ContentPageSubsectionPart>
    );
  }

  renderLhsContent() {
    return (
      ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part1.content)
    );
  }

  renderRhsContent() {
    return (
      <div>
        <div className="Centered" style={{width: 420}}>
          <img
            src={image_Cheetah_Travel}
            alt="Cheetah run illustration"
            width={420}
          />
        </div>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part2.content)}
      </div>
    );
  }
}
