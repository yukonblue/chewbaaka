/**
 * CircularImage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 12, 2020
 */

/**
 * CircularImage
 *
 * `CircularImage` is a component that shows
 * an image in a circular style, plus a piece of
 * title text shown below the image.
 *
 * Props:
 *
 *  - `image`: The image to be shown.
 *
 *  - `title`: The title text.
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import './CircularImage.css'

if ( process.env.NODE_ENV === 'development' )
  require('./CircularImage-debug.css')

export default class CircularImage extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("CircularImageOuterContainer")}>
        <img
          className="CircularImageImg"
          src={this.props.image}
          alt={this.props.title}
          // Specify the aspect ratio
          width={this.props.width}
          height={this.props.height}
        />
        <p className="CircularImageTitle">
          {this.props.title}
        </p>
      </div>
    );
  }
}
