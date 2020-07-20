/**
 * BiologyPage_Subsection_Communication.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 19, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import MediaLinkButton from '../shared/MediaLinkButton'

import TextBubble from '../shared/TextBubble'

export default class BiologyPageSubsectionCommunication extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Communication";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionCommunication._SUBSECTION_NAME_]
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
    );
  }

  renderVocalizationSectionContent(part) {
    return (
      <div className="VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>

        <div className="OverflowHidden">
          <div className="FloatRight">
            <TextBubble
              diameter={320}
              backgroundColorRGB={[187,143,206]}
              title={part.title}
              content={part.subtitle}
            />
          </div>
          {this.renderVocalizationList(part.content["vocalizations"])}
        </div>

        <MediaLinkButton
          href="https://www.youtube.com/watch?v=3kFl_TY3iUg"
          title="Cheetah Awareness Day - Vocalizations | YouTube"
        />
      </div>
    );
  }

  renderVocalizationList(vocalizations) {
    return (
      <div className="">
        <ul>
          {vocalizations.map(this.renderVocalizationItem)}
        </ul>
      </div>
    );
  }

  renderVocalizationItem(item, idx) {
    return (
      <li key={idx} className="ContentPageBulletTextStyle">
        <b>{item.name}</b>
         {" - " + item.description}
      </li>
    );
  }

  renderIntroSectionContent(part) {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }

  renderContent() {
    return (
      <div>
        {this.renderIntroSectionContent(this.state.subsectionConfig.contents["part_Intro"])}
        {this.renderVocalizationSectionContent(this.state.subsectionConfig.contents["part_Volcalizations"])}
      </div>
    );
  }
}
