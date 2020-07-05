/**
 * ImageReveal.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 04, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Image, Reveal } from 'semantic-ui-react'

class ImageReveal extends React.Component {

  render() {
    const size = this.props.size ? this.props.size : "small";

    return (
      <Reveal animated={this.animation()} data-testid="ImageRevealComponentTestId">
        <Reveal.Content visible data-testid="ImageRevealComponentVisiblePartTestId">
          <Image src={this.props.coverImage} size={size} />
        </Reveal.Content>
        <Reveal.Content hidden data-testid="ImageRevealComponentHiddenPartTestId">
          <Image src={this.props.contentImage} size={size} />
        </Reveal.Content>
      </Reveal>
    )
  }

  animation() {
    const supportedAnimations = [
      "fade",
      "small fade",
      "move",
      "move right",
      "move up",
      "move down",
      "rotate",
      "rotate left"
    ];

    let idx = supportedAnimations.indexOf(this.props.animation);

    if ( idx === -1 ) {
      idx = Math.floor(Math.random() * supportedAnimations.length);
    }

    return supportedAnimations[idx];
  }
}

export default ImageReveal;
