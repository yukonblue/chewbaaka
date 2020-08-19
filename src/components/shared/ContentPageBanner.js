/**
 * ContentPageBanner.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 18, 2020
 */

import React from 'react'

import { getElementStyleClassNames } from '../../styling/styling'

import './ContentPageSharedStyles.css'

import './ContentPageBanner.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageBanner-debug.css')

export default function ContentPageBanner(props) {
  const contentPageBannerContainerStyles = {
    backgroundImage: `url(${props.coverImage})`,
  };

  return (
    <div
      className={getElementStyleClassNames(["ContentPageSkeletonContentContainerDimension",
                                            "ContentPageBannerContainer"])}
      style={contentPageBannerContainerStyles}
      data-testid="ContentPageBannerComponentTestId"
    >
      <div className="ContentPageBannerTitleContainer">
        <h1 className="ContentPageBannerTitle">{props.title}</h1>
        <hr className="ContentPageBannerTitleLineBreak" />
        <p className="ContentPageBannerSubtitle">{props.subtitle}</p>
      </div>
    </div>
  );
}
