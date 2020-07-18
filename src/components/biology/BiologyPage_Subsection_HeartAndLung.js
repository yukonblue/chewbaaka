/**
 * BiologyPage_Subsection_HeartAndLung.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 17, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import CheetahOlympics from './CheetahOlympics'

import QnAPopUp from '../shared/QnAPopUp'

import './BiologyPage_Subsection_HeartAndLung.css'

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
      <div className="BiologyPageSubsectionHearAndLungInnerContainer">
        <ContentPageSubsectionTwoColumnContentTemplate
            lhsColumn={{content: this.renderLhsContent()}}
            rhsColumn={{content: this.renderRhsContent()}}
          />

        <CheetahOlympics />

        <div className="HeartAndLungSubsectionQnAPopUpContainer">
          <QnAPopUp
            content="The pronghorn antelope is the fastest land animal in North America. When the first cheetahs ancestors roamed on the continent of North America, they used to prey on pronghorn antelopes."
          />
        </div>
      </div>
    );
  }

  renderLhsContent() {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part1.content)}
      </div>
    );
  }

  renderRhsContent() {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part2.content)}
      </div>
    );
  }
}
