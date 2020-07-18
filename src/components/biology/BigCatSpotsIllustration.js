/**
 * BigCatSpotsIllustration.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 18, 2020
 * Updated  : Jul 18, 2020
 */

import React from 'react'

import { Grid } from 'semantic-ui-react'

import TextRevealDetailed from '../shared/TextRevealDetailed'

import { getElementStyleClassName } from '../../styling/styling'

import image_pelt_spot_cheetah from './assets/pelt_spot_cheetah.jpg'
import image_pelt_spot_jaguar from './assets/pelt_spot_jaguar.jpg'
import image_pelt_spot_leopard from './assets/pelt_spot_leopard.jpg'
import image_pelt_spot_tiger from './assets/pelt_spot_tiger.jpg'

import image_cat_thumbnail_cheetah from './assets/cat_thumbnail_cheetah.jpg'
import image_cat_thumbnail_jaguar from './assets/cat_thumbnail_jaguar.jpg'
import image_cat_thumbnail_leopard from './assets/cat_thumbnail_leopard.jpg'
import image_cat_thumbnail_tiger from './assets/cat_thumbnail_tiger.jpg'

import './BigCatSpotsIllustration.css'

export default class BigCatSpotsIllustration extends React.Component {

  static _ITEMS_ = [
    {
      caption: "Tiger",
      coverImage: image_pelt_spot_tiger,
      contentImage: image_cat_thumbnail_tiger,
      hint: "I live in well-watered grasslands, scrubs, woodlands, or reed beds."
    },
    {
      caption: "Jaguar",
      coverImage: image_pelt_spot_jaguar,
      contentImage: image_cat_thumbnail_jaguar,
      hint: "I'm from South America and live in the jungle."
    },
    {
      caption: "Cheetah",
      coverImage: image_pelt_spot_cheetah,
      contentImage: image_cat_thumbnail_cheetah,
      hint: "I can live anywhere but prefer savannahs."
    },
    {
      caption: "Leopard",
      coverImage: image_pelt_spot_leopard,
      contentImage: image_cat_thumbnail_leopard,
      hint: "I can live anywhere that is rich in prey and has thick bush for cover. I'm often seen resting on trees."
    }
  ]

  render() {
    const items = BigCatSpotsIllustration._ITEMS_.map(this.renderColumnItem);

    return (
      <div className={getElementStyleClassName("BigCatSpotsIllustrationOuterContainer")}>
        <div>
          <h4 className="BigCatSpotsIllustrationTitle">What Cat am I?</h4>
          <h5 className="BigCatSpotsIllustrationSubtitle">Identify the cat by looking at coat patterns and colors.</h5>
          <Grid columns={4}>
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
        <div className="BigCatSpotsIllustrationItemContainer">
          <div className="BigCatSpotsIllustrationTextRevealDetailedContainer">
            <TextRevealDetailed
              coverImage={item.coverImage}
              contentImage={item.contentImage}
              caption={item.caption}
            />
          </div>
          <p className="BigCatSpotsIllustrationHintText">
            {item.hint}
          </p>
        </div>
      </Grid.Column>
    );
  }
}
