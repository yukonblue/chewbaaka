/**
 * ContentPageSectionHead.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 18, 2020
 */

/**
 * ContentPageSectionHead
 *
 * `ContentPageSectionHead` is a component that hosts
 * the introduction title of each page section.
 *
 * Props:
 *
 *  - `title`: Text of the introduction title.
 *
 *  - `content` (optional): Optional subtitle.
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import { ContentPageSectionTitleToAnchorId } from '../shared/ContentPageSectionAnchor'

import './ContentPageSharedStyles.css'

import './ContentPageSectionHead.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageSectionHead-debug.css')

export default class ContentPageSectionHead extends React.Component {

  render() {
    return (
      <ContentPageSubsectionTemplate
        content={this.renderContent()}
      />
    );
  }

  renderContent() {
    return (
      <section className="ContentPageSectionHeadOuterContainer">
        <h2
          className={getElementStyleClassName("ContentPageSectionHeadTitle")}
          id={ContentPageSectionTitleToAnchorId(this.props.title)}
        >
          {this.props.title}
        </h2>
        <p className={getElementStyleClassName("ContentPageHeadAndSectionIntroText")}>
          {this.props.content}
        </p>
      </section>
    );
  }
}
