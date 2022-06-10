/**
 * EcologyPage_Subsection_CheetahsRoleInTheEcosystem.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jun 09, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'
import ContentPageTwoColumnImageGallary from '../shared/ContentPageTwoColumnImageGallary'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_savanna_food_web from './assets/savanna_food_web-min.jpg'

import image_cheetah_hyena_competition from './assets/cheetah_hyena_competition-min.jpg'
import image_cheetah_lion_competition from './assets/cheetah_lion_competition-min.jpg'

export default class EcologyPageSubsectionCheetahsRoleInTheEcosystem extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahsRoleInTheEcosystem";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionCheetahsRoleInTheEcosystem._SUBSECTION_NAME_],
      bgColor: props.sectionConfig.bgColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        bgColor={this.state.bgColor}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderCheetahsRoleSectionContent(this.state.subsectionConfig.contents["part_CheetahsRole"])}
        {this.renderRelationshipsWithOtherSpeciesSectionContent(this.state.subsectionConfig.contents["part_RelationshipsWithOtherSpecies"])}
      </div>
    );
  }

  renderCheetahsRoleSectionContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={
            <ImageView
              image={image_savanna_food_web}
              caption="A simplified illustration of the food web of a savanna ecosystem."
              width={640}
              height={552}
            />
          }
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content)}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderRelationshipsWithOtherSpeciesSectionContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        {ContentPageSubsectionParagraphsContentBinder(part.content)}

        <ContentPageTwoColumnImageGallary
          parts={[
            {
              image: image_cheetah_hyena_competition,
              caption: "Hyenas often try to either steal cheetahs' killed preys or scavenge on the remains.",
              width: 483,
              height: 269
            },
            {
              image: image_cheetah_lion_competition,
              caption: "Lions will often take over the cheetah's prey easily as they are superior in strength.",
              width: 480,
              height: 360
            }
          ]}
        />
      </ContentPageSubsectionPart>
    );
  }
}
