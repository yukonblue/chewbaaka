/**
 * HistoryPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 16, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import { config }  from './config'

import ContentPageTableOfContentMenuBootstrapper from '../shared/ContentPageTableOfContentMenuBootstrapper'

import HistoryPageIntroSection from './HistoryPageIntroSection'
import HistoryPageSectionEvolution from './HistoryPage_Section_Evolution'
import HistoryPageSectionCheetahAndMan from './HistoryPage_Section_CheetahAndMan'
import HistoryPageSectionRangeAndPopulation from './HistoryPage_Section_RangeAndPopulation'

import coverImage from './assets/History_Page_Banner_Image.jpg'

import '../shared/GlobalPageStyles.css'
import '../../styling/SharedStyles.css'

export default class HistoryPage extends React.Component {

  render() {
    let pageProps = config.pageProps;
    pageProps.coverImage = coverImage;

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

        <HistoryPageIntroSection
          contentPageIntro={config.contentPageIntro}
        />

        <HistoryPageSectionEvolution config={config} />

        <HistoryPageSectionCheetahAndMan config={config} />

        <HistoryPageSectionRangeAndPopulation config={config} />
      </div>
    )
  }
}
