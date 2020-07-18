/**
 * BiologyPage_Subsection_LivingFastDyingYoung.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 18, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import {
  ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

export default class BiologyPageSubsectionLivingFastDyingYoung extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_LivingFastDyingYoung";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLivingFastDyingYoung._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className="">
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="">
        <div>
          <ContentPageSubsectionTwoColumnContentTemplate
            lhsColumn={
              ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(
                this.state.subsectionConfig.contents.part1
              )
            }
            rhsColumn={{content: this.renderPart1RhsContent()}}
          />
        </div>
        <div>
          <ContentPageSubsectionTwoColumnContentTemplate
            lhsColumn={{content: this.renderPart2LhsContent()}}
            rhsColumn={
              ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(
                this.state.subsectionConfig.contents.part2
              )
            }
          />
        </div>
      </div>
    );
  }

  renderPart1RhsContent() {
    return (
      <div>

      </div>
    );
  }

  renderPart2LhsContent() {
    return (
      <div>
        
      </div>
    )
  }
}
