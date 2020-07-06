/**
 * TextReveal.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 05, 2020
 */

/**
 * TextReveal
 *
 * TextReveal is a component that initially shows
 * a cover image specified by the user, and when
 * hovered, hides the cover image and shows a
 * specified block of text.
 *
 * Props:
 *
 *  - `coverImage`: The cover image.
 *
 *  - `description`: The text content to show upon hovered.
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Image, Reveal } from 'semantic-ui-react'

import { getRevealComponentAnimation } from './RevealComponentAnimation'

import './TextReveal.css'

class TextReveal extends React.Component {

  render() {
    const defaultColor = "green";

    const componentContentDivStyles = {
      backgroundColor: (this.props.contentColor ?  this.props.contentColor : defaultColor)
    }

    const componentDivStylesStub = {
      position: "absolute",
    }

    const componentStyles = {...componentDivStylesStub, ...this.props.position}

    return (
      <div style={componentStyles}>
        <Reveal animated={getRevealComponentAnimation(this.props.animation)} data-testid="TextRevealComponentTestId">
          <Reveal.Content visible data-testid="TextRevealComponentVisiblePartTestId">
            <div className="TextRevealComponentCoverContainerDiv" >
              <Image src={this.props.coverImage} />
            </div>
          </Reveal.Content>
          <Reveal.Content hidden data-testid="TextRevealComponentHiddenPartTestId">
            <div className="TextRevealComponentContentContainerDiv" style={componentContentDivStyles}>
              <p className="TextRevealComponentDescriptionText" data-testid="TextRevealComponentDescriptionTextPartTestId">{this.props.description}</p>
            </div>
          </Reveal.Content>
        </Reveal>
      </div>
    )
  }
}

export default TextReveal;
