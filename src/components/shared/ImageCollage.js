/**
 * ImageCollage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Image } from 'semantic-ui-react'

import { getElementStyleClassName } from '../../styling/styling'

import './ImageCollage.css'

export default class ImageCollage extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("ImageCollageOuterContainer")}>
        123
      </div>
    )
  }
}
