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

import { getElementStyleClassName } from '../../styling/styling'

import ImageCollageCell from './ImageCollageCell'

import './ImageCollage.css'

export default class ImageCollage extends React.Component {

  render() {
    const cells = this.props.cells.map((val, idx) => (
      <ImageCollageCell image={val.image} title={val.title} subtitle={val.subtitle} />
    ));

    return (
      <div className={getElementStyleClassName("ImageCollageOuterContainer")}>
        <div className={getElementStyleClassName("ImageCollageInnerContainer")}>
          {cells}
        </div>
      </div>
    )
  }
}
