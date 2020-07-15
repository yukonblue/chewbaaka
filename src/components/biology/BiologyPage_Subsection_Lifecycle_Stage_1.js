/**
 * BiologyPage_Subsection_Lifecycle_Part1.js
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

import ContentPageParagraph from '../shared/ContentPageParagraph'

export default class BiologyPageSubsectionLifecycleStage1 extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Lifecycle_Stage_1";

  constructor(props) {
    console.log(props.sectionConfig);
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLifecycleStage1._SUBSECTION_NAME_]
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
        <ContentPageParagraph>
          {this.state.subsectionConfig.contents["paragraph_Lifecycle_Stage_1"]}
        </ContentPageParagraph>
      </div>
    );
  }
}
