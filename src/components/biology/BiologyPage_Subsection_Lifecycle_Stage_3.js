/**
 * BiologyPage_Subsection_Lifecycle_Stage_3.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Aug 20, 2021
 */

import React from 'react'

import Media from 'react-media'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import MediaLinkButton from '../shared/MediaLinkButton'

import FactBannerImage from '../shared/FactBannerImage'

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class BiologyPageSubsectionLifecycleStage3 extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Lifecycle_Stage_3";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLifecycleStage3._SUBSECTION_NAME_],
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
        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}

        <MediaLinkButton
          href="https://www.nationalgeographic.co.uk/animals/2017/12/stunning-pictures-cheetahs-action"
          title="Stunning Pictures of Cheetahs in Action | National Geographic"
          icon="file image"
        />

        {this.renderWhatIsDiurnalImagePart()}
      </div>
    );
  }

  renderWhatIsDiurnalImagePart() {
    if (__TEST__) {
      return this.renderWhatIsDiurnalImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderWhatIsDiurnalImage(matches))
        }
      </Media>
    );
  }

  renderWhatIsDiurnalImage(matches) {
    const images = this.state.imagesContext();

    const coverImageSizeSuffix = matches ? (matches.small ? "_S" : "_L") : "_L";

    const ext = ".png";

    const imageName = "./What_is_Diurnal" + coverImageSizeSuffix + "-min" + ext;

    return (
      <FactBannerImage
        src={images(imageName)}
        alt="What is diurnal?"
        centered
      />
    );
  }
}
