/**
 * BiologyPage_Subsection_Lifecycle_Stage_3.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 15, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

// import { getElementStyleClassName } from '../../styling/styling'
import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

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
      </div>
    );
  }
}
