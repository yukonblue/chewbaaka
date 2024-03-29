/**
 * BiologyPage_Subsection_Communication.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageRegularUnorderedList from '../shared/ContentPageRegularUnorderedList'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import MediaLinkButton from '../shared/MediaLinkButton'

import TextBubble from '../shared/TextBubble'

export default class BiologyPageSubsectionCommunication extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Communication";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionCommunication._SUBSECTION_NAME_],
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
    );
  }

  renderVocalizationSectionContent(part) {
    return (
      <div className="VerticalCushionPadding">
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

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

        <div className="VerticalCushionPadding">
          <MediaLinkButton
            href="https://www.youtube.com/watch?v=3kFl_TY3iUg"
            title="Cheetah Awareness Day - Vocalizations "
            icon="youtube"
          />
        </div>
      </div>
    );
  }

  renderVocalizationList(vocalizations) {
    return (
      <ContentPageRegularUnorderedList
        obj={vocalizations}
        formatter={this.vocalizationListItemFormatter}
      />
    );
  }

  vocalizationListItemFormatter(item) {
    return (
      <span>
        <b>{item.name}</b>
        {" - " + item.description}
      </span>
    );
  }

  renderIntroSectionContent(part) {
    return (
      ContentPageSubsectionParagraphsContentBinder(part.content)
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
