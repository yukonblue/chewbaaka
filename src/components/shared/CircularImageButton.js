/**
 * CircularImageButton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react'

import './CircularImageButton.css'

import { getElementStyleClassName } from '../../styling/styling'

export default class CircularImageButton extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("CircularImageButtonOuterContainer")}>
        <a href={this.props.href}>
          <div className="CircularImageButtonCore">
            <img
              className={getElementStyleClassName("CircularImageButtonImg")}
              src={this.props.image}
              alt={this.props.title}
            />
          </div>
          <div>
            <p className={getElementStyleClassName("CircularImageButtonTitle")}>
              {this.props.title}
            </p>
          </div>
        </a>
      </div>
    );
  }
}
