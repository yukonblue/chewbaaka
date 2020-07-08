/**
 * ImageView.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

/**
 * ImageView
 *
 * `ImageView` is a component that shows
 * a single image and a caption text.
 *
 * Props
 *
 *  - `image`: The source of the image to show.
 *
 *  - `caption`: The caption text.
 *
 *  - `width` (optional): The width of the image to be shown.
 *
 *  - `height` (optional): The height of the image to be shown.
 */

import React from 'react';

import { Icon } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

import './ImageView.css'

function ImageView(props) {
  const imagePartDimensionStyle = {
    width: props.width,
    height: props.height
  };

  const captionPartDimensionStyle = {
    width: props.width - 10
  };

  return (
    <div className="ImageViewOuterContainer">
      <div className="ImageViewInnerContainer">
        <div className="ImageViewCore">
          <img className="ImageViewImg" src={props.image} alt={props.caption} style={imagePartDimensionStyle} />
          <div className="ImageViewCaptionContainer">
            <Icon name="image" />
            <p className="ImageViewCaptionText" style={captionPartDimensionStyle} data-testid="ImageViewComponentCaptionPart">{props.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageView;
