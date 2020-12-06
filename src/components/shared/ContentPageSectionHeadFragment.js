/**
 * ContentPageSectionHeadFragment.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 18, 2020
 */

/**
 * ContentPageSectionHeadFragment
 *
 * `ContentPageSectionHeadFragment` is a fragment component that
 * thinnly wraps the introduction title of each page section.
 *
 * Props:
 *
 *  - `title`: Text of the introduction title.
 *
 *  - `content` (optional): Optional subtitle.
 */

import React, { Fragment } from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import { ContentPageSectionTitleToAnchorId } from '../shared/ContentPageSectionAnchor'

import './ContentPageSharedStyles.css'

import './ContentPageSectionHeadFragment.css'

import getFormattedText from './TextFormatter.js'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageSectionHeadFragment-debug.css')

export default class ContentPageSectionHeadFragment extends React.Component {

  render() {
    return (
      <Fragment>
        <h2
          className={getElementStyleClassName("ContentPageSectionHeadTitle")}
          id={ContentPageSectionTitleToAnchorId(this.props.title)}
        >
          {this.props.title}
        </h2>
        <p className={getElementStyleClassName("ContentPageHeadAndSectionIntroText")}>
          {getFormattedText(this.props.content)}
        </p>
      </Fragment>
    );
  }
}
