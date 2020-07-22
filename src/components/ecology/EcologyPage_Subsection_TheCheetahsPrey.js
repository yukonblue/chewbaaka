/**
 * EcologyPage_Subsection_TheCheetahsPrey.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react'

import { Grid } from 'semantic-ui-react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import ImageView from '../shared/ImageView'

import TextBubble from '../shared/TextBubble'

import image_cheetah_coalition_hunting from './assets/cheetah_coalition_hunting.jpg'
import image_cheetah_go_after_gazelle from './assets/cheetah_go_after_gazelle.jpg'

import image_Cheetah_Lion_Hunting_Success_Rate_Comparsion from './assets/Cheetah_Lion_Hunting_Success_Rate_Comparsion.png'

export default class EcologyPageSubsectionTheCheetahsPrey extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_TheCheetahsPrey";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[EcologyPageSubsectionTheCheetahsPrey._SUBSECTION_NAME_]
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
        {this.renderTextContent()}
        {this.renderCheetahLionComparison()}
        {this.renderImageGalleryContent()}
      </div>
    );
  }

  renderTextContent() {
    return (
      <div className="OverflowHidden VerticalCushionPadding">
        <div className="FloatRight">
          <TextBubble
            diameter={480}
            backgroundColorRGB={[187,143,206]}
            title="Cheetahs prefer game to livestock"
            content={"Cheetahs are born to prey on wild game, and will instinctly go after them. " +
                    "Cheetahs only go after livestock as a last resort when wild game is not available. " +
                    "This makes maintaining healthy ecosystems very important."}
          />
        </div>

        {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents)}
      </div>
    );
  }

  renderCheetahLionComparison() {
    return (
      <div className="Centered" style={{width: 960}}>
        <img
          src={image_Cheetah_Lion_Hunting_Success_Rate_Comparsion}
          alt="Cheetah and lion have drastically different preys, hunting strategies, and success rates."
        />
      </div>
    );
  }

  renderImageGalleryContent() {
    return (
      <div className="Centered">
        <Grid columns={2}>
          <Grid.Column width={8}>
            <ImageView
              image={image_cheetah_coalition_hunting}
              caption="Cheetahs in a coalition need to work together as a team to bring down larger and stronger prey, such as this wildebeest."
              width={640}
              height={360}
            />
          </Grid.Column>
          <Grid.Column>
            <ImageView
              image={image_cheetah_go_after_gazelle}
              caption="One of cheetahs' favorite type of prey are the gazelles, although they are very vigilant, fast and agile, thus are hard to catch."
              width={640}
              height={360}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
