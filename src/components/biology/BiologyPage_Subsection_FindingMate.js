/**
 * BiologyPage_Subsection_FindingMate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 18, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_cheetah_scent_marking from './assets/cheetah_scent_marking.jpg'

export default class BiologyPageSubsectionFindingMate extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_FindingMate";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionFindingMate._SUBSECTION_NAME_]
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
      <div className="OverflowHidden">
        <div className="FloatRight">
          <ImageView
            image={image_cheetah_scent_marking}
            caption="Cheetahs often mark their scent on tree trunks with their urine. This behavior is common among cats."
            width={720}
            height={480}
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
      </div>
    );
  }
}
