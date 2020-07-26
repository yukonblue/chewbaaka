/**
 * ContentPageSubsectionTwoColumnContentTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import ContentPageSubsectionSubtitle from './ContentPageSubsectionSubtitle'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import './ContentPageSubsectionTwoColumnContentTemplate.css'

export default class ContentPageSubsectionTwoColumnContentTemplate extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("ContentPageSubsectionTwoColumnContentTemplateOuterContainer")}>
        <div className="ContentPageSubsectionTwoColumnContentTemplateInnerContainer">
          <div className="ContentPageSubsectionTwoColumnContentTemplateColumnContainer"> 
            <div className={getElementStyleClassNames(["ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainer",
                                                      "ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainerLhs"])}
            >
              <ContentPageSubsectionSubtitle>
                {this.props.lhsColumn.title}
              </ContentPageSubsectionSubtitle>
              {this.props.lhsColumn.content}
            </div>
            <div className={getElementStyleClassNames(["ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainer",
                                                      "ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainerRhs"])}
            >
              <ContentPageSubsectionSubtitle>
                {this.props.rhsColumn.title}
              </ContentPageSubsectionSubtitle>
              {this.props.rhsColumn.content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
