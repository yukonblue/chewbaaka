/**
 * FactBannerImage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 11, 2020
 * Updated  : Aug 11, 2020
 */

import React from 'react'

import './FactBannerImage.css'

export default function FactBannerImage({ src, alt, large, centered }) {
  let classNames = ["FullWidth", "DisplayBlock"];

  if ( centered ) {
    classNames.push("Centered");
  }

  const sizeClass = large ? "FactBannerMediumDimension" : "FactBannerSmallDimension";

  classNames.push(sizeClass);

  return (
    <img
      className={classNames.join(" ")}
      src={src}
      alt={alt}
    />
  );
}
