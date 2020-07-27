/**
 * FuturePage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import ContentPageTableOfContentMenuBootstrapper from '../shared/ContentPageTableOfContentMenuBootstrapper'
import ContentPageIntroSectionGeneric from '../shared/ContentPageIntroSectionGeneric'

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
        pageProps={config.pageProps}
        content={this.renderContent()}
        imagesContext={this.state.imagesContext}
      />
    )
  }

  renderContent() {
    return (
      <div>
        <ContentPageTableOfContentMenuBootstrapper
          pageMenuItems={config.pageProps.pageMenuItems}
          imagesContext = {this.state.imagesContext}
        />

        <ContentPageIntroSectionGeneric
          contentPageIntro={config.contentPageIntro}
          imagesContext = {this.state.imagesContext}
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

        <FuturePageTail />
      </div>
    )
  }
}
