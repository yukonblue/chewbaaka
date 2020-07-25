/**
 * EcologyPage_Subsection_UnderstandingAnimalMovement.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import ImageSlidingGalleryDiscrete from '../shared/ImageSlidingGalleryDiscrete'

import { kImageCreditStringCCF } from '../shared/constants'

import image_Spoor_Tracking_Data_Collection from './assets/Spoor_Tracking_Data_Collection.jpg'
import image_cheetah_collaring from './assets/cheetah_collaring.jpg'
import image_cheetah_satellite_tracking from './assets/cheetah_satellite_tracking.jpg'
import image_camera_trap_locations_in_Waterberg_Conservancy from './assets/camera_trap_locations_in_Waterberg_Conservancy.jpg'

export default class EcologyPageSubsectionUnderstandingAnimalMovement extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_UnderstandingAnimalMovement";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionUnderstandingAnimalMovement._SUBSECTION_NAME_]
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
        {this.renderIntroPartContent(this.state.subsectionConfig.contents["part_Intro"])}
        {this.renderPopulationCensusTechniquesPartContent(this.state.subsectionConfig.contents["part_PopulationCensusTechniques"])}
      </div>
    );
  }

  renderIntroPartContent(part) {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
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
      <div key={key} className="VerticalCushionPadding">
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }

  renderImageGallery() {
    const componentWidth = 720;

    return (
      <div className="Centered" style={{width: componentWidth}}>
        <ImageSlidingGalleryDiscrete
          width={componentWidth}
          height={480}
          slides={[
            {
              image: image_Spoor_Tracking_Data_Collection,
              caption: "Spoor tracking data collection."
            },
            {
              image: image_camera_trap_locations_in_Waterberg_Conservancy,
              caption: "Cheetah movement study with camera traps in the Greater Waterberg Conservancy.",
              credit: kImageCreditStringCCF
            },
            {
              image: image_cheetah_collaring,
              caption: "A cheetah is collared in preparation for release.",
              credit: kImageCreditStringCCF
            },
            {
              image: image_cheetah_satellite_tracking,
              caption: "Satellite tracking of a collared and released cheetah.",
              credit: kImageCreditStringCCF
            }
          ]}
        />
      </div>
    );
  }
}
