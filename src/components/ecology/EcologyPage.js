/**
 * EcologyPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 20, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import { config }  from './config'

import EcologyPageSectionEcosystemAndHabitat from './EcologyPage_Section_EcosystemAndHabitat'
import EcologyPageSectionEcomanagement from './EcologyPage_Section_Ecomanagement'
import EcologyPageSectionResearch from './EcologyPage_Section_Research'

import coverImage from './assets/savannah.jpg'

export default class EcologyPage extends React.Component {

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
        <EcologyPageSectionEcosystemAndHabitat config={config}/>

        <EcologyPageSectionEcomanagement config={config} />

        <EcologyPageSectionResearch config={config} />
      </div>
    )
  }
}
