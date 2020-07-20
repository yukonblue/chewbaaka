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

import MediaLinkButton from '../shared/MediaLinkButton'

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

  renderContent() {
    return (
      <div>
        <MediaLinkButton
          href="https://www.youtube.com/watch?v=3kFl_TY3iUg"
          title="Cheetah Awareness Day - Vocalizations | YouTube"
        />
      </div>
    );
  }
}
