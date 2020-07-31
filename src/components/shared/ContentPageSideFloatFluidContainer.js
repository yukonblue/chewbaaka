/**
 * ContentPageSideFloatFluidContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 31, 2020
 */

import React from 'react'

import './ContentPageSharedStyles.css'

export default class ContentPageSideFloatFluidContainer extends React.Component {

  render() {
    const halfWidthClassName = "HalfWidth";

    const floatClassName = this.props.RTL ? "FloatLeft" : "FloatRight";

    const paddingClassName = this.props.RTL ? "HorizontalCusionPaddingRight" : "HorizontalCusionPaddingLeft";

    let classNames = [floatClassName, paddingClassName, "BottomMargin20px"];

    if (this.props.floatFixedSide) {
      classNames.push(halfWidthClassName);
    }

    const oppositeFloatClassName = this.props.floatFixedSide ? (this.props.RTL ? "FloatRight" : "FloatLeft") : "";

    let oppositeClassNames = [];

    if (this.props.floatFixedSide) {
      oppositeClassNames.push(oppositeFloatClassName);
      oppositeClassNames.push(halfWidthClassName);
    }

    return (
      <div className="OverflowHidden">
        <div className={classNames.join(" ")}>
          {this.props.floatPart}
        </div>
        <div className={oppositeClassNames.join(" ")}>
          {this.props.fixedPart}
        </div>
      </div>
    );
  }
}
