/**
 * FuturePage_Subsection_InternshipsAndVolunteering.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 24, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import MediaLinkButton from '../shared/MediaLinkButton'

import image_CCF_GetInvolved_Volunteer from './assets/CCF_GetInvolved_Volunteer.jpg'

export default class FuturePageSubsectionInternshipsAndVolunteering extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_InternshipsAndVolunteering";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionInternshipsAndVolunteering._SUBSECTION_NAME_]
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
        {this.renderBannerImage()}
        {this.renderBodyContent()}
        {this.renderTailContent()}
      </div>
    );
  }

  renderBannerImage() {
    const width = 1300;
    return (
      <div className="Centered" style={{width: width}}>
        <img
          style={{width: width}}
          src={image_CCF_GetInvolved_Volunteer} alt="CCF Volunteering"
        />
      </div>
    );
  }

  renderBodyContent() {
    return (
      <ContentPageSubsectionTwoColumnContentTemplate
        lhsColumn={{content: this.renderPartInternshipsContent(this.state.subsectionConfig.content["part_Internships"])}}
        rhsColumn={{content: this.renderPartVolunteeringContent(this.state.subsectionConfig.content["part_Volunteering"])}}
      />
    );
  }

  renderPartInternshipsContent(part) {
    return (
      <div>
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}

        <ul>
          {
            part["internship_list_items"].map(
              (item, idx) => (
                <li key={idx} className="ContentPageBulletTextStyle">{item}</li>
              )
            )
          }
        </ul>
      </div>
    );
  }

  renderPartVolunteeringContent(part) {
    return (
      <div>
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }

  renderTailContent() {
    return (
      <MediaLinkButton
        title="Learn more about CCF's Volunteer Program"
        href="https://cheetah.org/get-involved/volunteer/"
        icon="file alternate outline"
      />
    );
  }
}
