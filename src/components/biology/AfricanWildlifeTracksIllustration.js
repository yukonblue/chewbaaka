/**
 * AfricanWildlifeTracksIllustration.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import { Grid } from 'semantic-ui-react'

import TextReveal from '../shared/TextReveal'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import image_spoor_track_cheetah from './assets/spoors/Spoor_Track_Cheetah-min.jpg'
import image_spoor_track_leopard from './assets/spoors/Spoor_Track_Leopard-min.jpg'
import image_spoor_track_lion from './assets/spoors/Spoor_Track_Lion-min.jpg'
import image_spoor_track_spotted_hyena from './assets/spoors/Spoor_Track_Spotted_Hyena-min.jpg'
import image_spoor_track_wilddog from './assets/spoors/Spoor_Track_Wild_Dog-min.jpg'

import './AfricanWildlifeTracksIllustration.css'

export default class BigCatSpotsIllustration extends React.Component {

  static _ITEMS_ = [
    {
      name: "Cheetah",
      image: image_spoor_track_cheetah
    },
    {
      name: "Leopard",
      image: image_spoor_track_leopard
    },
    {
      name: "Lion",
      image: image_spoor_track_lion
    },
    {
      name: "Spotted hyena",
      image: image_spoor_track_spotted_hyena
    },
    {
      name: "African wild dog",
      image: image_spoor_track_wilddog
    }
  ]

  render() {
    const items = BigCatSpotsIllustration._ITEMS_.map(this.renderColumnItem);

    return (
      <div className={getElementStyleClassName("AfricanWildlifeTracksIllustrationOuterContainer")}>
        <div>
          <h4 className={getElementStyleClassNames(["IllustrationFontName",
                                                    "IllustrationTitleFontSize",
                                                    "TextCentered"])}
          >
            Footprints (spoor)
          </h4>
          <h5 className={getElementStyleClassNames(["IllustrationFontName",
                                                    "IllustrationSubtitleFontSize",
                                                    "TextCentered"])}
          >
            Identify the spoor of these animals
          </h5>
          <Grid columns={items.length}>
            <Grid.Row>
              {items}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }

  renderColumnItem(item, idx) {
    return (
      <Grid.Column key={idx}>
        <div className="AfricanWildlifeTracksIllustrationItemContainer">
          <div className="AfricanWildlifeTracksIllustrationTextRevealContainer">
            <TextReveal
              coverImage={item.image}
              description={item.name}
              contentColor="#feb628"
            />
          </div>
        </div>
      </Grid.Column>
    );
  }
}
