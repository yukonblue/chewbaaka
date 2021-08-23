/**
 * FactBannerImage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 11, 2020
 * Updated  : Aug 23, 2021
 */

import React from 'react'

import './FactBannerImage.css'

export default function FactBannerImage({ src, alt, large, centered, width, height }) {
  let classNames = ["FactBannerImage", "FullWidth", "DisplayBlock", "VerticalCushionPadding"];

  if ( centered ) {
    classNames.push("Centered");
  }

  const sizeClass = large ? "FactBannerMediumDimension" : "FactBannerSmallDimension";

  classNames.push(sizeClass);

  const aspectRatio = {
    width: parseInt(width, 10),
    height: parseInt(height, 10)
  }

  return (
    <img
      className={classNames.join(" ")}
      src={src}
      alt={alt}
      // Specify the aspect ratio
      width={aspectRatio.width}
      height={aspectRatio.height}
    />
  );
}
