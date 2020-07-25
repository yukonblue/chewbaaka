/**
 * EcologyPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import ContentPageTableOfContentMenuBootstrapper from '../shared/ContentPageTableOfContentMenuBootstrapper'
import ContentPageIntroSectionGeneric from '../shared/ContentPageIntroSectionGeneric'

import { config }  from './config'

import EcologyPageSectionEcosystemAndHabitat from './EcologyPage_Section_EcosystemAndHabitat'
import EcologyPageSectionEcomanagement from './EcologyPage_Section_Ecomanagement'
import EcologyPageSectionResearch from './EcologyPage_Section_Research'

export default class EcologyPage extends React.Component {

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

        <ContentPageIntroSectionGeneric
          contentPageIntro={config.contentPageIntro}
          imagesContext = {this.state.imagesContext}
        />

        <EcologyPageSectionEcosystemAndHabitat config={config}/>

        <EcologyPageSectionEcomanagement config={config} />

        <EcologyPageSectionResearch config={config} />
      </div>
    )
  }
}
