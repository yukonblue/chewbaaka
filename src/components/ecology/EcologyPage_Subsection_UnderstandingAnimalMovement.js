/**
 * EcologyPage_Subsection_UnderstandingAnimalMovement.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import ImageSlidingGalleryDiscrete from '../shared/ImageSlidingGalleryDiscrete'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import image_cheetah_collaring from './assets/cheetah_collaring-min.jpg'
import image_cheetah_satellite_tracking from './assets/cheetah_satellite_tracking-min.jpg'
import image_camera_trap_locations_in_Waterberg_Conservancy from './assets/camera_trap_locations_in_Waterberg_Conservancy-min.jpg'

export default class EcologyPageSubsectionUnderstandingAnimalMovement extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_UnderstandingAnimalMovement";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionUnderstandingAnimalMovement._SUBSECTION_NAME_],
      accentColor: props.sectionConfig.accentColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        accentColor={this.state.accentColor}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderIntroPartContent(this.state.subsectionConfig.contents["part_Intro"])}
        {this.renderPopulationCensusTechniquesPartContent(this.state.subsectionConfig.contents["part_PopulationCensusTechniques"])}
      </div>
    );
  }

  renderIntroPartContent(part) {
    return (
      <ContentPageSubsectionPart>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </ContentPageSubsectionPart>
    );
  }

  renderPopulationCensusTechniquesPartContent(part) {
    return (
      <div>
        {
          Object.keys(part.content).map(
            (key, idx) => (
              this.renderPartContent(part.content[key], idx)
            )
          )
        }
        {this.renderImageGallery()}
      </div>
    );
  }

  renderPartContent(part, key) {
    return (
      <ContentPageSubsectionPart key={key}>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </ContentPageSubsectionPart>
    );
  }

  renderImageGallery() {
    const componentWidth = 720;

    return (
      <ContentPageSubsectionPart>
        <CenteredFullWidthContainer width={componentWidth}>
          <ImageSlidingGalleryDiscrete
            width={componentWidth}
            height={432}
            slides={[
              {
                image: image_camera_trap_locations_in_Waterberg_Conservancy,
                caption: "Cheetah movement study with camera traps in the Greater Waterberg Conservancy.",
                credit: kStringConstantCheetahConservationFund
              },
              {
                image: image_cheetah_collaring,
                caption: "A cheetah is collared in preparation for release.",
                credit: kStringConstantCheetahConservationFund
              },
              {
                image: image_cheetah_satellite_tracking,
                caption: "Satellite tracking of a collared and released cheetah.",
                credit: kStringConstantCheetahConservationFund
              }
            ]}
          />
        </CenteredFullWidthContainer>
      </ContentPageSubsectionPart>
    );
  }
}
