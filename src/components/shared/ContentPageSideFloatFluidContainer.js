/**
 * ContentPageSideFloatFluidContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Aug 13, 2020
 */

import React from 'react'

import './ContentPageSharedStyles.css'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import './ContentPageSideFloatFluidContainer.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageSideFloatFluidContainer-debug.css')

export default class ContentPageSideFloatFluidContainer extends React.Component {

  render() {
    const floatClassName = this.props.RTL ? "FloatLeft" : "FloatRight";

    let classNames = ["ContentPageSideFloatFluidContainerFloatPartContainer",
                      "BottomMargin20px",
                      floatClassName,
                    ];

    const oppositeFloatClassName = this.props.floatFixedSide ? (this.props.RTL ? "FloatRight" : "FloatLeft") : "";

    let oppositeClassNames = ["ContentPageSideFloatFluidContainerFixedPartContainer"];

    if (this.props.floatFixedSide) {
      oppositeClassNames.push(oppositeFloatClassName);
    }

    return (
      <div className={getElementStyleClassName("ContentPageSideFloatFluidContainerOuterContainer")}
      >
        <div className={getElementStyleClassNames(classNames)}>
          {this.props.floatPart}
        </div>
        <div className={getElementStyleClassNames(oppositeClassNames)}>
          {this.props.fixedPart}
        </div>
      </div>
    );
  }
}
