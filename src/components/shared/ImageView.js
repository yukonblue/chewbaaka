/**
 * ImageView.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 12, 2020
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

import Caption from './Caption'

import { getElementStyleClassName } from '../../styling/styling'

import { getFormattedImageCaptionStringWithCredit}  from './ImageCaptionUtils'

import './ImageView.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ImageView-debug.css')

export default function ImageView({ width, image, caption, credit }) {

  const componentOuterContainerDimension = {
    maxWidth: width
  };

  const formattedCaption = getFormattedImageCaptionStringWithCredit(caption, credit);

  return (
    <div
      className={getElementStyleClassName("ImageViewOuterContainer")}
      style={componentOuterContainerDimension}
    >
      <div className="ImageViewInnerContainer">
        <div className="ImageViewImgContainer">
          <img
            className="ImageViewImg"
            src={image}
            alt={caption}
          />
        </div>
        <div className="ImageViewCaptionContainer">
          <Caption
            caption={formattedCaption}
            width={width}
          />
        </div>
      </div>
    </div>
  );
}
