/**
 * FuturePage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Aug 20, 2020
 */

import React, { Fragment } from 'react'

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import { config }  from './config'

import FuturePageSectionConservation from './FuturePage_Section_Conservation'
import FuturePageSectionSustainableDevelopment from './FuturePage_Section_SustainableDevelopment'
import FuturePageSectionOutreachAndEducation from './FuturePage_Section_OutreachAndEducation'
import FuturePageTail from './FuturePageTail'

export default class FuturePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imagesContext: () => (require.context("./assets/", true))
    };
  }

  render() {
    return (
      <ContentPageSkeleton
        appConfig={this.props.appConfig}
        pageConfig={config}
        content={this.renderContent()}
        imagesContext={this.state.imagesContext}
      />
    );
  }

  renderContent() {
    return (
      <Fragment>
        <FuturePageSectionConservation
          config={config}
        />

        <FuturePageSectionSustainableDevelopment
          config={config}
        />

        <FuturePageSectionOutreachAndEducation
          config={config}
        />

        <FuturePageTail />
      </Fragment>
    );
  }
}
