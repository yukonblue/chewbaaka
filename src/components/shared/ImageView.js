/**
 * ImageView.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 08, 2020
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

export default function ImageView(props) {
  const componentOuterContainerDimension = {
    width: props.width
  };

  const imagePartDimensionStyle = {
    width: props.width
  };

  const caption = getFormattedImageCaptionStringWithCredit(props.caption, props.credit);

  return (
    <div
      className={getElementStyleClassName("ImageViewOuterContainer")}
      style={componentOuterContainerDimension}
    >
      <div className="ImageViewInnerContainer">
        <div className="ImageViewImgContainer">
          <img
            className="ImageViewImg"
            src={props.image}
            alt={caption}
            style={imagePartDimensionStyle}
          />
        </div>
        <Caption
          caption={caption}
          width={props.width}
        />
      </div>
    </div>
  );
}
