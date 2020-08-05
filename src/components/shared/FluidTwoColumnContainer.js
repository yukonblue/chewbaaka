/**
 * FluidTwoColumnContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 04, 2020
 * Updated  : Aug 04, 2020
 */

import React from 'react'

import './FluidTwoColumnContainer.css'

import { getElementStyleClassName } from '../../styling/styling'

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
