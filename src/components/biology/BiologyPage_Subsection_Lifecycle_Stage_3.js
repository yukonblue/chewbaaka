/**
 * BiologyPage_Subsection_Lifecycle_Stage_3.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import Media from 'react-media'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { requireContext } from '../shared/workarounds/RequireContextMock'

import { GetImagePath } from '../shared/Path'

import MediaLinkButton from '../shared/MediaLinkButton'

import FactBannerImage from '../shared/FactBannerImage'

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class BiologyPageSubsectionLifecycleStage3 extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_Lifecycle_Stage_3";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionLifecycleStage3._SUBSECTION_NAME_],
      bgColor: props.sectionConfig.bgColor
    };
  }

  render() {
    return (
      <ContentPageSubsectionTemplate
        title={this.state.subsectionConfig.title}
        bgColor={this.state.bgColor}
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
    const context = __TEST__ ? () => (requireContext(__dirname, "./assets/")) : () => (require.context("./assets/"));
    const images = context();

    return (
      <FactBannerImage
        src={images(GetImagePath("./What_is_Diurnal", ".png", matches))}
        alt="What is diurnal?"
        centered
        // Aspect ratio
        width={960}
        height={480}
      />
    );
  }
}
