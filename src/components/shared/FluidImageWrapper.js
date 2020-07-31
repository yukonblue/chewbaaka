/**
 * FluidImageWrapper.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 30, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import './ContentPageSharedStyles.css'

export default function FluidImageWrapper(props) {
  return (
    <img
      className="FullWidth"
      src={props.src}
      alt={props.alt}
    />
  );
}
