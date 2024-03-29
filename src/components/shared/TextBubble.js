/**
 * TextBubble.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 17, 2020
 */

/**
 * TextBubble
 *
 * `TextBubble` is a component that illustrates a title and a
 * block of text in a circular container.
 *
 * Props:
 *
 *  - `diameter`: The diameter of the bubble in pixels.
 *
 *  - `backgroundColorRGB`: The RGB background color of the circle.
 *
 *  - `titleColorRGB`: The RGB color of the title text.
 *
 *  - `title`: The title text.
 *
 *  - `content`: The content paragraph text.
 */

import React from 'react'

import {
  getElementStyleClassName
} from '../../styling/styling'

import './TextBubble.css'

if ( process.env.NODE_ENV === 'development' )
  require('./TextBubble-debug.css')

export default function TextBubble(props) {
  const componentOuterContainerStyles = {
    maxWidth: props.diameter,
    minHeight: props.diameter,
    backgroundColor: `rgb(${props.backgroundColorRGB})`
  };

  const componentTitleElementStyles = {
    fontSize: props.diameter * 0.08,
    color: `rgb(${props.titleColorRGB})`
  };

  const componentContentElementStyles = {
    fontSize: Math.min(props.diameter * 0.05, 21),
    color: `rgb(${props.contentColorRGB})`
  };

  return (
    <div
      className="TextBubbleOuterContainerFlexWrapper"
      hidden={props.hidden}
    >
      <div
        className={getElementStyleClassName("TextBubbleOuterContainer")}
        style={componentOuterContainerStyles}
      >
        <div className={getElementStyleClassName("TextBubbleInnerContainer")}>
          <div className={getElementStyleClassName("TextBubbleInnerCore")}>
            <h1 style={componentTitleElementStyles}>
              {props.title}
            </h1>
            <p style={componentContentElementStyles}>
              {props.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
