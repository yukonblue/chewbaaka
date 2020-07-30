/**
 * ImageReveal.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 29, 2020
 */

/**
 * ImageReveal
 *
 * ImageReveal is a component that initially shows
 * a cover image specified by the user, and when
 * hovered, hides the cover image and shows the
 * specified content image.
 *
 * Props:
 *
 *  - `coverImage`: The cover image.
 *
 *  - `contentImage`: The content image to show upon hovered.
 */

import React from 'react'

import { Image, Reveal } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import { getRevealComponentAnimation } from './RevealComponentAnimation'

import './ImageReveal.css'

export default class ImageReveal extends React.Component {

  render() {
    return (
      <Reveal animated={getRevealComponentAnimation(this.props.animation)} data-testid="ImageRevealComponentTestId">
        <Reveal.Content visible data-testid="ImageRevealComponentVisiblePartTestId">
          <div className="ImageRevealComponentContainerDiv">
            <Image src={this.props.coverImage} />
          </div>
        </Reveal.Content>
        <Reveal.Content hidden data-testid="ImageRevealComponentHiddenPartTestId">
          <div className="ImageRevealComponentContentDiv">
            <Image src={this.props.contentImage} />
          </div>
        </Reveal.Content>
      </Reveal>
    )
  }
}
