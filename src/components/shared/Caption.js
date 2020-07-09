/**
 * Caption.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 09, 2020
 * Updated  : Jul 09, 2020
 */

/**
 * Caption
 *
 * `Caption` is a component that illustrates
 * a piece of caption text.
 *
 * Props
 *
 *  - `caption`: The caption text.
 */

import React from 'react';

import { Icon } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

import './Caption.css'

function Caption(props) {
  return (
    <div className="CaptionContainer" data-testid="CaptionComponentTestId">
      <div className="IconContainer">
        <Icon name="image" />
      </div>
      <p className="CaptionText">
        {props.caption}
      </p>
    </div>
  );
}

export default Caption;
