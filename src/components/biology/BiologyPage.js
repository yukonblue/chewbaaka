/**
 * BiologyPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import ContentPageTableOfContentMenuBootstrapper from '../shared/ContentPageTableOfContentMenuBootstrapper'

import BiologyPageIntroSection from './BiologyPageIntroSection'
import BiologyPageSectionLifecyle from './BiologyPage_Section_Lifecycle'
import BiologyPageSectionPhysiology from './BiologyPage_Section_Physiology'
import BiologyPageSectionGenetics from './BiologyPage_Section_Genetics'

import { config }  from './config'

export default class BiologyPage extends React.Component {

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
          imagesContext = {() => (require.context("./assets/menu", true))}
        />

        <BiologyPageIntroSection
          contentPageIntro={config.contentPageIntro}
        />

        <BiologyPageSectionLifecyle config={config} />

        <BiologyPageSectionPhysiology config={config} />

        <BiologyPageSectionGenetics config={config} />
      </div>
    )
  }
}
