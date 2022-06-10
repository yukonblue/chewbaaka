/**
 * EcologyPage_Subsection_HuntingAndPredatorControl.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import Media from 'react-media'

import '../shared/ContentPageSharedStyles.css'

import { requireContext } from '../shared/workarounds/RequireContextMock'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { GetImagePath } from '../shared/Path'

import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'

import TextBubble from '../shared/TextBubble'

import FactBannerImage from '../shared/FactBannerImage'

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class EcologyPageSubsectionHuntingAndPredatorControl extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_HuntingAndPredatorControl";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionHuntingAndPredatorControl._SUBSECTION_NAME_],
      accentColor: props.sectionConfig.accentColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        accentColor={this.state.accentColor}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderPartHuntingContent(this.state.subsectionConfig.contents["part_Hunting"])}
        {this.renderPartPredatorControlContent(this.state.subsectionConfig.contents["part_Predator_Control"])}
      </div>
    );
  }

  renderPartHuntingContent(part) {
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

  renderPartContent(part, idx) {
    const renderOptionalBannerImgOnPart = () => {
      if (part.is_part_What_is_Sustainable_Utilization) {
        if ( __TEST__ ) {
          return this.renderWhatIsSustainableUtilizationImage(null);
        }

        return (
          <Media queries={{
            small: "(max-width: 480px)",
          }}>
            {
              matches => (this.renderWhatIsSustainableUtilizationImage(matches))
            }
          </Media>
        );
      }
    };
    return (
      <ContentPageSubsectionPart key={idx}>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>
        {ContentPageSubsectionParagraphsContentBinder(part.content)}
        {renderOptionalBannerImgOnPart()}
      </ContentPageSubsectionPart>
    );
  }

  renderWhatIsSustainableUtilizationImage(matches) {
    const context = __TEST__ ? () => (requireContext(__dirname, "./assets/")) : () => (require.context("./assets/"));
    const images = context();

    return (
      <FactBannerImage
        src={images(GetImagePath("./What_is_Sustainable_Utilization", ".png", matches))}
        alt="What is sustainable utilization?"
        large
        centered
        // Aspect ratio
        width={960}
        height={480}
      />
    );
  }

  renderPartPredatorControlContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={this.renderFloatPart(part)}
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content)}
        />

        {this.renderWhatIsProblemAnimalImagePart()}

      </ContentPageSubsectionPart>
    );
  }

  renderWhatIsProblemAnimalImagePart() {
    if ( __TEST__ ) {
      return this.renderWhatIsProblemAnimalImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderWhatIsProblemAnimalImage(matches))
        }
      </Media>
    );
  }

  renderWhatIsProblemAnimalImage(matches) {
    const context = __TEST__ ? () => (requireContext(__dirname, "./assets/")) : () => (require.context("./assets/"));
    const images = context();

    return (
      <FactBannerImage
        src={images(GetImagePath("./What_is_a_Problem_Animal", ".png", matches))}
        alt="What is a problem animal?"
        large
        centered
        // Aspect ratio
        width={960}
        height={480}
      />
    );
  }

  renderFloatPart(part) {
    return (
      <TextBubble
        diameter={560}
        backgroundColorRGB={[255,155,0]}
        title={part.textBubble.title}
        content={part.textBubble.content}
      />
    );
  }
}
