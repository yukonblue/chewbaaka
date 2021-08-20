/**
 * BiologyPage_Subsection_FeetAndClaws.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Aug 20, 2021
 */

import React, { Suspense } from 'react'

import Media from 'react-media'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsJoin
} from '../shared/ContentPageSubsectionContentBinder'

import { GetImagePath } from '../shared/Path'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

import TextBubble from '../shared/TextBubble'

import ImageView from '../shared/ImageView'

// import AfricanWildlifeTracksIllustration from './AfricanWildlifeTracksIllustration'

import image_cheetah_paw from './assets/cheetah_paw-min.jpg'
import image_cheetah_dewclaw from './assets/cheetah_dewclaw-min.jpg'

import './BiologyPage_Subsection_FeetAndClaws.css'

const AfricanWildlifeTracksIllustration = React.lazy(() => import('./AfricanWildlifeTracksIllustration'));

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class BiologyPageSubsectionFeetAndClaws extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_FeetAndClaws";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionFeetAndClaws._SUBSECTION_NAME_],
      imagesContext: () => (require.context("./assets/", true))
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
        {this.renderSpoorIllustrationConditionally()}
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
          floatFixedSide={true}
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
              diameter={490}
              title={part.title}
              content={ContentPageSubsectionParagraphsJoin(part.content)}
            />
          }
          fixedPart={
            this.renderClawsComparisonImagePart()
          }
          floatFixedSide={true}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderClawsComparisonImagePart() {
    if (__TEST__) {
      return this.renderClawsComparisonImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderClawsComparisonImage(matches))
        }
      </Media>
    );
  }

  renderClawsComparisonImage(matches) {
    const images = this.state.imagesContext();

    return (
      <ImageView
        image={images(GetImagePath("./Cheetah_Cat_Dog_Claws_Comparison_Inverted", ".png", matches))}
        caption="Compare the cheetah's claws to that of the dogs and other cats, it's somewhere in between in terms of retractability."
        width={480}
        height={300}
      />
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
              width={480}
              height={214}
            />
          }
          fixedPart={
            <TextBubble
              diameter={520}
              title={part.title}
              content={ContentPageSubsectionParagraphsJoin(part.content)}
            />
          }
          floatFixedSide={true}
        />
      </ContentPageSubsectionPart>
    );
  }

  renderSpoorIllustrationConditionally() {
    return (
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width >= 812)}
        renderContentHandler={this.renderSpoorIllustration}
      />
    );
  }

  renderSpoorIllustration() {
    return (
      <ContentPageSubsectionPart>
        <div className="VerticalCushionPadding"></div>
        <Suspense fallback={<div></div>}>
          <div className="AfricanWildlifeTracksIllustrationPageWrapper">
            <AfricanWildlifeTracksIllustration />
          </div>
        </Suspense>
      </ContentPageSubsectionPart>
    );
  }
}
