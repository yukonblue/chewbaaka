/**
 * HistoryPage_Subsection_CheetahAndManImage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 15, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_CheetahAndManImage.css'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import FlexibleContainer from '../shared/FlexibleContainer'

import ImageSlidingGallery from '../shared/ImageSlidingGallery'

export default class HistoryPageSubsectionCheetahAndManImage extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_RelationshipsWithMan";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionCheetahAndManImage._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionCheetahAndManImageOuterContainer")}>
        <ContentPageSubsectionTemplate title={this.state.subsectionConfig.title} content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionCheetahAndManImageInnerContainer")}>
        <div>
          <ContentPageSubsectionTwoColumnContentTemplate
            lhsColumn={{content: this.renderLhsContent()}}
            rhsColumn={{content: this.renderRhsContent()}}
          />
        </div>
      </div>
    );
  }

  renderLhsContent() {
    return (
      <div className="HistoryPageSubsectionCheetahAndManImageContentTextContainer">
        <FlexibleContainer>
          {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
        </FlexibleContainer>
      </div>
    );
  }

  renderRhsContent() {
    return (
      <div>
        <ImageSlidingGallery
          slides={[
            {
              image: "https://www.thevintagenews.com/wp-content/uploads/2018/12/anubis_attending_the_mummy_of_sennedjem.jpg",
              caption: "Mafdet’s head on the bed where the mummy is placed."
            },
            {
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/War_trophies_Deir_el_Bahari_Wellcome_L0027402.jpg/440px-War_trophies_Deir_el_Bahari_Wellcome_L0027402.jpg",
              caption: "Cheetahs in Egyptian art."
            },
            {
              image: "https://www.thevintagenews.com/wp-content/uploads/2018/12/egyptian_chariot_colour-640x446.jpg",
              caption: "Egyptian chariot, accompanied by a cheetah and slave."
            }
          ]}
        />
      </div>
    );
  }
}
