/**
 * ImageCollage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Aug 07, 2020
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

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import ImageCollageCell from './ImageCollageCell'

import './ImageCollage.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ImageCollage-debug.css')

export default class ImageCollage extends React.Component {

  render() {
    const cells = this.props.cells.map((val, idx) => (
      <ImageCollageCell
        key={idx}
        image={val.image}
        title={val.title}
        subtitle={val.subtitle}
        href={val.href}
        width={val.width}
        height={val.height}
      />
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
