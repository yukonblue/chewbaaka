/**
 * FluidImageWrapper.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 30, 2020
 * Updated  : Aug 08, 2020
 */

import React from 'react'

import './ContentPageSharedStyles.css'

export default function FluidImageWrapper({ src, alt, centered, width }) {
  let classNames = ["FullWidth", "DisplayBlock"];

  if ( centered ) {
    classNames.push("Centered");
  }

  return (
    <img
      className={classNames.join(" ")}
      src={src}
      alt={alt}
      width={width}
    />
  );
}
