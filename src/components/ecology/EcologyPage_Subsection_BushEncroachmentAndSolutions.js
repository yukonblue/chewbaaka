/**
 * EcologyPage_Subsection_BushEncroachmentAndSolutions.js
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
import ContentPageRegularUnorderedList from '../shared/ContentPageRegularUnorderedList'
import ContentPageTwoColumnImageGallary from '../shared/ContentPageTwoColumnImageGallary'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import ImageView from '../shared/ImageView'

import image_bush_encroachment from './assets/bush_encroachment-min.jpg'
import image_Cheetah_Battle_Bush_Encroachment from './assets/Cheetah_Battle_Bush_Encroachment-min.jpg'
import image_fsc_logo from './assets/fsc_logo-min.png'
import image_CCF_Bushblok_Logo from './assets/CCF_Bushblok_Logo-min.jpg'

import image_CCF_Bushblok_01 from './assets/CCF_Bushblok_01-min.jpg'
import image_CCF_Bushblok_02 from './assets/CCF_Bushblok_02-min.jpg'

export default class EcologyPageSubsectionBushEncroachmentAndSolutions extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_BushEncroachmentAndSolutions";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionBushEncroachmentAndSolutions._SUBSECTION_NAME_],
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
        {this.renderPartBushEncroachmentContent(this.state.subsectionConfig.contents["part_BushEncroachment"])}
        {this.renderPartBushEncroachmentThreatensCheetahSurvivalContent(this.state.subsectionConfig.contents["part_BushEncroachmentThreatensCheetahSurvival"])}
        {this.renderImageGalleryContent()}
      </div>
    );
  }

  renderPartBushEncroachmentContent(part) {
    return (
      <div>
        {this.renderBushEncroachmentPart(part)}
        {this.renderSubpartContent(part.content["part_StockFarmingContributionToBushEncroachment"])}
        {this.renderSubpartContent(part.content["part_CheetahSurvivalInBushEncroachedAreas"])}
      </div>
    );
  }

  renderBushEncroachmentPart(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={this.renderBushEncroachmentPartFloatPart()}
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content["part_Intro"].content)}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderBushEncroachmentPartFloatPart() {
    return (
      <ImageView
        image={image_bush_encroachment}
        caption="Thickened thorn bush degrades entire habitat and poses problems for all species of animals in that habitat."
        credit={kStringConstantCheetahConservationFund}
        width={600}
        height={450}
      />
    );
  }

  renderSubpartContent(subpart) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {subpart.title}
        </ContentPageSubsectionSubtitle>

        {ContentPageSubsectionParagraphsContentBinder(subpart.content)}
      </ContentPageSubsectionPart>
    );
  }

  renderPartBushEncroachmentThreatensCheetahSurvivalContent(part) {
    return (
      <div>
        {this.renderPartBushEncroachmentThreatensCheetahSurvivalPart(part)}

        {this.renderCCFBushProjectPart(part)}

        {this.renderBushblockObjectivesSection(part.content["part_Objectives"])}
      </div>
    );
  }

  renderPartBushEncroachmentThreatensCheetahSurvivalPart(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={this.renderPartBushEncroachmentThreatensCheetahSurvivalPartFloatPart()}
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content["part_Intro"].content)}
          RTL={true}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPartBushEncroachmentThreatensCheetahSurvivalPartFloatPart() {
    return (
      <ImageView
        image={image_Cheetah_Battle_Bush_Encroachment}
        caption="Cheetahs face even more hardship in bush encroached territories. They have to adapt in every aspect of their life, such as hunting."
        width={640}
        height={423}
      />
    );
  }

  renderCCFBushProjectPart(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.content["part_CCFBushProject"].title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={this.renderCCFBushProjectPartFloatPart()}
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content["part_CCFBushProject"].content)}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderCCFBushProjectPartFloatPart() {
    return (
      <img
        src={image_fsc_logo}
        alt="FSC logo"
        // Specify the aspect ratio.
        width={246}
        height={300}
      />
    );
  }

  renderBushblockObjectivesSection(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={this.renderBushblockObjectivesSectionFloatPart()}
          fixedPart={this.renderBushblockObjectivesSectionFixedPart(part)}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderBushblockObjectivesSectionFloatPart() {
    return (
      <img
        src={image_CCF_Bushblok_Logo}
        alt="CCF Bushblok"
        // Specify the aspect ratio.
        width={300}
        height={128}
      />
    );
  }

  renderBushblockObjectivesSectionFixedPart(part) {
    return (
      <ContentPageRegularUnorderedList
        obj={part.content["objective_list_items"]}
      />
    );
  }

  renderImageGalleryContent() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageTwoColumnImageGallary
          parts={[
            {
              image: image_CCF_Bushblok_01,
              caption: "Bushblok is produced at CCF from the waste product of habitat restoration.",
              credit: kStringConstantCheetahConservationFund,
              width: 640,
              height: 360
            },
            {
              image: image_CCF_Bushblok_02,
              caption: "Bushblok packaging for different markets.",
              credit: kStringConstantCheetahConservationFund,
              width: 640,
              height: 360
            }
          ]}
        />
      </ContentPageSubsectionPart>
    );
  }
}
