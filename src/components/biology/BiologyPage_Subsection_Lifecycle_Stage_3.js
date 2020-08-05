/**
 * BiologyPage_Subsection_Lifecycle_Stage_3.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import MediaLinkButton from '../shared/MediaLinkButton'

import image_fact_banner_what_is_diurnal from './assets/What_is_Diurnal-min.png'

export default class BiologyPageSubsectionLifecycleStage3 extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Lifecycle_Stage_3";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLifecycleStage3._SUBSECTION_NAME_]
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
      <div>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}

        <MediaLinkButton
          href="https://www.nationalgeographic.co.uk/animals/2017/12/stunning-pictures-cheetahs-action"
          title="Stunning Pictures of Cheetahs in Action | National Geographic"
          icon="file image"
        />

        <div className="FactBannerSmallDimension Centered">
          <img
            className="FactBannerSmallDimension"
            src={image_fact_banner_what_is_diurnal}
            alt="What is diurnal?"
          />
        </div>
      </div>
    );
  }
}
