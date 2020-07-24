/**
 * FuturePage_Subsection_SchoolsTeachersLearners.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 23, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageSlidingGallery from '../shared/ImageSlidingGallery'

import image_CCF_Predator_Preyground from './assets/CCF_Predator_Preyground.jpg'
import image_CCF_Cheetah_Museum from './assets/CCF_Cheetah_Museum.jpg'
import image_CCF_Cheetah_Museum_02 from './assets/CCF_Cheetah_Museum_02.jpg'
import image_CCF_Education_Outreach from './assets/CCF_Education_Outreach.jpg'

export default class FuturePageSubsectionSchoolsTeachersLearners extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_SchoolsTeachersLearners";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionSchoolsTeachersLearners._SUBSECTION_NAME_]
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
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderLhsContent()}}
          rhsColumn={{content: this.renderRhsContent()}}
        />
      </div>
    );
  }

  renderLhsContent() {
    return (
      ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)
    );
  }

  renderRhsContent() {
    return (
      <ImageSlidingGallery
        slides={[
          {
            image: image_CCF_Predator_Preyground,
            caption: "CCF's Predator Preyground. (Image credit: Cheetah Conservation Fund)"
          },
          {
            image: image_CCF_Cheetah_Museum,
            caption: "CCF's Cheetah Museum. (Image credit: Cheetah Conservation Fund)"
          },
          {
            image: image_CCF_Cheetah_Museum_02,
            caption: "School kids visit Cheetah Museum on field trip. (Image credit: Cheetah Conservation Fund)"
          },
          {
            image: image_CCF_Education_Outreach,
            caption: "Educational outreach at Namibian school. (Image credit: Cheetah Conservation Fund)"
          }
        ]}
      />
    );
  }
}
