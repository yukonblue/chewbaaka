/**
 * DimensionPredicatedContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 01, 2020
 * Updated  : Aug 08, 2020
 */

import React from 'react'

export default class DimensionPredicatedContainer extends React.Component {

  state = {
    dimensions: null,
  };

  componentDidMount() {
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      },
    });
  }

  render() {
    const { dimensions } = this.state;

    const pred = this.props.pred ? this.props.pred : () => (true);

    return (
      <div ref={el => (this.container = el)}>
        {dimensions && pred(dimensions) && this.props.renderContentHandler(dimensions)}
      </div>
    );
  }
}
