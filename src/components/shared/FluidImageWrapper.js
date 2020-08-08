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

export default function FluidImageWrapper(props) {
  return (
    <img
      className="FullWidth Centered DisplayBlock"
      src={props.src}
      alt={props.alt}
    />
  );
}
