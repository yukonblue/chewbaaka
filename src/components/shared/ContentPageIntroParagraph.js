/**
 * ContentPageIntroParagraph.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

/**
 * ContentPageIntroParagraph
 *
 * `ContentPageIntroParagraph` is a component that hosts
 * the introduction title and paragraph of each content page.
 *
 * Props:
 *
 *  - `title`: Text of the introduction title.
 *
 *  - `content`: Text of the introduction paragraph.
 */

import React from 'react';

import './ContentPageIntroParagraph.css'

import ContentPageSectionTemplate from '../shared/ContentPageSectionTemplate'

export default class ContentPageIntroParagraph extends React.Component {

  render() {
    return (
      <div>
        <ContentPageSectionTemplate content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="ContentPageIntroParagraphOuterContainer">
        <div className="ContentPageIntroParagraphInnerContainer">
          <div className="ContentPageIntroParagraphTitleContainer">
            <h1 className="ContentPageIntroParagraphTitle">{this.props.title}</h1>
          </div>
          <div className="ContentPageIntroParagraphContentContainer">
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
