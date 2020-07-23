/**
 * FuturePage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 22, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import ContentPageTableOfContentMenuBootstrapper from '../shared/ContentPageTableOfContentMenuBootstrapper'

import { config }  from './config'

import FuturePageSectionConservation from './FuturePage_Section_Conservation'
import FuturePageSectionSustainableDevelopment from './FuturePage_Section_SustainableDevelopment'
import FuturePageSectionOutreachAndEducation from './FuturePage_Section_OutreachAndEducation'

export default class FuturePage extends React.Component {

  render() {
    let pageProps = config.pageProps;

    return (
      <ContentPageSkeleton
        pageProps={pageProps}
        content={this.renderContent()}
      />
    )
  }

  renderContent() {
    return (
      <div>
        <ContentPageTableOfContentMenuBootstrapper
          pageMenuItems={config.pageProps.pageMenuItems}
          imagesContext = {() => (require.context("./assets/menu", true))}
        />

        <FuturePageSectionConservation
          config={config}
        />

        <FuturePageSectionSustainableDevelopment
          config={config}
        />

        <FuturePageSectionOutreachAndEducation
          config={config}
        />
      </div>
    )
  }
}
