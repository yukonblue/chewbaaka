/**
 * Caption.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 09, 2020
 * Updated  : Jul 12, 2020
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

import { getElementStyleClassName } from '../../styling/styling'

import './Caption.css'

export default function Caption(props) {
  return (
    <div
      className={getElementStyleClassName("CaptionContainer")}
      data-testid="CaptionComponentTestId"
    >
      <div className={getElementStyleClassName("IconContainer")}>
        <Icon name="image" />
      </div>
      <p className="CaptionText">
        {props.caption}
      </p>
    </div>
  );
}
