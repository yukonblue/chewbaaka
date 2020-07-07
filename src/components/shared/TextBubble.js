/**
 * TextBubble.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import './TextBubble.css'

function TextBubble(props) {
  const componentOuterContainerStyles = {
    width: props.diameter,
    height: props.diameter,
    backgroundColor: `rgb(${props.backgroundColorRGB})`
  };

  const componentTitleElementStyles = {
    fontSize: props.diameter * 0.08,
    color: `rgb(${props.titleColorRGB})`
  };

  const componentContentElementStyles = {
    fontSize: Math.min(props.diameter * 0.035, 21),
    color: `rgb(${props.contentColorRGB})`
  };

  return (
    <div className="TextBubbleOuterContainer" style={componentOuterContainerStyles} hidden={props.hidden}>
      <div className="TextBubbleInnerContainer">
        <div className="TextBubbleInnerCore">
          <h1 style={componentTitleElementStyles}>{props.title}</h1>
          <p style={componentContentElementStyles}>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default TextBubble;
