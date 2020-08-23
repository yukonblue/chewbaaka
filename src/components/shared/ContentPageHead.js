/**
 * ContentPageHead.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 22, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageTopNavMenuBar from './ContentPageTopNavMenuBar'
import ContentPageBanner from './ContentPageBanner'

import './ContentPageSharedStyles.css'

import './ContentPageHead.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageHead-debug.css')

export default function ContentPageHead(props) {
  return (
    <header>
      <div
        className={getElementStyleClassName("ContentPageHeadOuterContainer")}
        data-testid="ContentPageHeadComponentTestId"
      >
        <ContentPageTopNavMenuBar
          pageTitle={props.pageProps.title}
        />
        <ContentPageBanner
          coverImageNamePrefix={props.pageProps.coverImageNamePrefix}
          imagesContext={props.imagesContext}
          title={props.pageProps.title}
          subtitle={props.pageProps.subtitle}
        />
      </div>
    </header>
  );
}
