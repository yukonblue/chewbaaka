/**
 * EcologyPage_Subsection_WhereCheetahsLive.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jun 10, 2022
 */

import React from 'react'

import Media from 'react-media'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'
import ContentPageParagraph from '../shared/ContentPageParagraph'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'
import ContentPageSideFloatFluidContainer from '../shared/ContentPageSideFloatFluidContainer'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import { requireContext } from '../shared/workarounds/RequireContextMock'

import { GetImagePath } from '../shared/Path'

import CenteredFullWidthContainer from '../shared/CenteredFullWidthContainer'

import FactBannerImage from '../shared/FactBannerImage'

import ImageView from '../shared/ImageView'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import FluidSingleRowGrid from '../shared/FluidSingleRowGrid'

import ImageViewModal from '../shared/ImageViewModal'

import NamibianBiomes from './NamibianBiomes'

import image_savanna from './assets/savanna-min.jpg'

import image_Namibia_Biomes_and_Cheetah_Ranges_Map from './assets/Namibia_Biomes_and_Cheetah_Ranges_Map-min.jpg'

import image_namibia_landscape_01 from './assets/namibia_landscape_01-min.jpg'
import image_namibia_landscape_02 from './assets/namibia_landscape_02-min.jpg'
import image_namibia_landscape_03 from './assets/namibia_landscape_03-min.jpg'
import image_namibia_landscape_04 from './assets/namibia_landscape_04-min.jpg'

const __TEST__ = (process.env.NODE_ENV === 'test');

export default class EcologyPageSubsectionWhereCheetahsLive extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_WhereCheetahsLive";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionWhereCheetahsLive._SUBSECTION_NAME_],
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
    );
  }

  renderContent() {
    return (
      <div>
        {this.renderPartCheetahHabitatContent(this.state.subsectionConfig.contents["part_CheetahHabitat"])}
        {this.renderPartNamibianBiomesContent(this.state.subsectionConfig.contents["part_NamibianBiomes"])}
      </div>
    );
  }

  renderPartCheetahHabitatContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSideFloatFluidContainer
          floatPart={
            <ImageView
              image={image_savanna}
              caption="African savannas have rich fauna biodiversity and house the habitats of a wide range of wildlife."
              width={598}
              height={343}
            />
          }
          fixedPart={ContentPageSubsectionParagraphsContentBinder(part.content)}
        />

        {this.renderWhatIsHabitatImagePart()}

        {this.renderAfricanSavannaImagePart()}

      </ContentPageSubsectionPart>
    );
  }

  renderWhatIsHabitatImagePart() {
    if (__TEST__) {
      return this.renderWhatIsHabitatImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderWhatIsHabitatImage(matches))
        }
      </Media>
    );
  }

  renderWhatIsHabitatImage(matches) {
    const context = __TEST__ ? () => (requireContext(__dirname, "./assets/")) : () => (require.context("./assets/"));
    const images = context();

    return (
      <FactBannerImage
        src={images(GetImagePath("./What_is_Habitat", ".png", matches))}
        alt="What is a habitat"
        centered
        // Aspect ratio
        width={960}
        height={480}
      />
    );
  }

  renderAfricanSavannaImagePart() {
    if (__TEST__) {
      return this.renderAfricanSavannaImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderAfricanSavannaImage(matches))
        }
      </Media>
    );
  }

  renderAfricanSavannaImage(matches) {
    const context = __TEST__ ? () => (requireContext(__dirname, "./assets/")) : () => (require.context("./assets/"));
    const images = context();

    return (
      <FluidImageWrapper
        src={images(GetImagePath("./savana_bg_large", ".jpg", matches))}
        alt="African savanna"
        centered
        // Aspect ratio
        width={1201}
        height={676}
      />
    );
  }

  renderPartNamibianBiomesContent(part) {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          {part.title}
        </ContentPageSubsectionSubtitle>

        <ContentPageSubsectionTwoColumnContentTemplate
          lhsColumn={{content: this.renderPartNamibianBiomesLhs(part)}}
          rhsColumn={{content: this.renderPartNamibianBiomesRhs(part)}}
        />

        <div className="VerticalCushionPaddingTopLarge">
          <CenteredFullWidthContainer width={1200}>
            <ImageView
              image={image_Namibia_Biomes_and_Cheetah_Ranges_Map}
              caption={part.content["paragraph_biomes_map_caption"]}
              width={1200}
              height={720}
            />
          </CenteredFullWidthContainer>
        </div>

        {this.renderWhatIsBiomeImagePart()}

        {this.renderImageViewModals()}
      </ContentPageSubsectionPart>
    );
  }

  renderWhatIsBiomeImagePart() {
    if (__TEST__) {
      return this.renderWhatIsBiomeImage(null);
    }

    return (
      <Media queries={{
        small: "(max-width: 480px)",
      }}>
        {
          matches => (this.renderWhatIsBiomeImage(matches))
        }
      </Media>
    );
  }

  renderWhatIsBiomeImage(matches) {
    const context = __TEST__ ? () => (requireContext(__dirname, "./assets/")) : () => (require.context("./assets/"));
    const images = context();

    return (
      <FactBannerImage
        src={images(GetImagePath("./What_is_Biome", ".png", matches))}
        alt="What is biome?"
        centered
        large
        // Aspect ratio
        width={960}
        height={480}
      />
    );
  }

  renderPartNamibianBiomesLhs(part) {
    return (
      <ContentPageParagraph>
        {part.content["paragraph_biome_intro"]}
      </ContentPageParagraph>
    );
  }

  renderPartNamibianBiomesRhs(part) {
    return (
      <NamibianBiomes
        part={part}
      />
    );
  }

  renderImageViewModals() {
    const images = [
      image_namibia_landscape_01,
      image_namibia_landscape_02,
      image_namibia_landscape_03,
      image_namibia_landscape_04,
    ];

    return (
      <FluidSingleRowGrid justifyContent="space-evenly">
        {images.map((image, idx) => (
          <ImageViewModal
            key={idx}
            image={image}
            width={480}
            height={320}
          />
        ))}
      </FluidSingleRowGrid>
    );
  }
}
