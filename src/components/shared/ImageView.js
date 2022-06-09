/**
 * ImageView.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jun 09, 2022
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
 *                        Must be an integer. When used to enforce
 *                        the dimension of the image, it is assumed to be
 *                        in pixels. When used to specify the aspect ratio
 *                        of the image, it is assumed to be unitless.
 *
 *  - `height` (optional): The height of the image to be shown.
 *                         Must be an integer. When used to enforce
 *                         the dimension of the image, it is assumed to be
 *                         in pixels. When used to specify the aspect ratio
 *                         of the image, it is assumed to be unitless.
 */

import React from 'react'

import Caption from './Caption'

import { getElementStyleClassName } from '../../styling/styling'

import { getFormattedImageCaptionStringWithCredit}  from './ImageCaptionUtils'

import {
  Design2ImageViewFamilyImgStyles,
  Design2ImageViewFamilyContainerStyles,
  combineStyles
} from './Design2_ImageViewFamilyUtils'

import './ImageView.css'

import './Design2.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ImageView-debug.css')

export default function ImageView({ image, caption, credit, width, height }) {

  const componentOuterContainerDimension = {
    maxWidth: width
  };

  const formattedCaption = getFormattedImageCaptionStringWithCredit(caption, credit);

  const aspectRatio = {
    width: parseInt(width, 10),
    height: parseInt(height, 10)
  };

  return (
    <div
      className={getElementStyleClassName("ImageViewOuterContainer")}
      style={componentOuterContainerDimension}
    >
      <div className={combineStyles("ImageViewInnerContainer", Design2ImageViewFamilyContainerStyles)}>
        <div className="ImageViewImgContainer">
          <img
            className={Design2ImageViewFamilyImgStyles}
            src={image}
            alt={caption}
            // Specify the aspect ratio
            width={aspectRatio.width}
            height={aspectRatio.height}
          />
        </div>
        <div className="ImageViewCaptionContainer ImageViewFamilyCaptionContainerStyles">
          <Caption
            caption={formattedCaption}
            width={width}
          />
        </div>
      </div>
    </div>
  );
}
