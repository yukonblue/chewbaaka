/**
 * ContentPageHead.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 18, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import { getElementStyleClassNames } from '../../styling/styling'

import ContentPageTopNavMenuBar from './ContentPageTopNavMenuBar'
import ContentPageBanner from './ContentPageBanner'

import './ContentPageSharedStyles.css'

import './ContentPageHead.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageHead-debug.css')

export default function ContentPageHead(props) {
  let coverImage = null;

  /**
   * NOTE:
   * We don't have a context in unit test.
   */
  if (props.imagesContext) {
    const images = props.imagesContext();
    coverImage = images("./" + props.pageProps.coverImage);
  }

  return (
    <header>
      <div
        className={getElementStyleClassNames(["ContentPageSkeletonContentContainerDimension",
                                              "ContentPageHeadOuterContainer"])}
        data-testid="ContentPageHeadComponentTestId"
      >
        <ContentPageTopNavMenuBar
          pageTitle={props.pageProps.title}
        />
        <ContentPageBanner
          coverImage={coverImage}
          title={props.pageProps.title}
          subtitle={props.pageProps.subtitle}
        />
      </div>
    </header>
  );
}
