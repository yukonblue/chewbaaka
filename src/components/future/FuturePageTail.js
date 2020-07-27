/**
 * FuturePageTail.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import {
  kStringConstantCheetahConservationFund,
  kStringConstantCCFVisionStatement
} from '../shared/constants'

import './FuturePageTail.css'

export default class FuturePageTail extends React.Component {

  render() {
    return (
      <ContentPageSubsectionTemplate
        content={this.renderBody()}
      />
    );
  }

  renderBody() {
    return (
      <div className="FuturePageTailOuterContainer">
        <div className="FuturePageTailStatementBoxOuterContainer">
          <div className="FuturePageTailStatementBoxInnerContainer">
            <h5 className="FuturePageTailTitle TextCentered">
              {`${kStringConstantCheetahConservationFund} Vision Statement`}
            </h5>
            <p className="FuturePageTailVisionStatementText TextCentered">
              {kStringConstantCCFVisionStatement}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
