/**
 * HistoryPage_Subsection_CheetahsInSports.js
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

import ImageSlidingGallery from '../shared/ImageSlidingGallery'

export default class HistoryPageSubsectionCheetahsInSports extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_CheetahsInSports";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionCheetahsInSports._SUBSECTION_NAME_]
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
        <ImageSlidingGallery
          slides={[
            {
              image: "https://uploads0.wikiart.org/images/george-stubbs/cheetah-with-two-indian-servants-and-a-deer.jpg",
              caption: "The painting A Cheetah with Two Indians gifted to the English King George III by the Tippoo Sultan in 1799."
            },
            {
              image: "https://www.thevintagenews.com/wp-content/uploads/2017/03/the-special-relationship-between-ancient-people-and-cheetahs-1-640x446.jpg",
              caption: "Cheetah Hunt",
            },
            {
              image: "https://www.thehindu.com/sci-tech/energy-and-environment/hb4cnq/article30295374.ece/alternates/FREE_960/15SM4AlwarCheetahjpg",
              caption: "This 1878 painting from Marianne North’s book shows cheetahs and lynxes chained to charpais by their keepers in Alwar."
            }
          ]}
        />
      </div>
    );
  }

  renderRhsContent() {
    return (
      ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)
    );
  }
}
