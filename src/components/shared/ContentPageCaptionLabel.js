/**
 * ContentPageCaptionLabel.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import PropTypes from 'prop-types'

import { getElementStyleClassName } from '../../styling/styling'

export default class ContentPageCaptionLabel extends React.Component {

  static propTypes = {
    /** Primary content. */
    children: PropTypes.string,
  }

  render() {
    const {		
      children		
    } =  this.props;

    return (
      <p className={getElementStyleClassName("ContentPageCaptionTextSize")}>
        {children}
      </p>
    );
  }
}
