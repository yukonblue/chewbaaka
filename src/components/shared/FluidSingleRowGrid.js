/**
 * FluidSingleRowGrid.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 11, 2020
 * Updated  : Aug 12, 2020
 */

import React from 'react'

import './FluidSingleRowGrid.css'

export default function FluidSingleRowGrid( { children, justifyContent } ) {
  const componentStyle = {
    justifyContent: justifyContent
  };

  return (
    <div className="FluidSingleRowGridOuterContainer" style={componentStyle}>
      {children}
    </div>
  );
}
