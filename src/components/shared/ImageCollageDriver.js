/**
 * ImageCollageDriver.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Aug 19, 2020
 */

/**
 * ImageCollageDriver
 *
 * `ImageCollageDriver` is a utility helper that helps to instantiate
 * an instance of `ImageCollageCell` components with a set of data.
 *
 * Props:
 *
 *  - `data`: Two arrays of { images, collageCellContent } data.
 *
 *  - `count`: The count number of elements to create.
 *
 *  - `imageWidth`: The desired width of each collage cell.
 *
 *  - `imageHeight`: The desired height of each collage cell.
 */

import React from 'react'

import times from '../shared/times'

import ImageCollage from './ImageCollage'

const __TEST__ = ( process.env.NODE_ENV === "test" );

export default class ImageCollageDriver extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: this.initializeCells()
    }
  }

  initializeCells = () => {
    const contents = this.props.data.collageCellContent;
    const images = this.props.data.images;
    const count = Math.min(contents.length, (this.props.count ? this.props.count : 1));
    const contentsToUse = (__TEST__ ? contents.slice(0, 4) : contents.sort(() => Math.random() - 0.5).slice(0, 4));

    const cells = times(count, (idx) => {
      const content = contentsToUse[idx];
      return {
        image: images[(__TEST__ ? idx : Math.floor(Math.random() * images.length))],
        title: content.title,
        subtitle: content.subtitle,
        href: content.href,
        width: this.props.imageWidth,
        height: this.props.imageHeight
      }
    });

    return cells;
  }

  render() {
    return (
      <ImageCollage cells={this.state.cells} />
    );
  }
}
