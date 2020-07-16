/**
 * BiologyPage_Subsection_Lifecycle_Stage_4.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 16, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_cheetah_coalition from './assets/cheetah_coalition.jpg'

export default class BiologyPageSubsectionLifecycleStage4 extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Lifecycle_Stage_4";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLifecycleStage4._SUBSECTION_NAME_]
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

        <ImageView
          image={image_cheetah_coalition}
          width={510}
          caption="A coalition of cheetahs on the lookout."
        />
      </div>
    );
  }
}
