/**
 * ImageCollage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 11, 2020
 */

/**
 * ImageCollage
 *
 * `ImageCollage` is a component that groups a collection of
 * `ImageCollageCell` components.
 *
 * Props:
 *
 *  - `cells`: An array of `ImageCollageCell` components.
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { getElementStyleClassName } from '../../styling/styling'

import ImageCollageCell from './ImageCollageCell'

import './ImageCollage.css'

export default class ImageCollage extends React.Component {

  render() {
    const cells = this.props.cells.map((val) => (
      <ImageCollageCell image={val.image} title={val.title} subtitle={val.subtitle} href={val.href} />
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
