/**
 * HistoryPage_Subsection_CheetahsInArt.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

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
      ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)
    );
  }

  renderRhsContent() {
    return (
      <ImageView
        image="https://www.thevintagenews.com/wp-content/uploads/2017/03/the-special-relationship-between-ancient-people-and-cheetahs-3-451x640.jpg"
        caption="Paintings of cheetahs were popular during the Renaissance."
      />
    );
  }
}
