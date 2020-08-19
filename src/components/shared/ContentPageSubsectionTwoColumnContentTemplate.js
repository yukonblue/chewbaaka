/**
 * ContentPageSubsectionTwoColumnContentTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 18, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import ContentPageSubsectionSubtitle from './ContentPageSubsectionSubtitle'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import './ContentPageSubsectionTwoColumnContentTemplate.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageSubsectionTwoColumnContentTemplate-debug.css')

export default class ContentPageSubsectionTwoColumnContentTemplate extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("ContentPageSubsectionTwoColumnContentTemplateOuterContainer")}>
        <div className="ContentPageSubsectionTwoColumnContentTemplateInnerContainer">
          <div className={getElementStyleClassNames(["ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainer",
                                                    "ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainerLhs"])}
          >
            {this.renderOptionalColumnSubtitlePart(this.props.lhsColumn.title)}

            {this.props.lhsColumn.content}
          </div>
          <div className={getElementStyleClassNames(["ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainer",
                                                    "ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainerRhs"])}
          >
            {this.renderOptionalColumnSubtitlePart(this.props.rhsColumn.title)}

            {this.props.rhsColumn.content}
          </div>
        </div>
      </div>
    );
  }

  renderOptionalColumnSubtitlePart(title) {
    if ( !title ) return null;

    return (
      <ContentPageSubsectionSubtitle>
        {title}
      </ContentPageSubsectionSubtitle>
    );
  }
}
