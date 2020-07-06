/**
 * ImageReveal.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 05, 2020
 */

/**
 * ImageReveal
 *
 * ImageReveal is a component that initially shows
 * a cover image specified by the user, and when
 * hovered, hides the cover image and shows another
 * image specified by the user.
 *
 * Props:
 *
 *  - `coverImage`: The cover image.
 *
 *  - `contentImage`: The content image to show upon hovered.
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Image, Reveal } from 'semantic-ui-react'

import './ImageReveal.css'

class ImageReveal extends React.Component {

  render() {
    const size = this.props.size ? this.props.size : "small";

    return (
      <Reveal animated={this.animation()} data-testid="ImageRevealComponentTestId">
        <Reveal.Content visible data-testid="ImageRevealComponentVisiblePartTestId">
          <div className="ImageRevealComponentContainerDiv">
            <Image src={this.props.coverImage} />
          </div>
        </Reveal.Content>
        <Reveal.Content hidden data-testid="ImageRevealComponentHiddenPartTestId">
          <div className="ImageRevealComponentContentDiv">
            <Image src={this.props.contentImage} size={size} />
          </div>
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
