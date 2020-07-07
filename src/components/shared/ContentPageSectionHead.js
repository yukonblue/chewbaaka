/**
 * ContentPageSectionHead.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
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

import React from 'react';

import './ContentPageSectionHead.css'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

import ContentPageSectionAnchor from '../shared/ContentPageSectionAnchor'

export default class ContentPageSectionHead extends React.Component {

  render() {
    return (
      <div>
        <ContentPageSectionTemplate content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="ContentPageSectionHeadOuterContainer">
        <ContentPageSectionAnchor title={this.props.title}/>
        <div className="ContentPageSectionHeadInnerContainer">
          <div className="ContentPageSectionHeadTitleContainer">
            <h2 className="ContentPageSectionHeadTitle">{this.props.title}</h2>
          </div>
          <div className="ContentPageIntroParagraphContentContainer">
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}