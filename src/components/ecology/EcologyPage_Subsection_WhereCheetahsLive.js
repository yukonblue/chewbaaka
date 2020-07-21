/**
 * EcologyPage_Subsection_WhereCheetahsLive.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import ContentPageParagaph from '../shared/ContentPageParagraph'

import ImageView from '../shared/ImageView'

import image_savannah from './assets/savannah.jpg'

export default class EcologyPageSubsectionWhereCheetahsLive extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_WhereCheetahsLive";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionWhereCheetahsLive._SUBSECTION_NAME_]
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
      <div>
        {this.renderPart1Content(this.state.subsectionConfig.contents["part_WhereCheetahsLive"])}
      </div>
    );
  }

  renderPart1Content(part) {
    return (
      <div className="OverflowHidden">
        <div className="FloatRight">
          <ImageView
            image={image_savannah}
            caption="Savannah"
            width={640}
            height={480}
          />
        </div>

        <ContentPageParagaph>
          {part.content["paragraph_01"]}
        </ContentPageParagaph>
      </div>
    );
  }
}
