/**
 * EcologyPage_Subsection_BushEncroachmentAndSolutions.js
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

import image_Cheetah_Battle_Bush_Encroachment from './assets/Cheetah_Battle_Bush_Encroachment.jpg'
import image_fsc_logo from './assets/fsc_logo.png'
import image_CCF_Bushblok_Logo from './assets/CCF_Bushblok_Logo.jpg'

export default class EcologyPageSubsectionBushEncroachmentAndSolutions extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_BushEncroachmentAndSolutions";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionBushEncroachmentAndSolutions._SUBSECTION_NAME_]
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
        {this.renderPartBushEncroachmentContent(this.state.subsectionConfig.contents["part_BushEncroachment"])}
        {this.renderPartBushEncroachmentThreatensCheetahSurvivalContent(this.state.subsectionConfig.contents["part_BushEncroachmentThreatensCheetahSurvival"])}
      </div>
    );
  }

  renderPartBushEncroachmentContent(part) {
    return (
      <div>
        <div className="VerticalCushionPadding">
          <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>
          {ContentPageSubsectionParagraphsContentBinder(part.content["part_Intro"].content)}
        </div>

        {this.renderSubpartContent(part.content["part_StockFarmingContributionToBushEncroachment"])}

        {this.renderSubpartContent(part.content["part_CheetahSurvivalInBushEncroachedAreas"])}
      </div>
    );
  }

  renderSubpartContent(subpart) {
    return (
      <div className="VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{subpart.title}</h4>

        {ContentPageSubsectionParagraphsContentBinder(subpart.content)}
      </div>
    );
  }

  renderPartBushEncroachmentThreatensCheetahSurvivalContent(part) {
    return (
      <div>
        <div className="VerticalCushionPadding">
          <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>
          <div className="OverflowHidden">
            <div className="FloatLeft HorizontalCusionPadding">
              <ImageView
                image={image_Cheetah_Battle_Bush_Encroachment}
                caption="Cheetahs faced even more hardship in bush encroached territories. They have to adapt in every aspect of their life, such as hunting."
                width={640}
                height={423}
              />
            </div>

            {ContentPageSubsectionParagraphsContentBinder(part.content["part_Intro"].content)}
          </div>
        </div>

        <div className="VerticalCushionPadding">
          <h4 className="ContentPageSubsectionSubtitle">{part.content["part_CCFBushProject"].title}</h4>
          <div className="OverflowHidden">
            <div className="FloatRight HorizontalCusionPadding">
              <img
                src={image_fsc_logo}
                alt="FSC logo"
                width={180}
              />
            </div>

            {ContentPageSubsectionParagraphsContentBinder(part.content["part_CCFBushProject"].content)}
          </div>
        </div>

        {this.renderBushblockObjectivesSection(part.content["part_Objectives"])}
      </div>
    );
  }

  renderBushblockObjectivesSection(part) {
    return (
      <div className="VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>

        <div className="OverflowHidden">
          <div className="FloatRight HorizontalCusionPadding">
            <img
              src={image_CCF_Bushblok_Logo}
              alt="CCF Bushblok"
            />
          </div>
          <ul>
            {
              part.content["objective_list_items"].map(
                (item, idx) => (
                  <li key={idx} className="ContentPageBulletTextStyle">{item}</li>
                )
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}
