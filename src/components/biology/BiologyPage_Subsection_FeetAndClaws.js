/**
 * BiologyPage_Subsection_FeetAndClaws.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsJoin
} from '../shared/ContentPageSubsectionContentBinder'

import AfricanWildlifeTracksIllustration from './AfricanWildlifeTracksIllustration'

import TextBubble from '../shared/TextBubble'

import ImageView from '../shared/ImageView'

import image_cheetah_paw from './assets/cheetah_paw.jpg'
import image_claws_comparison from './assets/Cheetah_Cat_Dog_Claws_Comparison_Inverted.png'
import image_cheetah_dewclaw from './assets/cheetah_dewclaw.jpg'

export default class BiologyPageSubsectionFeetAndClaws extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_FeetAndClaws";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionFeetAndClaws._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderPartFootContent(this.state.subsectionConfig.contents["part_Foot"])}
        {this.renderPartClawContent(this.state.subsectionConfig.contents["part_Claw"])}
        {this.renderPartDewclawContent(this.state.subsectionConfig.contents["part_Dewclaw"])}
        {this.renderSpoorIllustration()}
      </div>
    );
  }

  renderPartFootContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <ImageView
              image={image_cheetah_paw}
              caption="The paws of the cheetah have a distinct shape compared to some of the other carnivores."
              width={403}
              height={480}
            />
          }
          fixedPart={
            <TextBubble
              diameter={520}
              title={part.title}
              content={ContentPageSubsectionParagraphsJoin(part.content)}
            />
          }
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPartClawContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <TextBubble
              diameter={540}
              title={part.title}
              content={ContentPageSubsectionParagraphsJoin(part.content)}
            />
          }
          fixedPart={
            <ImageView
              image={image_claws_comparison}
              caption="Compare the cheetah's claws to that of the dogs and other cats, it's somewhere in between in terms of retractability."
              width={720}
              height={480}
            />
          }
        />
      </ContentPageSubsectionPart>
    );
  }

  renderPartDewclawContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSideFloatFluidContainer
          floatPart={
            <ImageView
              image={image_cheetah_dewclaw}
              caption="Cheetah dewclaw."
              width={611}
              height={273}
            />
          }
          fixedPart={
            <TextBubble
              diameter={520}
              title={part.title}
              content={ContentPageSubsectionParagraphsJoin(part.content)}
            />
          }
        />
      </ContentPageSubsectionPart>
    );
  }

  renderSpoorIllustration() {
    return (
      <ContentPageSubsectionPart>
        <div className="VerticalCushionPadding"></div>
        <AfricanWildlifeTracksIllustration />
      </ContentPageSubsectionPart>
    );
  }
}
