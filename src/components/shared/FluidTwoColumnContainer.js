/**
 * FluidTwoColumnContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 04, 2020
 * Updated  : Aug 13, 2020
 */

import React from 'react'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import './FluidTwoColumnContainer.css'

if ( process.env.NODE_ENV === 'development' )
  require('./FluidTwoColumnContainer-debug.css')

export default function FluidTwoColumnContainer(props) {
  return (
    <div className={getElementStyleClassName("FluidTwoColumnContainerOuterContainer")}>
      <div className={getElementStyleClassNames(["FluidTwoColumnContainerColumnContainer",
                                                "FluidTwoColumnLhsContainerColumnContainer"])}>
        {props.lhsColumn}
      </div>
      <div className={getElementStyleClassNames(["FluidTwoColumnContainerColumnContainer",
                                                "FluidTwoColumnRhsContainerColumnContainer"])}>
        {props.rhsColumn}
      </div>
    </div>
  );
}
