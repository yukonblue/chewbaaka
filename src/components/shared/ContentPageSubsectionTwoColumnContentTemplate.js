/**
 * ContentPageSubsectionTwoColumnContentTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { Grid } from 'semantic-ui-react'

import './ContentPageSubsectionTwoColumnContentTemplate.css'

export default class ContentPageSubsectionTwoColumnContentTemplate extends React.Component {

  render() {
    return (
      <div className="ContentPageSubsectionTwoColumnContentTemplateOuterContainer">
        <div className="ContentPageSubsectionTwoColumnContentTemplateInnerContainer">
          <div>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column width={this.props.lhsColumn.width}>
                  <div className="ContentPageSubsectionTwoColumnContentTemplateLhsColumnInnerContainer">
                    {this.props.lhsColumn.content}
                  </div>
                </Grid.Column>
                <Grid.Column width={this.props.rhsColumn.width}>
                  <div className="ContentPageSubsectionTwoColumnContentTemplateRhsColumnInnerContainer">
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
