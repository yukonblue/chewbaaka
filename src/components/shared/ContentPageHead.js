/**
 * ContentPageHead.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import './ContentPageHead.css'
import './ContentPageSharedStyles.css'

import { getElementStyleClassNames } from '../../styling/styling'

import ContentPageTopNavMenuBar from './ContentPageTopNavMenuBar'
import ContentPageBanner from './ContentPageBanner'

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
    <div
      className={getElementStyleClassNames(["ContentPageSkeletonContentContainerDimension",
                                            "ContentPageHeadOuterContainer"])}
      data-testid="ContentPageHeadComponentTestId"
    >
      <div className="ContentPageHeadNavMenuBarOuterContainer">
        <ContentPageTopNavMenuBar />
      </div>
      <ContentPageBanner
        coverImage={coverImage}
        title={props.pageProps.title}
        subtitle={props.pageProps.subtitle}
      />
    </div>
  );
}
