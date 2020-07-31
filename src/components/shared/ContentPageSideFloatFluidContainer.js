/**
 * ContentPageSideFloatFluidContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import './ContentPageSharedStyles.css'

export default class ContentPageSideFloatFluidContainer extends React.Component {

  render() {
    const halfWidthClassName = "HalfWidth";

    const floatClassName = this.props.RTL ? "FloatLeft" : "FloatRight";

    // const paddingClassName = this.props.RTL ? "HorizontalCusionPaddingRight" : "HorizontalCusionPaddingLeft";

    const classNames = [floatClassName, halfWidthClassName];

    const oppositeFloatClassName = this.props.RTL ? "FloatRight" : "FloatLeft";

    const oppositeFloatClassNames = [oppositeFloatClassName, halfWidthClassName];

    return (
      <div className="OverflowHidden">
        <div className={classNames.join(" ")}>
          {this.props.floatPart}
        </div>
        <div className={oppositeFloatClassNames.join(" ")}>
          {this.props.fixedPart}
        </div>
      </div>
    );
  }
}
