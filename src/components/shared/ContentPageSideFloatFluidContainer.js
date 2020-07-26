/**
 * ContentPageSideFloatFluidContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import './ContentPageSharedStyles.css'

export default class ContentPageSideFloatFluidContainer extends React.Component {

  render() {
    const floatClassName = this.props.RTL ? "FloatLeft" : "FloatRight";

    const paddingClassName = this.props.RTL ? "HorizontalCusionPaddingRight" : "HorizontalCusionPaddingLeft";

    const classNames = [floatClassName, paddingClassName];

    return (
      <div className="OverflowHidden">
        <div className={classNames.join(" ")}>
          {this.props.floatPart}
        </div>
        {this.props.fixedPart}
      </div>
    );
  }
}
