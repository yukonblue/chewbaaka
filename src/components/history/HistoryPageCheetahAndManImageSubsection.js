/**
 * HistoryPageCheetahAndManImageSubsection.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { Grid } from 'semantic-ui-react'

import './HistoryPageCheetahAndManImageSubsection.css'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import ImageSlidingGallery from '../shared/ImageSlidingGallery'

export default class HistoryPageCheetahAndManImageSubsection extends React.Component {

  render() {
    return (
      <div className="HistoryPageCheetahAndManImageSubsectionOuterContainer">
        <ContentPageSectionTemplate content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="HistoryPageCheetahAndManImageSubsectionInnerContainer">
        <div>
          <h3>Relationships with Man</h3>
        </div>
        <div>
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column width={8}>
                <div className="HistoryPageCheetahAndManImageSubsectionContentTextContainer">
                  <p>Try resizing the window: You'll see that each sentence is on one line when the window is wide enough. Only when the window is too narrow for the whole sentence will the sentence be broken over several lines. When you remove the 'margin-right: -50%' and resize the window again, you'll see that the sentences will be broken already when the window is still twice as wide as the text lines. </p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <ImageSlidingGallery
                  slides={[
                    {
                      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/War_trophies_Deir_el_Bahari_Wellcome_L0027402.jpg/440px-War_trophies_Deir_el_Bahari_Wellcome_L0027402.jpg",
                      caption: "Researchers used the Tuxtla Statuette to decipher the epi-Olmec writing system, which represents both syllables and words"
                    },
                    {
                      image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Cheetahs_nawab_oudh1844.jpg",
                      caption: "Listen to a Tsimshian (Pacific Northwest Native) storyteller recount the family history painted on a 38-foot-long house front as specific parts of the design light up."
                    }
                  ]}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
