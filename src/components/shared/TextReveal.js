/**
 * TextReveal.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Aug 23, 2021
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

import React from 'react'

import { Image, Reveal } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import { getRevealComponentAnimation } from './RevealComponentAnimation'

import './TextReveal.css'

export default class TextReveal extends React.Component {

  render() {
    const defaultColor = "green";

    const componentContentDivStyles = {
      backgroundColor: (this.props.contentColor ?  this.props.contentColor : defaultColor)
    };

    const componentDivStylesStub = {
      position: "absolute",
    };

    const componentStyles = {...componentDivStylesStub, ...this.props.position}

    return (
      <div style={componentStyles}>
        <Reveal animated={getRevealComponentAnimation(this.props.animation)} data-testid="TextRevealComponentTestId">
          <Reveal.Content visible data-testid="TextRevealComponentVisiblePartTestId">
            <div className="TextRevealComponentCoverContainerDiv" >
              <Image src={this.props.coverImage} width={120} height={120} />
            </div>
          </Reveal.Content>
          <Reveal.Content hidden data-testid="TextRevealComponentHiddenPartTestId">
            <div className="TextRevealComponentContentContainerDiv" style={componentContentDivStyles}>
              <p className="TextRevealComponentDescriptionText" data-testid="TextRevealComponentDescriptionTextPartTestId">
                {this.props.description}
              </p>
              <p className="TextRevealComponentCaptionText" data-testid="TextRevealComponentCaptionTextPartTestId">
                {this.props.caption}
              </p>
            </div>
          </Reveal.Content>
        </Reveal>
      </div>
    );
  }
}
