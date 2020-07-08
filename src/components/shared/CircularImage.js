/**
 * CircularImage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import './CircularImage.css'

export default class CircularImage extends React.Component {

  render() {
    return (
      <div className="CircularImageOuterContainer">
        <div className="CircularImageCore">
          <img className="CircularImageImg" src={this.props.image} alt={this.props.title} />
        </div>
        <div className="CircularImageTitleContainer">
          <p className="CircularImageTitle">
            {this.props.title}
          </p>
        </div>
      </div>
    );
  }
}
