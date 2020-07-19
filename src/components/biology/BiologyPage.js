/**
 * BiologyPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 18, 2020
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

import coverImage from './assets/biology_page_cover_image.jpg'

export default class FuturePage extends React.Component {

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
