/**
 * ImageCollageDriver.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jul 11, 2020
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
 *  - `min`: The minimum number of elements to create.
 */

import _ from 'lodash';
import React from 'react';

import ImageCollage from './ImageCollage'

export default class ImageCollageDriver extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: this.initializeCells()
    }
  }

  initializeCells = () => {
    const images = this.props.data.images;
    const len = images.length;
    const count = Math.min(len, (this.props.min ? this.props.min : 1));

    const cells = _.times(count, () => {
      const idx = Math.floor(Math.random() * len);
      const content = this.props.data.collageCellContent[idx];
      return {
        image: images[idx],
        title: content.title,
        subtitle: content.subtitle,
        href: content.href,
        // TODO: Get rid of this hardcoded dimension.
        width: 480,
        height: 320,
      }
    });

    return cells;
  }

  render() {
    return (
      <div>
        <ImageCollage cells={this.state.cells} />
      </div>
    )
  }
}
