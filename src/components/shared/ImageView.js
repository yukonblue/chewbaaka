/**
 * ImageView.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 30, 2020
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
 *  - `credit` (optional): Optional string specifying the image credit.
 *
 *  - `width` (optional): The width of the image to be shown.
 *
 *  - `height` (optional): The height of the image to be shown.
 */

import React from 'react'

import './ImageView.css'

import Caption from './Caption'

import { getElementStyleClassName } from '../../styling/styling'

import { getFormattedImageCaptionStringWithCredit}  from './ImageCaptionUtils'

export default function ImageView(props) {
  const componentOuterContainerDimension = {
    maxWidth: props.width,
  };

  const imagePartDimensionStyle = {
    width: props.width,
    height: props.height
  };

  const caption = getFormattedImageCaptionStringWithCredit(props.caption, props.credit);

  return (
    <div
      className={getElementStyleClassName("ImageViewOuterContainer")}
      style={componentOuterContainerDimension}
    >
      <div className="ImageViewInnerContainer">
        <div className="ImageViewCore">
          <img
            className="ImageViewImg"
            src={props.image}
            alt={caption}
            style={imagePartDimensionStyle}
          />
          <div data-testid="ImageViewComponentCaptionPart">
            <Caption
              caption={caption}
              width={props.width}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
