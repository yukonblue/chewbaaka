/**
 * BiologyPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Aug 18, 2020
 */

import React, { Fragment } from 'react'

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import ContentPageTableOfContentMenuBootstrapper from '../shared/ContentPageTableOfContentMenuBootstrapper'
import ContentPageIntroSectionGeneric from '../shared/ContentPageIntroSectionGeneric'

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

        <BiologyPageSectionLifecyle config={config} />

        <BiologyPageSectionPhysiology config={config} />

        <BiologyPageSectionGenetics config={config} />
      </Fragment>
    );
  }
}
