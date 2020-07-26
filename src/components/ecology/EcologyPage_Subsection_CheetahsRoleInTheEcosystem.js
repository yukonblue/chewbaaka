/**
 * EcologyPage_Subsection_CheetahsRoleInTheEcosystem.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import { Grid } from 'semantic-ui-react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_savanna_food_web from './assets/savanna_food_web.jpg'

import image_cheetah_hyena_competition from './assets/cheetah_hyena_competition.jpg'
import image_cheetah_lion_competition from './assets/cheetah_lion_competition.jpg'

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
        {this.renderRelationshipsWithOtherSpeciesSectionContent(this.state.subsectionConfig.contents["part_RelationshipsWithOtherSpecies"])}
      </div>
    );
  }

  renderCheetahsRoleSectionContent(part) {
    return (
      <ContentPageSubsectionPart>
        <div className="OverflowHidden">
          <ContentPageSubsectionSubtitle>
            {part.title}
          </ContentPageSubsectionSubtitle>

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

        <div className="Centered">
          <Grid columns={2}>
            <Grid.Column width={8}>
              <ImageView
                image={image_cheetah_hyena_competition}
                caption="Hyenas often try to either steal cheetahs' killed preys or scavenge on the remains."
                width={640}
                height={360}
              />
            </Grid.Column>
            <Grid.Column>
              <ImageView
                image={image_cheetah_lion_competition}
                caption="Lions will often take over the cheetah's prey easily as they are superior in strength."
                width={480}
                height={360}
              />
            </Grid.Column>
          </Grid>
        </div>
      </ContentPageSubsectionPart>
    );
  }
}
