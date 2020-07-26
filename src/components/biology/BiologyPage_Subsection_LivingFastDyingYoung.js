/**
 * BiologyPage_Subsection_LivingFastDyingYoung.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import image_cheetah_coalition from './assets/cheetah_coalition_02.jpg'
import image_cheetah_face_hyena from './assets/cheetah_face_hyena.jpg'

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
      <div>
        {this.renderPart1()}
        {this.renderPart2()}
      </div>
    );
  }

  renderPart1() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(
              this.state.subsectionConfig.contents.part1
            )
          }
          rhsColumn={{content: this.renderPart1RhsContent()}}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPart2() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderPart2LhsContent()}}
          rhsColumn={
            ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(
              this.state.subsectionConfig.contents.part2
            )
          }
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPart1RhsContent() {
    return (
      <ImageView
        image={image_cheetah_coalition}
        width={510}
        caption="A coalition of cheetahs on the lookout."
      />
    );
  }

  renderPart2LhsContent() {
    return (
      <ImageView
        image={image_cheetah_face_hyena}
        width={640}
        caption="Cheetahs often have to come to face hyenas in competition of food."
        credit="Steve Volkwyn"
      />
    )
  }
}
