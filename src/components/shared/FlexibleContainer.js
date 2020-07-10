/**
 * FlexibleContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';
import PropTypes from 'prop-types'

import { getElementStyleClassName } from '../../styling/styling'

import './FlexibleContainer.css'

export default class FlexibleContainer extends React.Component {

  static propTypes = {
    /** Primary content. */
    children: PropTypes.node,
  }

  render() {
    const {
      children
    } =  this.props;

    return (
      <div className={getElementStyleClassName("FlexibleContainerOuterContainer")}>
        <div className={getElementStyleClassName("FlexibleContainerInnerContainer")}>
          {children}
        </div>
      </div>
    );
  }
}
