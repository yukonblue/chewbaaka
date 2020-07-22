/**
 * EcologyPage_Subsection_UnderstandingAnimalMovement.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

export default class EcologyPageSubsectionUnderstandingAnimalMovement extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_UnderstandingAnimalMovement";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionUnderstandingAnimalMovement._SUBSECTION_NAME_]
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
        {this.renderIntroPartContent(this.state.subsectionConfig.contents["part_Intro"])}
        {this.renderPopulationCensusTechniquesPartContent(this.state.subsectionConfig.contents["part_PopulationCensusTechniques"])}
      </div>
    );
  }

  renderIntroPartContent(part) {
    return (
      <div>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }

  renderPopulationCensusTechniquesPartContent(part) {
    return (
      <div>
        {
          Object.keys(part.content).map(
            (key, idx) => (
              this.renderPartContent(part.content[key], idx)
            )
          )
        }
      </div>
    );
  }

  renderPartContent(part, key) {
    return (
      <div key={key} className="VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>

        {ContentPageSubsectionParagraphsContentBinder(part.content)}
      </div>
    );
  }
}
