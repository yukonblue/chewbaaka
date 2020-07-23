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

import FuturePageSectionConservation from './FuturePage_Section_Conservation'

import { config }  from './config'

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
        <FuturePageSectionConservation
          config={config}
        />
      </div>
    )
  }
}
