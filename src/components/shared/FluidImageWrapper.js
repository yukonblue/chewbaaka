/**
 * FluidImageWrapper.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 30, 2020
 * Updated  : Aug 23, 2021
 */

import React from 'react'

import './ContentPageSharedStyles.css'

export default function FluidImageWrapper({ src, alt, centered, width, height }) {
  let classNames = ["FullWidth", "DisplayBlock", "RetainAspectRatio"];

  if ( centered ) {
    classNames.push("Centered");
  }

  const aspectRatio = {
    width: parseInt(width, 10),
    height: parseInt(height, 10)
  }

  return (
    <img
      className={classNames.join(" ")}
      src={src}
      alt={alt}
      // specify aspect ratio
      width={aspectRatio.width}
      height={aspectRatio.height}
    />
  );
}
