/**
 * FuturePage_Subsection_CommunityEvents.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 22, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { kStringConstantCheetahConservationFund } from '../shared/constants'

import ImageView from '../shared/ImageView'

import image_CCF_Livelihood_Development from './assets/CCF_Livelihood_Development.jpg'

export default class FuturePageSubsectionCommunityEvents extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CommunityEvents";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[FuturePageSubsectionCommunityEvents._SUBSECTION_NAME_]
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
      <ContentPageSideFloatFluidContainer
        floatPart={
          <ImageView
            image={image_CCF_Livelihood_Development}
            caption="CCF helps Namibian artists and artisans to market and sell their work with the Livelihood Development Program."
            credit={kStringConstantCheetahConservationFund}
            width={960}
            height={576}
          />
        }
        fixedPart={ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.content)}
        RTL={true}
      />
    );
  }
}
