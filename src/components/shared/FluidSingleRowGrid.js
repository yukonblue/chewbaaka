/**
 * FluidSingleRowGrid.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 11, 2020
 * Updated  : Aug 11, 2020
 */

import React from 'react'

import './FluidSingleRowGrid.css'

export default function FluidSingleRowGrid( { children } ) {
  return (
    <div className="FluidSingleRowGridOuterContainer">
      {children}
    </div>
  );
}
