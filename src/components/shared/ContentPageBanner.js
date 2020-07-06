/**
 * ContentPageBanner.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import './ContentPageSharedStyles.css'
import './ContentPageBanner.css'

function ContentPageBanner(props) {
  const contentPageBannerContainerStyles = {
    backgroundImage: `url(${props.coverImage})`,
  };

  return (
    <div className="ContentPageSkeletonContentContainerDimension ContentPageBannerContainer" style={contentPageBannerContainerStyles}>
    </div>
  );
}

export default ContentPageBanner;
