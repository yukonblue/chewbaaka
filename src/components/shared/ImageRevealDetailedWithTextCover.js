/**
 * ImageRevealDetailedWithTextCover.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 05, 2020
 */

/**
 * ImageRevealDetailedWithTextCover
 *
 * ImageRevealDetailedWithTextCover is a component that
 * initially shows a block of text specified by the user,
 * and when hovered, hides the text and shows a user
 * specified content image and a description text.
 *
 * Props:
 *  - `title`: The title that is initially shown.
 *
 *  - `contentImage`: The content image to show upon hovered.
 *
 *  - `description`: The content text to show upon hovered.
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Image, Reveal } from 'semantic-ui-react'

import { getRevealComponentAnimation } from './RevealComponentAnimation'

import './ImageRevealDetailedWithTextCover.css'

class ImageRevealDetailedWithTextCover extends React.Component {

  render() {
    const defaultColor = "green";

    const componentCoverDivStyles = {
      backgroundColor: (this.props.coverColor ?  this.props.coverColor : defaultColor)
    }

    return (
      <Reveal animated={getRevealComponentAnimation(this.props.animation)} data-testid="ImageRevealDetailedWithTextCoverComponentTestId">
        <Reveal.Content visible data-testid="ImageRevealDetailedWithTextCoverComponentVisiblePartTestId">
          <div className="ImageRevealDetailedWithTextCoverComponentCoverDiv" style={componentCoverDivStyles}>
            <p>{this.props.title}</p>
          </div>
        </Reveal.Content>
        <Reveal.Content hidden data-testid="ImageRevealDetailedWithTextCoverComponentHiddenPartTestId">
          <div className="ImageRevealDetailedWithTextCoverComponentContentDiv">
            <Image src={this.props.contentImage} />
            <p
              className="ImageRevealDetailedWithTextCoverComponentDescriptionText"
              data-testid="ImageRevealDetailedWithTextCoverComponentDescriptionTextPartTestId"
            >
                {this.props.description}
            </p>
          </div>
        </Reveal.Content>
      </Reveal>
    )
  }
}

export default ImageRevealDetailedWithTextCover;
