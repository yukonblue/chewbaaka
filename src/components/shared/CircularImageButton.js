/**
 * CircularImageButton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 07, 2020
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import './CircularImageButton.css'

if ( process.env.NODE_ENV === 'development' )
  require('./CircularImageButton-debug.css')

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
