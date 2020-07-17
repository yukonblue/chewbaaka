/**
 * BiologyPage_Subsection_RipAndTear.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 17, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_cheetah_teeth from './assets/cheetah_teeth.jpg'

export default class BiologyPageSubsectionRipAndTear extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_RipAndTear";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionRipAndTear._SUBSECTION_NAME_]
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
            image={image_cheetah_teeth}
            caption="The three types of teeth of the cheetah: the incisors, canines, and carnassial."
            width={640}
            height={505}
          />
        </div>
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
      </div>
    );
  }
}
