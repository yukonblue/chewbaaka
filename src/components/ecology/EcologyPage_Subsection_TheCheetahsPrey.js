/**
 * EcologyPage_Subsection_TheCheetahsPrey.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Aug 19, 2021
 */

import React from 'react'

import Media from 'react-media'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageTwoColumnImageGallary from '../shared/ContentPageTwoColumnImageGallary'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import TextBubble from '../shared/TextBubble'

import image_cheetah_coalition_hunting from './assets/cheetah_coalition_hunting-min.jpg'
import image_cheetah_go_after_gazelle from './assets/cheetah_go_after_gazelle-min.jpg'

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class EcologyPageSubsectionTheCheetahsPrey extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_TheCheetahsPrey";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionTheCheetahsPrey._SUBSECTION_NAME_],
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
        {this.renderTextContent()}
        {this.renderCheetahLionComparison()}
        {this.renderImageGalleryContent()}
      </div>
    );
  }

  renderTextContent() {
    return (
      <ContentPageSubsectionPart>
        <div className="OverflowHidden">
          <div className="FloatRight">
            <TextBubble
              diameter={480}
              backgroundColorRGB={[187,143,206]}
              title="Cheetahs prefer game to livestock"
              content={"Cheetahs are born to prey on wild game, and will instinctually go after them. " +
                      "Cheetahs only go after livestock as a last resort when wild game is not available. " +
                      "This makes maintaining healthy ecosystems very important."}
            />
          </div>

          {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}

        </div>
      </ContentPageSubsectionPart>
    );
  }

  renderCheetahLionComparison() {
    if (__TEST__) {
      return this.renderCheetahLionComparisonImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderCheetahLionComparisonImage(matches))
        }
      </Media>
    );
  }

  renderCheetahLionComparisonImage(matches) {
    const images = this.state.imagesContext();

    const coverImageSizeSuffix = matches ? (matches.small ? "_S" : "_L") : "_L";

    const ext = ".png";

    const imageName = "./Cheetah_Lion_Hunting_Success_Rate_Comparsion" + coverImageSizeSuffix + "-min" + ext;

    return (
      <ContentPageSubsectionPart>
        <FluidImageWrapper
          src={images(imageName)}
          alt="Cheetah and lion have drastically different preys, hunting strategies, and success rates."
          centered
        />
      </ContentPageSubsectionPart>
    );
  }

  renderImageGalleryContent() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageTwoColumnImageGallary
          parts={[
            {
              image: image_cheetah_coalition_hunting,
              caption: "Cheetahs in a coalition need to work together as a team to bring down larger and stronger prey, such as this wildebeest.",
              width: 640, 
              height: 360
            },
            {
              image: image_cheetah_go_after_gazelle,
              caption: "One of cheetahs' favorite type of prey are the gazelles, although they are very vigilant, fast and agile, thus are hard to catch.",
              width: 640,
              height: 360
            }
          ]}
        />
      </ContentPageSubsectionPart>
    );
  }
}
