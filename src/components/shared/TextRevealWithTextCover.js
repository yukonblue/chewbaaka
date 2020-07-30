/**
 * TextRevealWithTextCover.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 29, 2020
 */

/**
 * TextRevealWithTextCover
 *
 * TextRevealWithTextCover is a component that
 * initially shows a block of text specified by the user,
 * and when hovered, hides the text and shows another
 * user specified text.
 *
 * Props:
 *
 *  - `title`: The title that is initially shown.
 *
 *  - `description`: The content text to show upon hovered.
 *
 *  - `color` (optional): Optional cover background color.
 */

import React from 'react'

import { Reveal } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import { getRevealComponentAnimation } from './RevealComponentAnimation'

import './TextRevealWithTextCover.css'

export default class TextRevealWithTextCover extends React.Component {

  render() {
    const defaultColor = "green";

    const componentCoverDivStyles = {
      backgroundColor: (this.props.color ?  this.props.color : defaultColor)
    }

    return (
      <Reveal animated={getRevealComponentAnimation(this.props.animation)}>
        <Reveal.Content visible>
          <div className="TextRevealWithTextCoverOuterContainer" style={componentCoverDivStyles}>
            <p className="TextRevealWithTextCoverTitle">{this.props.title}</p>
          </div>
        </Reveal.Content>
        <Reveal.Content hidden>
          <div className="TextRevealWithTextCoverOuterContainer">
            <p className="TextRevealWithTextCoverDescription">
              {this.props.description}
            </p>
          </div>
        </Reveal.Content>
      </Reveal>
    )
  }
}
