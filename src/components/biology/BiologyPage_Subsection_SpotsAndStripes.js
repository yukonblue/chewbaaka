/**
 * BiologyPage_Subsection_SpotsAndStripes.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 18, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import BigCatSpotsIllustration from './BigCatSpotsIllustration'

export default class BiologyPageSubsectionSpotsAndStripes extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_SpotsAndStripes";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionSpotsAndStripes._SUBSECTION_NAME_]
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
      <div className="">
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}

        <BigCatSpotsIllustration />
      </div>
    );
  }
}
