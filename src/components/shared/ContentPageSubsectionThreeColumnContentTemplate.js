/**
 * ContentPageSubsectionThreeColumnContentTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import ContentPageSubsectionSubtitle from './ContentPageSubsectionSubtitle'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import './ContentPageSharedStyles.css'
import './ContentPageSubsectionThreeColumnContentTemplate.css'

export default class ContentPageSubsectionThreeColumnContentTemplate extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("ContentPageSubsectionThreeColumnContentTemplateOuterContainer")}>
        <div className={getElementStyleClassName("ContentPageSubsectionThreeColumnContentTemplateInnerContainer")}>
          <div className="ContentPageSubsectionThreeColumnContentTemplateColumnContainer">
            <div className={getElementStyleClassNames(["ContentPageSubsectionThreeColumnContentTemplateColumn", "ContentPageSubsectionThreeColumnContentTemplateLeftColumnContainer"])}>
              <ContentPageSubsectionSubtitle>
                {this.props.lhsColumn.title}
              </ContentPageSubsectionSubtitle>
              <h3 className={getElementStyleClassName("ContentPageSubsectionColumnContentSubtitle")}>
                {this.props.lhsColumn.subtitle}
              </h3>
              <div>
                {this.props.lhsColumn.content}
              </div>
            </div>
            <div
              className={getElementStyleClassNames(["ContentPageSubsectionThreeColumnContentTemplateColumn",
                                                    "ContentPageSubsectionThreeColumnContentTemplateMiddleColumnContainer"])}
              style={this.getColumnStyle(this.props.middleColumn)}
            >
              {this.renderOptionalTitleForMiddleColumn()}
              <div>
                {this.props.middleColumn.content}
              </div>
            </div>
            <div className={getElementStyleClassNames(["ContentPageSubsectionThreeColumnContentTemplateColumn", "ContentPageSubsectionThreeColumnContentTemplateRightColumnContainer"])}>
              <ContentPageSubsectionSubtitle>
                {this.props.rhsColumn.title}
              </ContentPageSubsectionSubtitle>
              <h3 className={getElementStyleClassName("ContentPageSubsectionColumnContentSubtitle")}>
                {this.props.rhsColumn.subtitle}
              </h3>
              <div>
                {this.props.rhsColumn.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderOptionalTitleForMiddleColumn() {
    const pred = () => {
      if (this.props.showTitleInMiddleColumn) {
        return (
          <ContentPageSubsectionSubtitle>
            {this.props.middleColumn.title}
          </ContentPageSubsectionSubtitle>
        );
      }
    };
    return pred();
  }

  getColumnStyle(column) {
    return {
      backgroundColor: `rgb(${column.backgroundColorRGB})`
    };
  }
}
