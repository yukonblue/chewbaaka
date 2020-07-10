/**
 * HistoryPage_Subsection_CheetahAndManImage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_CheetahAndManImage.css'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

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
          <p>{this.state.subsectionConfig.contents["paragraph_Cheetah_And_Man_01"]}</p>
          <p>{this.state.subsectionConfig.contents["paragraph_Cheetah_And_Man_02"]}</p>
          <p>{this.state.subsectionConfig.contents["paragraph_Cheetah_And_Man_03"]}</p>
          <p>{this.state.subsectionConfig.contents["paragraph_Cheetah_And_Man_04"]}</p>
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
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/War_trophies_Deir_el_Bahari_Wellcome_L0027402.jpg/440px-War_trophies_Deir_el_Bahari_Wellcome_L0027402.jpg",
              caption: "Researchers used the Tuxtla Statuette to decipher the epi-Olmec writing system, which represents both syllables and words"
            },
            {
              image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Cheetahs_nawab_oudh1844.jpg",
              caption: "Listen to a Tsimshian (Pacific Northwest Native) storyteller recount the family history painted on a 38-foot-long house front as specific parts of the design light up."
            }
          ]}
        />
      </div>
    );
  }
}
