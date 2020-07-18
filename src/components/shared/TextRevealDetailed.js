/**
 * TextRevealDetailed.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 18, 2020
 * Updated  : Jul 18, 2020
 */

/**
 * TextRevealDetailed
 *
 * TextRevealDetailed is a component that initially shows
 * a cover image specified by the user, and when
 * hovered, hides the cover image and shows a
 * another specified image and a block of caption text.
 *
 * Props:
 *
 *  - `coverImage`: The cover image.
 *
 *  - `contentImage`: The image shown on the revealed side.
 * 
 *  - `caption`: The caption text.
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import { Image, Reveal } from 'semantic-ui-react'

import { getRevealComponentAnimation } from './RevealComponentAnimation'

import './TextRevealDetailed.css'

export default class TextRevealDetailed extends React.Component {

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
        <Reveal animated={getRevealComponentAnimation(this.props.animation)}>
          <Reveal.Content visible>
            <div className="TextRevealDetailedCoverContainer">
              <Image src={this.props.coverImage} />
            </div>
          </Reveal.Content>
          <Reveal.Content hidden>
            <div className="TextRevealDetailedContentContainer" style={componentContentDivStyles}>
              <img src={this.props.contentImage} alt={this.props.caption} />
              <p className="TextRevealDetailedCaptionText">
                {this.props.caption}
              </p>
            </div>
          </Reveal.Content>
        </Reveal>
      </div>
    )
  }
}
