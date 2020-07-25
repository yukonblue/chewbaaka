/**
 * FuturePage_Subsection_CommunityEvents.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_CCF_Livelihood_Development from './assets/CCF_Livelihood_Development.jpg'

export default class FuturePageSubsectionCommunityEvents extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CommunityEvents";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionCommunityEvents._SUBSECTION_NAME_]
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
      <div className="OverflowHidden">
        <div className="FloatLeft HorizontalCusionPadding">
          <ImageView
            image={image_CCF_Livelihood_Development}
            caption="CCF helps Namibian artists and artisans to market and sell their work with the Livelihood Development Program."
            credit="Cheetah Conservation Fund"
            width={960}
            height={576}
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.content)}
      </div>
    );
  }
}
