/**
 * ContentPageSubsectionTwoColumnContentTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 18, 2020
 */

import React from 'react';

import { Grid } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css";

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSubsectionTwoColumnContentTemplate.css'

export default class ContentPageSubsectionTwoColumnContentTemplate extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("ContentPageSubsectionTwoColumnContentTemplateOuterContainer")}>
        <div className="ContentPageSubsectionTwoColumnContentTemplateInnerContainer">
          <div>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column width={this.props.lhsColumn.width}>
                  <div className={getElementStyleClassName("ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainer")}>
                    <h2 className={getElementStyleClassName("ContentPageSubsectionColumnContentTitle")}>
                      {this.props.lhsColumn.title}
                    </h2>
                    {this.props.lhsColumn.content}
                  </div>
                </Grid.Column>
                <Grid.Column width={this.props.rhsColumn.width}>
                  <div className={getElementStyleClassName("ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainer")}>
                    <h2 className={getElementStyleClassName("ContentPageSubsectionColumnContentTitle")}>
                      {this.props.rhsColumn.title}
                    </h2>
                    {this.props.rhsColumn.content}
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}
