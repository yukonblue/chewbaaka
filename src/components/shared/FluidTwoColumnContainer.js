/**
 * FluidTwoColumnContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 04, 2020
 * Updated  : Aug 07, 2020
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import './FluidTwoColumnContainer.css'

if ( process.env.NODE_ENV === 'development' )
  require('./FluidTwoColumnContainer-debug.css')

export default function FluidTwoColumnContainer(props) {
  return (
    <div className={getElementStyleClassName("FluidTwoColumnContainerOuterContainer")}>
      <div className="FluidTwoColumnContainerColumnContainer">
        {props.lhsColumn}
      </div>
      <div className="FluidTwoColumnContainerColumnContainer">
        {props.rhsColumn}
      </div>
    </div>
  );
}
