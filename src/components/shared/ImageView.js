/**
 * ImageView.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 09, 2020
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

import './ImageView.css'

import Caption from './Caption'

function ImageView(props) {
  const imagePartDimensionStyle = {
    width: props.width,
    height: props.height
  };

  return (
    <div className="ImageViewOuterContainer">
      <div className="ImageViewInnerContainer">
        <div className="ImageViewCore">
          <img
            className="ImageViewImg"
            src={props.image}
            alt={props.caption}
            style={imagePartDimensionStyle}
          />
          <div data-testid="ImageViewComponentCaptionPart">
            <Caption caption={props.caption} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageView;
