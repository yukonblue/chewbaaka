/**
 * EcologyPage_Subsection_TheFarmingCommunity.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageParagraph from '../shared/ContentPageParagraph'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import ImageView from '../shared/ImageView'

import image_CCF_GWL_map from './assets/CCF_GWL_map.jpg'

export default class EcologyPageSubsectionTheFarmingCommunity extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_TheFarmingCommunity";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionTheFarmingCommunity._SUBSECTION_NAME_]
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
        <ContentPageParagraph>
          {this.state.subsectionConfig.subtitle}
        </ContentPageParagraph>

        {
          Object.keys(this.state.subsectionConfig.contents).map(
            (key, idx) => (
              this.renderPartContent(this.state.subsectionConfig.contents[key], idx)
            )
          )
        }
      </div>
    );
  }

  renderPartContent(part, idx) {
    if (part.is_part_Conservancies) {
      return this.renderPartWithImageContent(part, idx);
    }
    return (
      <ContentPageSubsectionPart key={idx}>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </ContentPageSubsectionPart>
    );
  }

  renderPartWithImageContent(part, idx) {
    return (
      <ContentPageSubsectionPart key={idx}>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        <div className="OverflowHidden">
          <div className="FloatRight">
            <ImageView
              image={image_CCF_GWL_map}
              caption="Cheetah Conservation Fund works with communal farmers and people living around the Greater Waterberg Landscape Conservancy."
              credit={kStringConstantCheetahConservationFund}
              width={600}
              height={471}
            />
          </div>

          {ContentPageSubsectionParagraphsContentBinder(part.content)}
        </div>
      </ContentPageSubsectionPart>
    );
  }
}
