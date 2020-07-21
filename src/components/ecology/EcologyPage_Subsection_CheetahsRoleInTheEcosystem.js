/**
 * EcologyPage_Subsection_CheetahsRoleInTheEcosystem.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 21, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_savanna_food_web from './assets/savanna_food_web.jpg'

export default class EcologyPageSubsectionCheetahsRoleInTheEcosystem extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahsRoleInTheEcosystem";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionCheetahsRoleInTheEcosystem._SUBSECTION_NAME_]
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
        {this.renderCheetahsRoleSectionContent(this.state.subsectionConfig.contents["part_CheetahsRole"])}
      </div>
    );
  }

  renderCheetahsRoleSectionContent(part) {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>

        <div className="FloatRight">
          <ImageView
            image={image_savanna_food_web}
            caption="A simplified illustration of the food web of a savanna ecosystem."
            width={750}
            height={646}
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }
}
