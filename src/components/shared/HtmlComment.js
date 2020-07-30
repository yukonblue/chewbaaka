/**
 * HtmlComment.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 29, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

export default class HtmlComment extends React.Component {

  static propTypes = {
    text: PropTypes.string,
    trim: PropTypes.bool
  };

  componentDidMount() {
    let el = ReactDOM.findDOMNode(this);
    ReactDOM.unmountComponentAtNode(el);
    el.outerHTML = `<!-- ${this.props.text} -->`;
  }

  render() {
    return <div />;
  }
}
