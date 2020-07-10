/**
 * ContentPageIntroParagraph.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 10, 2020
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

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSharedStyles.css'
import './ContentPageIntroParagraph.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

export default class ContentPageIntroParagraph extends React.Component {

  render() {
    return (
      <div>
        <ContentPageSubsectionTemplate content={this.renderContent()} />
      </div>
    )
  }

  renderContent() {
    return (
      <div className="ContentPageIntroParagraphOuterContainer">
        <div className={getElementStyleClassName("ContentPageIntroParagraphInnerContainer")}>
          <div className={getElementStyleClassName("ContentPageIntroParagraphTitleContainer")}>
            <h1 className={getElementStyleClassName("ContentPageIntroParagraphTitle")}>{this.props.title}</h1>
          </div>
          <div className={getElementStyleClassName("ContentPageIntroParagraphContentContainer")}>
            <p className="ContentPageSectionSubtitleText">{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
