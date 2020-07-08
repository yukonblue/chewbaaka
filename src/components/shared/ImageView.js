/**
 * ImageView.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
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
