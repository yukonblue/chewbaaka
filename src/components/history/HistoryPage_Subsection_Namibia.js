/**
 * HistoryPage_Subsection_Namibia.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_Namibia.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionThreeColumnContentTemplate from '../shared/ContentPageSubsectionThreeColumnContentTemplate'

import {
  ContentPageSubsectionColumnDataBinder,
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import LineBreak from '../shared/LineBreak'

import MediaLinkButton from '../shared/MediaLinkButton'

import StatsLabel from '../shared/StatsLabel'

import image_Cheetah_Occurrence_Range_Map from './assets/Cheetah_Occurrence_Range_Map_Namibia-min.png'

export default class HistoryPageSubsectionNamibia extends React.Component {

  static _SUBSECTION_NAME_        =   "subsection_Namibia";
  static _COLUMN_DATA_NAME_LHS_   =   "Cheetah_Capital_Of_The_World";
  static _COLUMN_DATA_NAME_RHS_   =   "Namibia_Home_For_The_Future";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionNamibia._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className="HistoryPageSubsectionNamibiaOuterContainer">
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="HistoryPageSubsectionNamibiaInnerContainer">
        <div>
          <ContentPageSubsectionThreeColumnContentTemplate
            lhsColumn={
              ContentPageSubsectionColumnDataBinder(
                this.state.subsectionConfig.contents[HistoryPageSubsectionNamibia._COLUMN_DATA_NAME_LHS_],
                this.renderLhsColumnContentBinder
              )
            }

            middleColumn={
              {content: this.renderMiddleColumnContent()}
            }

            rhsColumn={
              ContentPageSubsectionColumnDataBinder(
                this.state.subsectionConfig.contents[HistoryPageSubsectionNamibia._COLUMN_DATA_NAME_RHS_],
                this.renderRhsColumnContentBinder
              )
            }
          />
        </div>

        <LineBreak lines={2} />

        <MediaLinkButton
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5729830/"
          title='The distribution and numbers of cheetah (Acinonyx jubatus) in southern Africa'
          icon="file alternate outline"
        />
      </div>
    );
  }

  renderLhsColumnContentBinder(content) {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(content)}

        <StatsLabel
          value="21%"
          label="of the world's wild cheetahs live in Namibia"
          color="orange"
        />
      </div>
    );
  }

  renderMiddleColumnContent() {
    return (
      <div>
        <ImageView
          width={640}
          height={640}
          image={image_Cheetah_Occurrence_Range_Map}
          caption="Cheetah distribution and population density in Namibia."
        />
      </div>
    );
  }

  renderRhsColumnContentBinder(content) {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(content)}

        <StatsLabel
          value="90%"
          label="of Namibia's cheetahs live on communal and commercial livestock and game farms"
          color="yellow"
        />
      </div>
    );
  }
}
