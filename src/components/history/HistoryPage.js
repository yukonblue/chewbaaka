/**
 * HistoryPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 18, 2020
 */

import React, { Fragment } from 'react'

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import { config }  from './config'

import ContentPageTableOfContentMenuBootstrapper from '../shared/ContentPageTableOfContentMenuBootstrapper'
import ContentPageIntroSectionGeneric from '../shared/ContentPageIntroSectionGeneric'

import HistoryPageSectionEvolution from './HistoryPage_Section_Evolution'
import HistoryPageSectionCheetahAndMan from './HistoryPage_Section_CheetahAndMan'
import HistoryPageSectionRangeAndPopulation from './HistoryPage_Section_RangeAndPopulation'

export default class HistoryPage extends React.Component {

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
        pageProps={config.pageProps}
        content={this.renderContent()}
        imagesContext={this.state.imagesContext}
      />
    );
  }

  renderContent() {
    return (
      <Fragment>
        <ContentPageTableOfContentMenuBootstrapper
          pageMenuItems={config.pageProps.pageMenuItems}
          imagesContext = {this.state.imagesContext}
        />

        <ContentPageIntroSectionGeneric
          contentPageIntro={config.contentPageIntro}
          imagesContext = {this.state.imagesContext}
        />

        <HistoryPageSectionEvolution config={config} />

        <HistoryPageSectionCheetahAndMan config={config} />

        <HistoryPageSectionRangeAndPopulation config={config} />
      </Fragment>
    );
  }
}
