/**
 * EcologyPage_Subsection_WhereCheetahsLive.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

// import ContentPageParagaph from '../shared/ContentPageParagraph'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import NamibianBiomes from './NamibianBiomes'

import image_savannah from './assets/savannah.jpg'

import image_banner_fact_What_is_Habitat from './assets/What_is_Habitat.png'

import image_Namibia_Biomes_and_Cheetah_Ranges_Map from './assets/Namibia_Biomes_and_Cheetah_Ranges_Map.jpg'

export default class EcologyPageSubsectionWhereCheetahsLive extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_WhereCheetahsLive";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionWhereCheetahsLive._SUBSECTION_NAME_]
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
        {this.renderPartCheetahHabitatContent(this.state.subsectionConfig.contents["part_CheetahHabitat"])}
        {this.renderPartNamibianBiomesContent(this.state.subsectionConfig.contents["part_NamibianBiomes"])}
      </div>
    );
  }

  renderPartCheetahHabitatContent(part) {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>

        <div className="FloatRight">
          <ImageView
            image={image_savannah}
            caption="Savannah"
            width={640}
            height={480}
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(part.content)}

        <img
          src={image_banner_fact_What_is_Habitat}
          alt="What is an ecosystem"
          style={{width: 640}}
        />
      </div>
    );
  }

  renderPartNamibianBiomesContent(part) {
    return (
      <div className="VerticalCushionPadding">
        <h4 className="ContentPageSubsectionSubtitle">{part.title}</h4>

        <NamibianBiomes part={part} />

        <div className="Centered" style={{width: 1200}}>
          <ImageView
            image={image_Namibia_Biomes_and_Cheetah_Ranges_Map}
            caption={part.content["paragraph_biomes_map_caption"]}
            width={1200}
            height={720}
          />
        </div>
      </div>
    );
  }
}
