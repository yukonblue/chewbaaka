/**
 * Caption.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 09, 2020
 * Updated  : Jul 30, 2020
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
 *
 *  - `width` (optional): Optional width of the caption text block in pixels.
 */

import React from 'react'

import { Icon } from "semantic-ui-react"

import 'semantic-ui-css/semantic.min.css'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import './ContentPageSharedStyles.css'

import './Caption.css'

export default function Caption(props) {
  const containerDimensionStyle = {
    maxWidth: props.width,
  };

  return (
    <div
      style={containerDimensionStyle}
      className={getElementStyleClassName("CaptionContainer")}
      data-testid="CaptionComponentTestId"
    >
      <div className={getElementStyleClassName("IconContainer")}>
        <Icon name="image" />
      </div>
      <p className={getElementStyleClassNames(["ContentPageCaptionTextSize",
                                              "CaptionText"])}
      >
        {props.caption}
      </p>
    </div>
  );
}
