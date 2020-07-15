/**
 * HistoryPage_Subsection_CheetahsInArt.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageParagraph from '../shared/ContentPageParagraph'

import FlexibleContainer from '../shared/FlexibleContainer'

import ImageView from '../shared//ImageView'

export default class HistoryPageSubsectionCheetahsInArt extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahsInArt";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionCheetahsInArt._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionCheetahsInSportsOuterContainer")}>
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
      <div>
        <FlexibleContainer>
          <ContentPageParagraph>
            {this.state.subsectionConfig.contents["paragraph_Cheetah_In_Art_01"]}
          </ContentPageParagraph>
          <ContentPageParagraph>
            {this.state.subsectionConfig.contents["paragraph_Cheetah_In_Art_02"]}
          </ContentPageParagraph>
          <ContentPageParagraph>
            {this.state.subsectionConfig.contents["paragraph_Cheetah_In_Art_03"]}
          </ContentPageParagraph>
          <ContentPageParagraph>
            {this.state.subsectionConfig.contents["paragraph_Cheetah_In_Art_04"]}
          </ContentPageParagraph>
        </FlexibleContainer>
      </div>
    );
  }

  renderRhsContent() {
    return (
      <div>
        <ImageView
          image="https://www.thevintagenews.com/wp-content/uploads/2017/03/the-special-relationship-between-ancient-people-and-cheetahs-3-451x640.jpg"
          caption="Paintings of cheetahs were popular during the Renaissance."
        />
      </div>
    );
  }
}
