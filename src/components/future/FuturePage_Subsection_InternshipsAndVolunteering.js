/**
 * FuturePage_Subsection_InternshipsAndVolunteering.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import Media from 'react-media'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'
import ContentPageRegularUnorderedList from '../shared/ContentPageRegularUnorderedList'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { requireContext } from '../shared/workarounds/RequireContextMock'

import { GetImagePath } from '../shared/Path'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import MediaLinkButton from '../shared/MediaLinkButton'

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class FuturePageSubsectionInternshipsAndVolunteering extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_InternshipsAndVolunteering";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionInternshipsAndVolunteering._SUBSECTION_NAME_],
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
        {this.renderBannerImage()}
        {this.renderBodyContent()}
        {this.renderTailContent()}
      </div>
    );
  }

  renderBannerImage() {
    return (
      <ContentPageSubsectionPart>
        <CenteredFullWidthContainer width={1300}>
          {this.renderGetInvolvedVolunteerImagePart()}
        </CenteredFullWidthContainer>
      </ContentPageSubsectionPart>
    );
  }

  renderGetInvolvedVolunteerImagePart() {
    if (__TEST__) {
      return this.renderGetInvolvedVolunteerImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderGetInvolvedVolunteerImage(matches))
        }
      </Media>
    );
  }

  renderGetInvolvedVolunteerImage(matches) {
    const context = __TEST__ ? () => (requireContext(__dirname, "./assets/")) : () => (require.context("./assets/"));
    const images = context();

    return (
      <FluidImageWrapper
        src={images(GetImagePath("./CCF_GetInvolved_Volunteer", ".jpg", matches))}
        alt="CCF Volunteering"
        center
        // Aspect ratio
        width={1300}
        height={433}
      />
    );
  }

  renderBodyContent() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderPartInternshipsContent(this.state.subsectionConfig.content["part_Internships"])}}
          rhsColumn={{content: this.renderPartVolunteeringContent(this.state.subsectionConfig.content["part_Volunteering"])}}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPartInternshipsContent(part) {
    return (
      <div>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}

        <ContentPageRegularUnorderedList
          obj={part["internship_list_items"]}
        />
      </div>
    );
  }

  renderPartVolunteeringContent(part) {
    return (
      <div>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }

  renderTailContent() {
    return (
      <ContentPageSubsectionPart>
        <MediaLinkButton
          title="Learn more about CCF's Volunteer Program"
          href="https://cheetah.org/get-involved/volunteer/"
          icon="file alternate outline"
        />
      </ContentPageSubsectionPart>
    );
  }
}
