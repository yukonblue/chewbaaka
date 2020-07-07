/**
 * CircularImageButton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import './CircularImageButton.css'

export default class CircularImageButton extends React.Component {

  render() {
    return (
      <div className="CircularImageButtonOuterContainer">
        <a href={this.props.href}>
          <div className="CircularImageButtonCore">
            <img className="CircularImageButtonImg" src={this.props.image} alt={this.props.title} />
          </div>
          <div>
            <p className="CircularImageButtonTitle">
              {this.props.title}
            </p>
          </div>
        </a>
      </div>
    );
  }
}
