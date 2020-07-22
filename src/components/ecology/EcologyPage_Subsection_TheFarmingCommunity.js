/**
 * EcologyPage_Subsection_TheFarmingCommunity.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 21, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import ContentPageParagraph from '../shared/ContentPageParagraph'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

export default class EcologyPageSubsectionTheFarmingCommunity extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_TheFarmingCommunity";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionTheFarmingCommunity._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div>
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        <ContentPageParagraph>
          {this.state.subsectionConfig.subtitle}
        </ContentPageParagraph>

        {
          Object.keys(this.state.subsectionConfig.contents).map(
            (key, idx) => (
              this.renderPartContent(this.state.subsectionConfig.contents[key], idx)
            )
          )
        }
      </div>
    );
  }

  renderPartContent(part, idx) {
    return (
      <div key={idx} className="VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }
}
